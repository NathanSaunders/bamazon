var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "",

  database: "bamazon"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
  }
  loadProducts();
});

// Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
function loadProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.table(res);
    promptCustomerForID(res);
  });
}

// The app should then prompt users with two messages.

//    * The first should ask them the ID of the product they would like to buy.
function promptCustomerForID(inventory) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "choice",
        message:
          "What is the product ID of the item you would you like to purchase? [Quit with Q]",
        validate: function(val) {
          return !isNaN(val) || val.toLowerCase() === "q";
        }
      }
    ])
    .then(function(val) {
      checkIfShouldExit(val.choice);
      var choiceId = parseInt(val.choice);
      var product = checkInventory(choiceId, inventory);

      // * The second message should ask how many units of the product they would like to buy.
      if (product) {
        promptCustomerForQuantity(product);
      } else {
        // * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.
        console.log("\nSorry, we are currently out of stock!");
        loadProducts();
      }
    });
}

// Prompt the customer for a product quantity
function promptCustomerForQuantity(product) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "quantity",
        message: "How many would you like? [Quit with Q]",
        validate: function(val) {
          return val > 0 || val.toLowerCase() === "q";
        }
      }
    ])
    .then(function(val) {
      // Check if the user wants to quit the program
      checkIfShouldExit(val.quantity);
      var quantity = parseInt(val.quantity);

      // If there isn't enough of the chosen product and quantity, let the user know and re-run loadProducts
      if (quantity > product.stock_quantity) {
        console.log("\nSorry, nuthin doin!");
        loadProducts();
      } else {
        purchaseItems(product, quantity);
      }
    });
}

// Purchase the desired quantity of the desired item
function purchaseItems(product, quantity) {
  connection.query(
    "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
    [quantity, product.item_id],
    function(err, res) {
      console.log(
        "\nSuccessfully purchased " +
          quantity +
          " " +
          product.product_name +
          "'s!"
      );
      loadProducts();
    }
  );
}

// Check to see if there is enough product to fullfill the user's request
function checkInventory(choiceId, inventory) {
  for (var i = 0; i < inventory.length; i++) {
    if (inventory[i].item_id === choiceId) {
      return inventory[i];
    }
  }
  return null;
}

// Check to see if the user wants to quit the program
function checkIfShouldExit(choice) {
  if (choice.toLowerCase() === "q") {
    console.log("Shop Smart! Shop S Mart!");
    process.exit(0);
  }
}
