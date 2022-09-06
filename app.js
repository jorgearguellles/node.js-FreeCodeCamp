function showTheme(theme) {
  console.log(`I'm learning ${theme}`);
}

console.log("Before setImmediate");
setImmediate(showTheme, "Node.js");
setTimeout(showTheme, 3000, "Express.js");
setInterval(showTheme, 5000, "GO");
console.log("After setImmediate");
