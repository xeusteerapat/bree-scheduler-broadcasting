const Message = require('../models/Message');

const createMessage = async (req, res) => {
  const { text, isSchedule } = req.body;

  const message = await Message.create(req.body);

  res.send(message);
};

module.exports = {
  createMessage,
};
