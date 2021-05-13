-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data
CREATE TABLE list (
"id" SERIAL PRIMARY KEY,
"name" varchar(80) NOT NULL,
"quantity" decimal (8,2) NOT NULL,
"unit" varchar(20) DEFAULT '',
"purchase_status" BOOLEAN DEFAULT FALSE
);

INSERT INTO list ("name", "quantity", "unit", "purchase_status")
VALUES ('bread', '1', 'loaf', false);

SELECT * FROM list;