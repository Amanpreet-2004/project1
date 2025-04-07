const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const multer = require("multer");
const Product = require("../form");
const value = require("../user");
const cors = require("cors");
const submit = require("../Asign");
const Like = require("../Liked");


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


mongoose
  .connect("mongodb://127.0.0.1:27017/reactjs")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');  
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });


app.post("/ji", (req, res) => {
  console.log(req.body.password);
  value.create({
    userid: req.body.userid,
    username: req.body.username,
    password: req.body.password,
    type: req.body.type,
  }).then(() => {
    console.log(req.body);
    console.log("added");
    res.json({ message: "User added successfully" });
  }).catch((error) => {
    console.log("Error:", error);
    res.status(500).json({ message: "Error adding user" });
  });
});
app.post("/read", (req, res) => {
  console.log(req.body.productId);
  Product.create({
    productId: req.body.productId,
    productName: req.body.productName,
    productPrice: req.body.productPrice,
    pname: req.body.pname,

  }).then(() => {
    console.log(req.body);
    console.log("added");
    res.json({ message: "User added successfully" });
  }).catch((error) => {
    console.log("Error:", error);
    res.status(500).json({ message: "Error adding user" });
  });
});





app.post("/read", (req, res) => {
  console.log(req.body.productId);
  Product.create({
    productId: req.body.productId,
    productName: req.body.productName,
    productPrice: req.body.productPrice,
    pname: req.body.pname,

  }).then(() => {
    console.log(req.body);
    console.log("added");
    res.json({ message: "User added successfully" });
  }).catch((error) => {
    console.log("Error:", error);
    res.status(500).json({ message: "Error adding user" });
  });
});



app.post("/login", (req, res) => {
  value.findOne({ username: req.body.username })
    .then(user => {
      if (user && user.password === req.body.password) {
        if (user.type === "provider") {
          console.log("provider");
          res.json({ message: "provider", user });
        } else if (user.type === "customer") {
          console.log("customer");
          res.json({ message: "customer", user });
        }else if (user.type === "admin") {
          console.log("admin");
          res.json({ message: "admin", user });
        }
      } else {
        res.json({ message: "Incorrect password or username" });
      }
    })
    .catch((err) => {
      console.log("Error:", err);
      res.status(500).json({ message: "Error during login" });
    });
});


app.post('/product', upload.single('productImage'), async (req, res) => {
  const { productId, productName, productPrice, pname } = req.body;
  const productImage = req.file ? `/uploads/${req.file.filename}` : null;

 
  const existingProduct = await Product.findOne({ productId });
  if (existingProduct) {
    return res.status(400).json({ message: "Product with this ID already exists" });
  }

  try {
    const newProduct = await Product.create({
      productId,
      productName,
      productPrice,
      productImage,
      pname,
    });
    res.json({ message: 'Product added successfully' });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: 'Failed to add product' });
  }
});


app.get("/read", (req, res) => {
  Product.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log("Error:", err);
      res.status(500).json({ message: "Error fetching products" });
    });
 
});
app.get("/users", (req,res)=>{
  value.find()
  .then((data)=>{
    res.json(data);
  })
  .catch((err)=>{
    console.log("error",err);
  })
});

app.delete('/delete', (req, res) => {
  const { productId } = req.body;
  Product.deleteOne({ productId })
    .then(() => {
      res.json({ message: 'Product deleted successfully' });
    })
    .catch((err) => {
      console.error("Error deleting product:", err);
      res.status(500).json({ message: 'Error deleting product', error: err.message });
    });
});


app.post('/del', (req, res) => {
  const userId = req.body.userid;
  console.log(userId);
  value.deleteOne({userid: userId})
    .then(() => {
      console.log("deleted")
      res.json({ message: 'User deleted successfully' });
    })
    .catch((err) => {
      console.error("Error deleting User:", err);
      res.status(500).json({ message: 'Error deleting User', error: err.message });
    });
});


app.post("/update", (req, res) => {
  const { productId, productName, productPrice } = req.body;

  Product.updateOne({ productId }, {
    $set: { productName, productPrice }
  })
    .then(() => {
      res.json({ message: 'Product updated successfully' });
    })
    .catch((err) => {
      console.error("Error updating product:", err);
      res.status(500).json({ message: 'Error updating product', error: err.message });
    });
});
 app.post("/like", (req, res) => {
  console.log(req.body.productId);
  Like.create({
    productId: req.body.productId,
    cname: req.body.cname,
    productImage: req.body.productImage,
    productPrice : req.body.productPrice,
    pname: req.body.pname,
  })
  console.log(req.body);
  res.json({ message: 'Product liked successfully' });
});

app.get("/liked", (req, res) => {
  Like.find()
    .then((data) => {
      res.json(data);
      console.log(data)
    })
    .catch((err) => {
      console.log("Error:", err);
      res.status(500).json({ message: "Error fetching products" });
    });
});
app.listen(8000, () => {
  console.log("Server is running at port 8000");
});



