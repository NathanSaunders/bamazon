# Bamazon! ========= Node.js & MySQL

This application, for the University of Washington Coding Bootcamp, implements a command line based storefront using the npm [inquirer](https://www.npmjs.com/package/inquirer) package and the MySQL database backend together with the npm [mysql](https://www.npmjs.com/package/mysql) package.

### MySQL Database Setup

This application requires the MySQL database already set up on your computer. If you don't, visit the [MySQL installation page](https://dev.mysql.com/doc/refman/5.6/en/installing.html) to install the version you need for your operating system. Once you have MySQL isntalled, you will be able to create the *Bamazon* database and the *products* table with the SQL code found in [Bamazon.sql](Bamazon.sql). Run this code inside your MySQL client to populate the databaseto proceed.

### Customer Interface

To run the customer interface please follow the steps below:

	git clone https://github.com/NathanSaunders/bamazon.git
	cd bamazon
	npm install
	node bamazonCustomer.js
  
The customer interface allows the user to view the current inventory of store items: item IDs, descriptions, department in which the item is located and price. The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. 
<img width="960" alt="purchaseScreenshot" src="https://user-images.githubusercontent.com/43506553/55842337-e48e7f80-5ae7-11e9-8964-909376639936.png">

If the desired quantity is not available the user is prompted they are out of luck.
<img width="960" alt="outOfStockScreenshot" src="https://user-images.githubusercontent.com/43506553/55842354-f6702280-5ae7-11e9-995b-f7add172c1e1.png">
