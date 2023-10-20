const mongoose = require("mongoose");
const { Schema } = mongoose;

const messageSchema = new Schema({
  sender : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User",
    required : true,
  },
  content : {
    type : String,
    required : true,
  },
  tiemstamp : {
    type : Date,
    default : Date.now,
  },
});

module.exports = mongoose.model("Message", messageSchema);