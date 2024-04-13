const PRODUCTS = [
  { id: 1, name: "Apple", price: 2.5 },
  { id: 2, name: "Banana", price: 1.5 },
  { id: 3, name: "Orange", price: 3 },
  { id: 4, name: "Rice", price: 1.5 },
  { id: 5, name: "Chocolate", price: 3 },
];

const SHOPPING_CART = [
  { id: 1, quantity: 2 },
  { id: 3, quantity: 1 },
];

function getCartTotalAmount() {
  let totalAmount = 0;

  for (let item of SHOPPING_CART) {
    const product = PRODUCTS.find((p) => p.id === item.id);
    if (product) {
      totalAmount += product.price * item.quantity;
    }
  }

  return totalAmount;
}

console.log(getCartTotalAmount());