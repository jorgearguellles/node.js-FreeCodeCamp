// Pizzas example

const statusDelivery = () => {
  const status = Math.random() < 0.5;
  console.log(status);
  return status;
};

const myPizzaDelivery = new Promise((resolve, reject) => {
  if (statusDelivery) {
    resolve("Su pedido ha sido exitoso, ya se esta preparando la pizza!");
  } else {
    reject("Ha ocurrido un error, por favor vuelva a intentar.");
  }
});

myPizzaDelivery
  .then((confirmationMessage) => {
    console.log(confirmationMessage);
  })
  .then(null, (errorMessage) => {
    console.log(errorMessage);
  });
