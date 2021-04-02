const User = require('../schemas/userSchema');
const { bot } = require('../controllers/bot');
const { json } = require('express');
var chatId = '';

bot.onText(/\/start/, (msg) => {
    const { id } = msg.chat;
    chatId = id;
});


module.exports.create = async (req, res) => {
    const newUser = new User({
        name: req.body.name,
        birth: req.body.birth,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber
    });

    await newUser.save();

    const user = await User.findOne({name: req.body.name});

    if (chatId) {
        bot.sendMessage(chatId, `user has been create, id: ${user._id}`);
    }

    res.status(200).json({message: 'user created'});
}
