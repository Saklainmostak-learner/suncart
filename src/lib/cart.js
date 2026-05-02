export const getCart = () => {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("cart")) || [];
};

export const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
  window.dispatchEvent(new Event("cartUpdated")); 
};

export const addToCart = (product) => {
  const cart = getCart();
  const exists = cart.find((p) => p.id === product.id);

  if (exists) {
    exists.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  saveCart(cart);
};

export const removeFromCart = (id) => {
  const cart = getCart().filter((p) => p.id !== id);
  saveCart(cart);
};

export const clearCart = () => {
  saveCart([]);
};