import mongoose from "mongoose";

//creating Schema for project
const urlSchema = new mongoose.Schema({
  longUrl: String,
  shortCode: String
});

export const url = mongoose.model("shortUrl", urlSchema);