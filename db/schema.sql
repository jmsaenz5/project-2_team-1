DROP DATABASE if exists project2_db;

CREATE DATABASE project2_db;
USE project2_db;

CREATE TABLE Purchase_Request
(
    PR_Number int AUTO_INCREMENT NOT NULL,
    Date_Created date NOT NULL,
    Item_Description varchar(400) NOT NULL,
    Date_Needed date NOT NULL,
    Qty int NOT NULL,
    Unit varchar(50) NOT NULL,
    Vendor varchar(100) NOT NULL,
    Est_Price DECIMAL(10,2) int NOT NULL,
    Tax_Rate DECIMAL(5,2) int NOT NULL,
    Est_Shipping DECIMAL (10,2) NOT NULL,
    Est_TotalPrice DECIMAL (10,2) NOT NULL,
    Justification varchar(500) NOT NULL,
    Comments varchar(500),
    PR_Status varchar(50) NOT NULL,
    Date_Completed date,
    Created_By varchar(100) NOT NULL,
    PRIMARY KEY (PR_Number)
);

