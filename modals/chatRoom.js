const mongoose = require("mongoose");
const { Schema } = mongoose;


const chatRoomSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  messages: Array,
});

module.exports = mongoose.model("ChatRoom", chatRoomSchema);