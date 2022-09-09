function ordenarPedido(producto) {
  return new Promise((resolve, reject) => {
    console.log(`Ordenando: ${producto} de FreeCodeCamp`);
    setTimeout(() => {
      if (producto === "taza") {
        resolve("Ordenando una taza de FreeCodeCamp");
      } else {
        reject(`${producto} de FreeCodeCamp no disponible`);
      }
    }, 2000);
  });
}

function procesarPedido(respuesta) {
  return new Promise((resolve, reject) => {
    console.log("Procesando respuesta...");
    console.log(`La respuesta fue: "${respuesta}"`);
    setTimeout(() => {
      resolve("Gracias por tu compra. Disfruta tu producto de FreeCodeCamp");
    }, 4000);
  });
}

// ordenarPedido("taza")
//   .then((respuesta) => {
//     console.log("Respuesta recibida");
//     return procesarPedido(respuesta);
//   })
//   .then((respuestaProcesada) => {
//     console.log(respuestaProcesada);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Async Await

async function realizarPedido(producto) {
  try {
    const respuesta = await ordenarPedido(producto);
    console.log("Respuesta recivida");
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
  } catch (error) {
    console.log(error);
  }
}

realizarPedido("taza");
