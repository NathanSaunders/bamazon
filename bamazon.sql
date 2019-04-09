-- 1. Create a MySQL Database called `bamazon`.

DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

-- 2. Then create a Table inside of that database called `products`.
CREATE TABLE products
(
  --  * item_id (unique id for each product)
  item_id INT
  AUTO_INCREMENT NOT NULL,
    --  * product_name (Name of product)
  product_name VARCHAR
  (45) NOT NULL,
    --  * department_name
  department_name VARCHAR
  (45) NOT NULL,
  --  * price (cost to customer)
  price DECIMAL
  (10,2) NOT NULL,
    --  * stock_quantity (how much of the product is available in stores)
  stock_quantity INT
  (10) NOT NULL,
  primary key
  (item_id)
);

  SELECT *
  FROM products;

  -- 4. Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).

  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("Super Mario Bros. 3", "Video Games", 29.99, 3),
    ("Halo 3", "Video Games", 59.99, 140),
    ("Scrapple", "Food and Drink", 14.50, 650),
    ("Rainbow Suspenders", "Apparel", 23.00, 75),
    ("Parachute Pants", "Apparel", 54.25, 7),
    ("Breakfast of Champions", "Books", 19.99, 42),
    ("Catch 22", "Books", 16.99, 25),
    ("Dead Alive", "Films", 29.99, 4),
    ("Catch 22", "Films", 30.50, 14),
    ("One Flew Over The Cuckoos Nest", "Books", 19.95, 23);
