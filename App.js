const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const token = process.env.TOKEN;

const bot = new TelegramBot(token, {
    polling: {
        interval: 500,
        autoStart: true,
        params: {
            timeout: 10
        }
    }
});

// bot.on('message', (msg) => {
//     const { id } = msg.chat;
//     console.log(msg);
//     if (msg.text === 'hello') {
//         bot.sendMessage(id, `hello ${msg.chat.username}`);
//     } else {
//         bot.sendMessage(id, `no mttches`);

//     }
// });

bot.onText(/\/userinformationfield (.+)/, (msg, [sourse, param]) => {
    const { id } = msg.chat;
    bot.sendMessage(id, param);
});
