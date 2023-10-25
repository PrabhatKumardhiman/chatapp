const mongoose = require("mongoose");
const { Schema } = mongoose;


const chatRoomSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  group : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Group",
    required : true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 50, // Set the time in seconds after which the document should expire
  },
  messages: Array,
});

module.exports = mongoose.model("ChatRoom", chatRoomSchema);