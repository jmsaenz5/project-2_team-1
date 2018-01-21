DROP DATABASE IF EXISTS project2;

CREATE DATABASE project2;

CREATE TABLE PR_Request (
    PR_Number integer AUTO_INCREMENT not null,
    Item varchar(400) not null,
    Quantity integer not null,
    Unit_of_Measure varchar(100) not null,
    Est_Amount integer not null,
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
