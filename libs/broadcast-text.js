const axios = require('axios');

const textBroadcast = async text => {
  const data = JSON.stringify({
    to: [process.env.LINE_ID],
    messages: [
      {
        type: 'text',
        text,
      },
    ],
  });

  const config = {
    method: 'post',
    url: `https://api.line.me/v2/bot/message/multicast`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.LINE_ACCESS_TOKEN}`,
    },
    data,
  };

  try {
    await axios(config);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  textBroadcast,
};
