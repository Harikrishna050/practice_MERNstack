const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const connectDB=require('./config/db');
const app = express()
app.use(cors())
app.use(express.json())


const PORT = process.env.PORT || 8080

const cartItemSchema = mongoose.Schema({
    itemName: String,
    img:String,
    price: Number,
  }, {
    timestamps: true
  });
const userModel1 = mongoose.model("cart-items", cartItemSchema)

//cart crud-operations

app.get("/cart", async (req, res) => {
    try {
      const cartItems = await userModel1.find({});
      res.json({ success: true, message: "Cart items retrieved successfully", data: cartItems });
    } catch (error) {
      res.status(500).json({ success: false, message: "Error retrieving cart items", error: error.message });
    }
  });

  app.post("/cart/add", async (req, res) => {
    try {
      const { itemName, price,img } = req.body;
      const cartItem = new userModel1({ itemName, price, img});
      await cartItem.save();
      res.json({ success: true, message: "Item added to cart successfully", data: cartItem });
    } catch (error) {
      res.status(500).json({ success: false, message: "Error adding item to cart", error: error.message });
    }
  });

  app.put("/cart/update/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { itemName, price,img  } = req.body;
      const updatedCartItem = await userModel1.findByIdAndUpdate(id, { itemName, price, img }, { new: true });
      res.json({ success: true, message: "Cart item updated successfully", data: updatedCartItem });
    } catch (error) {
      res.status(500).json({ success: false, message: "Error updating cart item", error: error.message });
    }
  });
  

  app.delete("/cart/delete/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deletedCartItem = await userModel1.findByIdAndDelete(id);
      res.json({ success: true, message: "Cart item deleted successfully", data: deletedCartItem });
    } catch (error) {
      res.status(500).json({ success: false, message: "Error deleting cart item", error: error.message });
    }
  });





//form-CRUD Operations
const formData = mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String
}, {
    timestamps: true
})

const userModel2 = mongoose.model("user", formData)
app.get("/", async (req, res) => {
    const data = await userModel2.find({})
    res.json({ success: true, message: "You have Successfully get in", data: data })
})

app.post("/submit", async (req, res) => {
    console.log(req.body)
    const data = new userModel2(req.body)
    await data.save()
    res.send({ success: true, message: "Data saved successfully", data: data })
})

app.put("/update", async (req, res) => {
    // console.log(req.body)
    const { id, ...rest } = req.body
    const data = await userModel2.updateOne({ _id: id }, rest)
    console.log(data);
    res.send({ success: true, message: "Data updated succesfully", data: data })
})

app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id
    console.log(id)
    const data = await userModel2.deleteOne({ _id: id })
    console.log(data);
    res.send({ success: true, message: "Data deleted succesfully", data: data })
})


//locally connecting mongo, can connect atlas if we want to use cloud
mongoose.connect("mongodb://127.0.0.1:27017/crud_op")
    .then(() => {
        console.log("connect DB")
        app.listen(PORT, () => console.log("Server is running"))
    })
    .catch((err) => console.log(err))