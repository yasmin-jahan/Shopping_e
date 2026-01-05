const products = [
  {
    id: 1,
    name: "Red Printed T-Shirt",
    price: 42.99 ,
    off: "$50.00",
    images: [
      "img/gallery-1 (1).jpg",
      "img/gallery-2.jpg",
      "img/gallery-3.jpg",
      "img/gallery-4.jpg"
    ]
  },
  {
    id: 2,
    name: "Blue T-Shirt",
    price: 40.99,
    off: "$48.00",
    images: [
      "img/product2_blue_1.jpg",
      "img/product2_blue_2.jpg",
      "img/product2_blue_3.jpg",
      "img/product2_blue_4.jpg"
    ]
  },
  {
    id: 3,
    name: "Green T-Shirt",
    price: 42.99,
    off: "$56.00",
    images: [
      "img/product1_green_1.jpg",
      "img/product1_green_2.jpg",
      "img/product1_green_3.jpg",
      "img/product1_green_4.jpg"
    ]
  },
  {
    id: 4,
    name: "Brown T-Shirt",
    price: 30.69,
    off: "$38.69",
    images: [
      "img/product1_maroon_1.jpg",
      "img/product1_maroon_2.jpg",
      "img/product1_maroon_3.jpg",
      "img/product1_maroon_4.jpg"
    ]
  }
];


// // Run ONLY if the product details container exists
// const productContainer = document.querySelector(".product_details_content");
// if (productContainer) {
//   const params = new URLSearchParams(window.location.search);
//   const productId = Number(params.get("id"));

//   const product = products.find(item => item.id === productId);

//   if (!product) {
//     productContainer.innerHTML = "<h2 style='text-align:center'>Product not found</h2>";
//   } else {
//     productContainer.querySelector("h2").innerHTML = `${product.name} <span>By HRX</span>`;
//     productContainer.querySelector(".price span").innerText = `$${product.price}`;
//     productContainer.querySelector("p").innerText = product.desc;

//     document.querySelectorAll(".product_details_swiper_slide img").forEach(img => {
//       img.src = product.image;
//     });

//     window.currentProduct = product; // for Add to Cart
//   }
// }
