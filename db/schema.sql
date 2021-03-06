DROP DATABASE if exists project2_db;

CREATE DATABASE project2_db;
USE project2_db;

CREATE TABLE Purchase_Request
(
    PR_Number int AUTO_INCREMENT NOT NULL,
    Date_Created TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    Item_Description varchar(400) NOT NULL,
    Date_Needed date NOT NULL,
    Qty int NOT NULL,
    Unit varchar(50) NOT NULL,
    Vendor varchar(100) NOT NULL,
    Est_Price DECIMAL(10,2) NOT NULL,
    Tax_Rate DECIMAL(5,3) NOT NULL,
    Est_Shipping DECIMAL (10,2) NOT NULL,
	  Total_Price DECIMAL (10, 2) NOT NULL,
    Justification varchar(500) NOT NULL,
    Comments varchar(500),
    PR_Status varchar(50),
    Date_Completed date,
    Created_By varchar(100),
    PRIMARY KEY (PR_Number)
);

CREATE TABLE Users
(
    ID int AUTO_INCREMENT NOT NULL,
    Last_Name VARCHAR(100) NOT NULL,
    First_Name VARCHAR(100) NOT NULL,
    Email VARCHAR(200) NOT NULL,
    Staff_ID INTEGER NOT NULL,
    Security_Role VARCHAR(100) NOT NULL,
    Login_Name VARCHAR(100) NOT NULL,
    PRIMARY KEY (ID)
);

CREATE TABLE Items
(
    Qty INTEGER(100) NOT NULL,
    Unit VARCHAR(100) NOT NULL,
    Vendor VARCHAR(100) NOT NULL,
    Est_Price DECIMAL(10,2) NOT NULL,
    PR_Number INTEGER NOT NULL,
    Item_Description VARCHAR(100) NOT NULL
);