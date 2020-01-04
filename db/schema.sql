-- Create the database seinfeld and specified it for use.
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table actors.
CREATE TABLE burgers (
  id int AUTO_INCREMENT,
  burger_name varchar(30) NOT NULL,
  devoured BOOLEAN NOT NULL,
  PRIMARY KEY(id)
);

-- Insert a set of records.
INSERT INTO burgers (burger_name, devoured) VALUES ("Double Cheese Burger", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("Bacon Burger", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("Chicken Burger", false);

