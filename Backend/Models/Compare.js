const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  Name: String,
  Image: String,
  Link: String,
  price: String,
});

const Amazon = mongoose.model("Amazons", ProductSchema, "amazons");
const Flipkart = mongoose.model("Flipkarts", ProductSchema, "flipkarts");
const Ebay = mongoose.model("Ebays", ProductSchema, "ebays");

module.exports = { Amazon, Flipkart, Ebay };
