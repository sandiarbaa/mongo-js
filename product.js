const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/ShopApp")
  .then((result) => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

// Schema untuk model Product
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  color: {
    type: String,
    required: true,
  },
  size: [
    {
      type: String,
      required: true,
    },
  ],
  description: {
    type: String,
    required: true,
    maxLength: 150,
  },
  condition: {
    type: String,
    enum: ["baru", "bekas"],
    default: "baru",
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  availability: {
    online: {
      type: Boolean,
      required: true,
    },
    offline: {
      type: Boolean,
      required: true,
    },
  },
});

const Product = mongoose.model("Product", productSchema);

// const product = new Product({
//   name: "Kemeja Flanel",
//   brand: "Hollister",
//   price: 750000,
//   color: "biru muda",
//   size: ["S", "M", "L"],
//   description:
//     "Kemeja flanel dengan warna yang cerah, terbuat dari bahan flanel yang nyaman dan berkualitas tinggi.",
//   condition: "baru",
//   stock: 25,
//   availability: {
//     online: true,
//     offline: true,
//   },
// });

// product
//   .save()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// harus di tambahkan dulu options runValidators, supaya validasi yg di schema dijalankan
// findOneAndUpdate | findByIdAndUpdate
Product.findOneAndUpdate(
  { name: "Kemeja Flanel" },
  {
    name: "Kemeja Flanel",
    brand: "Hollister",
    price: -150000,
    color: "biru muda",
    size: ["S", "M", "L"],
    description:
      "Kemeja flanel dengan warna yang cerah, terbuat dari bahan flanel yang nyaman dan berkualitas tinggi.",
    condition: "baru",
    stock: 10,
    availability: {
      online: true,
      offline: true,
    },
  },
  { new: true, runValidators: true }
)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
