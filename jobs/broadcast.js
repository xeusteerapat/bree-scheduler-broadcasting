const { parentPort } = require('worker_threads');
const Message = require('../models/Message');
const moment = require('moment-timezone');
const connectDB = require('../config/db');
const { textBroadcast } = require('../libs/broadcast-text');

let isCancelled = false;
if (parentPort) {
  parentPort.once('message', message => {
    if (message === 'cancel') isCancelled = true;
  });
}

(async () => {
  await connectDB();
  const messages = await Message.find({
    isSchedule: true,
  }).exec();

  await Promise.all(
    messages.map(async message => {
      return new Promise(async (resolve, reject) => {
        try {
          if (isCancelled) return;

          if (
            moment.tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm') <
            moment(message.scheduleTime, 'YYYY-MM-DD HH:mm').format(
              'YYYY-MM-DD HH:mm'
            )
          ) {
            console.log('It it not time yet to broadcast');
            resolve();
          } else {
            console.log('<<< start broadcast message >>>');
            try {
              // broadcast message
              await textBroadcast(message.text);
              // update broadcast status
              await Message.findOneAndUpdate(
                {
                  _id: message._id,
                },
                {
                  isSchedule: false,
                }
              );
            } catch (err) {
              console.error(err);
            }
            resolve();
          }
        } catch (err) {
          reject(err);
        }
      });
    })
  );

  if (parentPort) parentPort.postMessage('done');
  else process.exit(0);
})();
