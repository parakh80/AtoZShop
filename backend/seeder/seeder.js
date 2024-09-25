import mongoose from "mongoose";
import products from "./data.js";
import Product from "../models/product.js";
import dotenv from "dotenv";
dotenv.config({ path: "backend/config/config.env" });

let DB_URI = "";

if (process.env.NODE_ENV === "DEVELOPMENT") DB_URI = process.env.DB_LOCAL_URI;
if (process.env.NODE_ENV === "PRODUCTION") DB_URI = process.env.DB_URI;
console.log(DB_URI);

const seedProducts = async () => {
  try {
    await mongoose.connect(DB_URI);

    await Product.deleteMany();
    console.log("Products are deleted");

    await Product.insertMany(products);
    console.log("Products are added");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();
