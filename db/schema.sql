DROP DATABASE IF EXISTS project2;

CREATE DATABASE project2;

CREATE TABLE PR_Request (
    PR_Number integer AUTO_INCREMENT not null,
    Item varchar(400) not null,
    Quantity integer not null,
    Unit_of_Measure varchar(100) not null,
    Est_Amount integer not null,
    Total_Amount integer not null,
    Tax_Rate integer not null,
    Estimated_Shipping integer not null,
    Date_Needed date not null,
    Justification varchar(500) not null,
    Comments varchar(600),
    Create_Date date not null,
    Vendor varchar(100) not null,
    Status varchar(50) not null,
    Complete_Date date,
    Created_By varchar(100) not null
);

INSERT INTO PR_Request (
	PR_Number, 
	Item, 
	Quantity, 
	Unit_of_Measure, 
	Item_Price,
	Item_Total, 
	Tax_Rate, 
	Estimated_Shipping,
	Sub_Total,
	Grand_Total,
	Date_Needed, 
	Justification, 
	Comments, 
	Vendor, 
	Status, 
	Complete_Date, 
	Created_By
	)
VALUES (
	1, 
	'Description goes here', 
	1, 
	'bot', 
	150.90,
	150.90, 
	8.25, 
	30.00,
	163.35,
	163.35,
	20180203, 
	'Justification of item', 
	'Comments about item',  
	'Apple', 
	'approved', 
	20170815, 
	'Sade Browne'
	);

CREATE TABLE User_DB (
    Last_Name varchar(100) not null,
    First_Name varchar(100) not null,
    Staff_ID integer not null,
    Security Role varchar(100) not null,
    AD_Login varchar(100) not null,
    Location_Code integer not null,
    Email varchar(200) not null
);

INSERT INTO PR_Request (
	Last_Name, 
	First_Name, 
	Staff_ID, 
	Security_Role, 
	AD_Login, 
	Location_Code, 
	Email
	);
VALUES (
	'Browne', 
	'Sade', 
	12345,
	'initiator',
	'BrowneS',
	10,
	'sbribrowne@gmail.com'
	);