const getCart = () => {
  let cart;
  const getCart = localStorage.getItem("cart");
  if (getCart) {
    cart = JSON.parse(getCart);
  } else {
    cart = {};
  }
  return cart;
};

const setCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const addToCart = (id) => {
  let cart = getCart();
  if (cart[id]) {
    cart[id] += 1;
  } else {
    cart[id] = 1;
  }
  setCart(cart);
};
const removeFromCart = (id) => {
  let cart = getCart();
  if (cart[id] && cart[id] > 0) {
    cart[id] -= 1;
  }
  setCart(cart);
};
export { addToCart, removeFromCart };
