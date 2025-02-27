const port = 5000;
import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
import cors from "cors";
import fs from "fs";
import Product from "./models/Product.js"; 
import User from "./models/User.js";


const app = express(); 

app.use(express.json()); 
app.use(cors());

// Ensure upload directory exists
const uploadDir = "./upload/images";
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Initialize our database
const mongoURI = "mongodb+srv://motshabielizabeth1:kn3FVJyi5b3LMeNN@cluster0.ldq5a.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// API creation
app.get("/", (req, res) => {
    res.send("Express App is Running");
});

// Image storage engine configured disk storage
const storage = multer.diskStorage({
    destination: "./upload/images",
    filename: (req, file, cb) => {  
      cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

// Serve uploaded images statically
app.use('/images', express.static('upload/images'));

// Creating an upload endpoint for images
app.post("/upload", upload.single('product'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: 0, message: "No file uploaded" });
    }

    res.json({ 
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});



// Ceating product
app.post("/addproduct", async(req,res)=>{
    let products = await Product.find({});
    let id;
    if(products.length > 0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0]
        id =last_product.id+1
    }
    else{
        id=1;
    }

 const product = new Product({
    id:req.body.id,
    name:req.body.name,
    image:req.body.image,
    category:req.body.category,
    new_price:req.body.new_price,
    old_price: req.body.old_price
 }); 
 console.log(product);
 await product.save();
 console.log("Successfully saved")
 res.json({success:true, name:req.body.name})
})

//API for deleting a product
app.delete('/removeproduct', async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("deleted");
    res.json({
        success:true,
        name:req.body.name
    })

    
})

//creating API FOR GETTING ALL PRODUCT

app.get("/allproducts", async (req, res) => {
    try {
        let products = await Product.find({});
        console.log("All products fetched successfully");
        res.status(200).json(products); // Send as JSON with HTTP status 200
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Server error while fetching products" }); // Send a proper error response
    }
});


//creating Endpoint for registering a user
app.post('/signup', async (req, res) => {
    try {
      let check = await User.findOne({ email: req.body.email });
      
      if (check) {
        return res.status(400).json({ success: false, message: "Existing user found with same email address" });
      }
      let cart = {};
      
      
  
    } catch (error) {
      console.error("Couldn't register:", error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  });
  

// Start the server
app.listen(port, (error) => {
    if (!error) {
        console.log("Server running on port " + port);
    } else {
        console.log("Error: " + error);
    }
});
