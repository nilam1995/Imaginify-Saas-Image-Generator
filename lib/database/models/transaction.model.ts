import { Schema, model, models } from "mongoose";

const TransactionSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  stripId: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  plan: {
    type: String,
  },
  credits: {
    type:Number,
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  }
})


const Transaction = models?.transaction || model("Transaction",TransactionSchema);

export default Transaction;