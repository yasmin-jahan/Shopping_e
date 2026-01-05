document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".product_details_content");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const productId = Number(params.get("id"));

  const product = products.find(p => p.id === productId);
  if (!product) {
    container.innerHTML = "<h2>Product not found</h2>";
    return;
  }

  // ===== TEXT =====
  container.querySelector("h2").innerHTML =
    `${product.name} <span>By HRX</span>`;

  container.querySelector(".price span").innerText =
    `$${product.price}`;

  container.querySelector(".price p").innerText =
    product.off;

  // description (last <p>)
  container.querySelectorAll("p")[1].innerText =
    "Give your summer wardrobe a style upgrade with this product.";

  // ===== BIG SLIDER =====
  const mainImgs = document.querySelectorAll(
    ".product_details_mySwiper2 .swiper-slide img"
  );

  mainImgs.forEach((img, i) => {
    img.src = product.images[i] || product.images[0];
  });

  // ===== THUMB SLIDER =====
  const thumbImgs = document.querySelectorAll(
    ".product_details_mySwiper .swiper-slide img"
  );

  thumbImgs.forEach((img, i) => {
    img.src = product.images[i] || product.images[0];
  });

  // For cart
  window.currentProduct = product;
});


//add to cart
function addToCart() {
  if (!window.currentProduct) return;

  const qtyInput = document.querySelector(".hero_btn input");
  const quantity = qtyInput ? Number(qtyInput.value) : 1;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find(item => item.id === window.currentProduct.id);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: window.currentProduct.id,
      name: window.currentProduct.name,
      price: window.currentProduct.price,
      quantity: quantity,

      //  THIS IS THE IMPORTANT LINE
      image: window.currentProduct.image || window.currentProduct.images?.[0]
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
updateCartCount();
  // go to cart page like real ecommerce
  window.location.href = "cart.html";
}
