// cart.js

function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
  }
  
  function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  function removeItem(index) {
    const cart = getCart();
    cart.splice(index, 1); // Remove 1 item at index
    saveCart(cart);
    renderCart(); // Re-render after removing
  }
  
  function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cart = getCart();
  
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `<p>Your cart is empty 🛒</p>`;
      return;
    }
  
    cartItemsContainer.innerHTML = '';
    cart.forEach((item, index) => {
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <p><strong>${item.name}</strong> - ₹${item.price}</p>
        <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
      `;
      cartItemsContainer.appendChild(div);
    });
  }
  
  renderCart();
  