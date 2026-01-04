document.addEventListener("DOMContentLoaded", renderCart);

function renderCart() {
  const cartContainer = document.getElementById("cart_items");
  const emptyCart = document.getElementById("empty_cart");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    emptyCart.style.display = "block";
    return;
  }

  emptyCart.style.display = "none";

  let total = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    cartContainer.innerHTML += `
      <div class="row align-items-center border-bottom py-4">
        <div class="col-md-2">
          <img src="${item.image}" class="img-fluid">
        </div>

        <div class="col-md-3">
          <h5>${item.name}</h5>
        </div>

        <div class="col-md-2">
          $${item.price}
        </div>

        <div class="col-md-3 d-flex align-items-center gap-2">
          <button class="btn btn-sm btn-outline-secondary" onclick="changeQty(${index}, -1)">−</button>
          <span>${item.quantity}</span>
          <button class="btn btn-sm btn-outline-secondary" onclick="changeQty(${index}, 1)">+</button>
        </div>

        <div class="col-md-1 fw-bold">
          $${itemTotal.toFixed(2)}
        </div>

        <div class="col-md-1">
          <button class="btn btn-sm btn-danger" onclick="removeItem(${index})">✕</button>
        </div>
      </div>
    `;
  });

  cartContainer.innerHTML += `
    <div class="text-end mt-4">
      <h4>Total: $${total.toFixed(2)}</h4>
    </div>
  `;
}

/* ➕➖ Quantity */
function changeQty(index, change) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart[index].quantity += change;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  updateCartCount();
}

/* ❌ Remove */
function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  updateCartCount();
}


function updateCartCount() {
  const countEl = document.querySelector(".cart_item_count");
  if (!countEl) return;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);

  countEl.innerText = totalQty;
  countEl.style.visibility = totalQty > 0 ? "visible" : "hidden";
}
 updateCartCount(); 