// inisialisasi imagekit ke project kita
const ImageKit = require("imagekit");
console.log(process)
const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL,
});

module.exports = imagekit;
