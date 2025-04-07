let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}

updateCartCount();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
      .then(reg => {
        console.log('Service Worker registered:', reg);
      })
      .catch(err => {
        console.error('Service Worker registration failed:', err);
      });
  }
  
