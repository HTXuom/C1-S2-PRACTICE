const PRODUCTS = [
  { id: 1, name: "Apple", price: 2.5 },
  { id: 2, name: "Banana", price: 1.5 },
  { id: 3, name: "Orange", price: 3 },
  { id: 4, name: "Rice", price: 1.5 },
  { id: 5, name: "Chocolate", price: 3 },
];

let SHOPPING_CART = [
  { id: 1, quantity: 2 },
  { id: 3, quantity: 1 },
];

function removeProductFromCart(productId) {
  const existingItemIndex = SHOPPING_CART.findIndex(
    (item) => item.id === productId
  );

  if (existingItemIndex !== -1) {
    const existingItem = SHOPPING_CART[existingItemIndex];
    if (existingItem.quantity >= 2) {
      existingItem.quantity--;
    } else {
      SHOPPING_CART.splice(existingItemIndex, 1);
    }
  }
}

console.log(SHOPPING_CART); 
removeProductFromCart(1);
console.log(SHOPPING_CART); 
removeProductFromCart(1);
console.log(SHOPPING_CART); 
removeProductFromCart(3);
console.log(SHOPPING_CART); 