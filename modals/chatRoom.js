const mongoose = require("mongoose");
const { Schema } = mongoose;
const Message = require('./Message')


const chatRoomSchema = new Schema({
  name : {
    type : String,
    required : true,
  },
  messages : [Message],
});

module.exports = mongoose.model("ChatRoom", chatRoomSchema);