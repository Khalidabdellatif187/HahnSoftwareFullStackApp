create database Employee_Management;
USE Employee_Management;
CREATE table employee (
id bigint primary KEY auto_increment , 
first_name varchar(225) , 
second_name varchar(225),
email varchar (225),
role varchar (225)
);
Select * from employee;
Alter table employee add constraint unique_name Unique (first_name , second_name);
Alter table employee add constraint unique_email Unique (email);
select Max(employee.id) from employee;
ALTER TABLE employee MODIFY id bigint NOT NULL;
ALTER TABLE employee MODIFY id INT AUTO_INCREMENT NOT NULL;









