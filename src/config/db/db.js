const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb+srv://quys:0k1m3HaKOIjIU1X9@cluster0.uwau6.mongodb.net/datatest');
    // await mongoose.connect('mongodb://localhost:27017/datatest');
    console.log("connect success mongodb");
  } catch (error) {
    console.log("connect fail mongodb");
  }
}
//xJWcQ5lZXqgaumhs
//mongodb+srv://quysEdittor:xJWcQ5lZXqgaumhs@cluster0.uwau6.mongodb.net/test
//mongodb+srv://myCoffeeDB:abc@123@piccolocoffeecluster.dvdub.mongodb.net/datatest?retryWrites=true&w=majority

module.exports = { connect }
