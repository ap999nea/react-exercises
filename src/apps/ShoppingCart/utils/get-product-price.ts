export const getProductPrice = (price: number, quantity: number = 1) => {
  return (price * quantity).toLocaleString("it-IT", {
    style: "currency",
    currency: "EUR",
  });
};
