// index.js

function hello() {
    console.log("Hello from my custom npm package!");
  }
  

  // index.js

module.exports = {
    hello: () => console.log("Hello!"),
    goodbye: () => console.log("Goodbye!")
  };
  