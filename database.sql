-- Create a database named: hopechest
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
id SERIAL PRIMARY KEY,
first_name varchar NOT NULL,
last_name varchar NOT NULL,
username varchar NOT NULL,
password varchar NOT NULL,
admin boolean default false
);

CREATE TABLE "events" (
"id" SERIAL PRIMARY KEY,
contact_first_name varchar NOT NULL,
contact_last_name varchar NOT NULL,
contact_phone varchar NOT NULL,
contact_email varchar NOT NULL,
company_name varchar NOT NULL,
company_website VARCHAR NOT NULL,
company_street VARCHAR,
company_city VARCHAR,
company_state VARCHAR,
company_zip VARCHAR,
event_name varchar,
event_website varchar, 
event_date date,   
event_time VARCHAR, 
event_location_name varchar,
event_location_street VARCHAR,
event_location_city VARCHAR,
event_location_state VARCHAR,
event_location_zip VARCHAR,
event_type VARCHAR,
event_description varchar(300) NOT NULL,
event_first_time boolean default false, 
funds varchar,
contribution_amount MONEY, 
contribution_submission varchar,
promotion varchar,
comments varchar,
image bytea, 
user_id INT REFERENCES "user"
);