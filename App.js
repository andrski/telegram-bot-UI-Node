require('dotenv').config();
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
var _ = require('lodash');
const router = require('./routes/routes');
const User = require('./schemas/userSchema');
const { bot } = require('./controllers/bot');

const { MongoClient } = require("mongodb");

const token = process.env.TOKEN;
const port = process.env.PORT || 3000;
const url = process.env.MONGO_URL;
// for disable polling error
process.env.NTBA_FIX_319 = 1;

const client = new MongoClient(url, { useUnifiedTopology: true } );

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: 'https://test-bot-listener.herokuapp.com'
}));
app.use(router);

bot.onText(/\/id (.+)/, async (msg, [sourse, param]) => {
    const { id } = msg.chat;
    const user = await User.find({_id: param});
    
    const botResponse = `user name ${user[0].name} 
    user email ${user[0].email} 
    date of birth ${user[0].birth} 
    phone number ${user[0].phoneNumber}`

    bot.sendMessage(id, botResponse);
});

bot.onText(/\/count/, async (msg) => {
  const { id } = msg.chat;
  const users = await User.find({});

  bot.sendMessage(id, `count sign in users in system ${users.length}`);
});

bot.onText(/\/field (.+)/, async (msg, [sourse, params]) => {
  const { id } = msg.chat;
  const value = params.split(' ')[1];
  let user = {};

  switch(params.split(' ')[0]) {
    case 'name': user = await User.findOne({name: value})
    break; 

    case 'birth': user = await User.findOne({birth: value})
    break;

    case 'email': user = await User.findOne({email: value})
    break;

    case 'phoneNumber': user = await User.findOne({phoneNumber: value})
    break;
  };

  if (!_.isEmpty(user)) {
    const responseBotArray = [];

    const strangObj = Object.entries(user)[5][1];

    if (strangObj.hasOwnProperty('name')) {
      responseBotArray.push(strangObj.name);
    }

    if (strangObj.hasOwnProperty('email')) {
      responseBotArray.push(strangObj.email);
    }

    if (strangObj.hasOwnProperty('birth')) {
      responseBotArray.push(strangObj.birth);
    }

    if (strangObj.hasOwnProperty('phoneNumber')) {
      responseBotArray.push(strangObj.phoneNumber);
    }

    bot.sendMessage(id, `user info: ${responseBotArray.join(', ')}`);
  } else {
    bot.sendMessage(id, 'you enter invalid type of field ore field value');
  }
});

let changeStream;
async function run() {
  try {
    await client.connect();
    const database = client.db("myFirstDatabase");
    const users = database.collection("users");
    // open a Change Stream on the "users" collection
    changeStream = users.watch();
    // set up a listener when change events are emitted
    changeStream.on("change", next => {
      // process any change event
      console.log("received a change to the collection: \t", next);
    });

    // use a timeout to ensure the listener is registered before the insertOne
    // operation is called.

    await new Promise(resolve => {
      setTimeout(async () => {
        await users.insertOne({
          test: "sample movie document",
        });

        // wait to close `changeStream` after the listener receives the event
        setTimeout(async () => {
          resolve(await changeStream.close());
        }, 1000);
      }, 1000);
    });

  } finally {
    await client.close();
  }
}
// run().catch(console.dir);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join('front_end/dist')))
  //handle SPA
  //  any routes from all
  app.get(/.*/, (req, res)=>{
      res.sendFile(__dirname + 'front_end/dist/index.html')
  }) 
}

app.use(express.static(path.join('front_end/dist')))
//handle SPA
//  any routes from all
app.get(/.*/, (req, res)=>{
  res.sendFile(__dirname + 'front_end/dist/index.html')
})                                 

async function start() {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("data base connected");
  
    app.listen(port, () => {
      console.log(`
  -------------------------------
  Server on: ${port}
  http://localhost:${port}/
  -------------------------------
  `);
    });
  }
  start();