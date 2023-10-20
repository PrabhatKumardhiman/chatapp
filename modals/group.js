const mongoose = require("mongoose");
const { Schema } = mongoose;
const ChatRoom = require('./chatRoom')


const groupSchema = new Schema({
  name : {
    type : String,
    unique : true,
    required : true,
  },
  member : [
    {
      type : mongoose.Schema.Types.ObjectId,
      ref : "User",
    },
  ],
  chatRooms : [ChatRoom],
});

module.exports = mongoose.model("Group", groupSchema);