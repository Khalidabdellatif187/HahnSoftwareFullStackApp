create database Employee_Management;
USE Employee_Management;
CREATE TABLE employee (
       id bigint primary KEY auto_increment,
       first_name varchar(225),
       second_name varchar(225),
       email varchar(225),
       role varchar(225),
       CONSTRAINT unique_name UNIQUE (first_name, second_name),
       CONSTRAINT unique_email UNIQUE (email)
	  );

Select * from employee;










