const fs = require("fs");

// fs.readFile("index.html", "utf-8", (error, content) => {
//   if (error) {
//     throw error;
//   }
//   console.log(content);
// });

// fs.rename("index.html", "main.html", (error) => {
//   if (error) {
//     throw error;
//   }
//   console.log("Rename file successful");
// });

// Añadir contendio al final
// fs.appendFile("index.html", "<p>Hello by Append</p>", (err, content) => {
//   if (err) {
//     throw err;
//   }
//   console.log("File updated successful");
// });

// Remplazar todo el contendio por nuevo
// fs.writeFile("index.html", "<p>Hello by Append</p>", (err, content) => {
//   if (err) {
//     throw err;
//   }
//   console.log("File updated successful");
// });

fs.unlink("main.html", (err) => {
  if (err) {
    throw err;
  }
  console.log("File deleted successful");
});
