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
    min: [0, "Nilai tidak boleh minus."], // untuk mengubah pesan error validasi dari suatu properti, indeks ke 1 adalah string dari message yg ingin ditampilkan
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

productSchema.methods.outStock = function () {
  // this di sini mengacu ke objeck schema nya
  this.stock = 0;
  this.availability.online = false;
  this.availability.offline = false;
  return this.save();
};

const Product = mongoose.model("Product", productSchema);

// membuat method contohnya outStock, itu agar logic yg panjang/kompleks bisa di pisah
// jadi memisahkan antara logic dengan proses eksekusi query nya saja.
const changeStock = async (id) => {
  // query
  const foundProduct = await Product.findById(id);
  // logic di ambil dari method outStock
  await foundProduct.outStock(); // memanggil method outStock dari model, berdasarkan data yg dicari dengan id misal
  console.log("Berhasil diubah");
};

changeStock("66c9b1f88500869fab50faff");

// intinya kita bisa membuat instance method dari schema nya, kemudian di pakai di dalam model nya
// jika model nya butuh perubahan data, jadi logic yg kompleks nya di instance method schema, dan query nya di modelnya
// dalam hal ini membuat function changeStock untuk model nya
// di dalam function changeStock itu ada query, yaitu mencari product berdasarkan id, lalu memanggil method outStock

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

// Product.findOneAndUpdate(
//   { name: "Kemeja Flanel" },
//   {
//     name: "Kemeja Flanel",
//     brand: "Hollister",
//     price: -150000,
//     color: "biru muda",
//     size: ["S", "M", "L"],
//     description:
//       "Kemeja flanel dengan warna yang cerah, terbuat dari bahan flanel yang nyaman dan berkualitas tinggi.",
//     condition: "baru",
//     stock: -10,
//     availability: {
//       online: true,
//       offline: true,
//     },
//   },
//   { new: true, runValidators: true }
// )
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.error(err.errors.stock.properties.message);
//   });
