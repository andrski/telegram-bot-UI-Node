const User = require('../schemas/userSchema');
const { bot } = require('../controllers/bot');
var chatId = '';

bot.onText(/\/start/, (msg) => {
    const { id } = msg.chat;
    chatId = id;
});


module.exports.create = async (req, res) => {
    if (!req.body.name) {
        res.status(400).json({message: 'no user name'});
    } else {
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
};

module.exports.deleteUser = async (req, res) => {
    if (req.body.name) {
        await User.deleteOne({name: req.body.name});

        if (chatId) {
            bot.sendMessage(chatId, `user ${req.body.name} has been delete`);
        }
    
        res.status(200).json({message: `user ${req.body.name} was deleted`});
    } else {
        res.status(400).json({message: 'not enter name'});
    }
    
};

module.exports.update = async (req, res) => {
    if (!req.body._id) {

        if (chatId) {
            bot.sendMessage(chatId, `somebody try update any user`);
        }

        res.status(400).json({message: 'bad request'});
    } else {
        const updateFields = [];
        if (req.body.name) {
            await User.updateOne(
              { _id: req.body._id },
              { $set: { name: req.body.name } }
            );
            updateFields.push('name');
        }

        if (req.body.email) {
            await User.updateOne(
              { _id: req.body._id },
              { $set: { email: req.body.email } }
            );
            updateFields.push('email');
        }

        if (req.body.birth) {
            await User.updateOne(
              { _id: req.body._id },
              { $set: { birth: req.body.birth } }
            );
            updateFields.push('birth');
        }

        if (req.body.phoneNumber) {
            await User.updateOne(
              { _id: req.body._id },
              { $set: { phoneNumber: req.body.phoneNumber } }
            );
            updateFields.push('phoneNumber');
        }

        if (chatId) {
            const user = await User.findOne({_id: req.body._id});
            bot.sendMessage(chatId, `${updateFields.join('  ')} fields was updated in ${user.name}`);
        }

        res.status(200).json({ message: "updated" });
    }
};
