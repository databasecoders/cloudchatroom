drop database if exists chatroom_db;
create database chatroom_db;
use chatroom_db;

create table users
(
  user_id int
  auto_increment,
  session varchar
  (200),
  name varchar
  (30),
user_email varchar
  (30),
user_password varchar
  (30),
  salt varchar
  (1000),
user_image varchar
  (1000),
  one_image varchar
  (1000),
  two_image varchar
  (1000),
  three_image varchar
  (1000),
user_bio varchar
  (1000),
PRIMARY KEY
  (user_id)
)