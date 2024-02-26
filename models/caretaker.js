import mongoose from "mongoose";

const CaretakerSchema = new mongoose.Schema({
  _id:{
    type:String
  },
    name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    ref: 'User',},
});

const Caretaker = mongoose.model("Caretaker", CaretakerSchema);

export default Caretaker;
