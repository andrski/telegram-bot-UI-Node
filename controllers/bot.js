const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TOKEN;

module.exports.bot =  new TelegramBot(token, {
    polling: {
        interval: 500,
        autoStart: true,
        params: {
            timeout: 10
        }
    }
});

