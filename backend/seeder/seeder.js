import mongoose from "mongoose";
import products from "./data.js";
import Product from "../models/product.js";
import path from "path";


import dotenv from "dotenv";
dotenv.config({ path: "backend/config/config.env" });

const seedProducts = async () => {

    let mongodb_uri = "";
    if (process.env.NODE_ENV === "DEVELOPMENT") {
      mongodb_uri = process.env.DB_LOCAL_URI;
    }else if (process.env.NODE_ENV === "PRODUCTION") {
      mongodb_uri = process.env.DB_URI;
    }

  try {
    await mongoose.connect(
      mongodb_uri,
    );

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
