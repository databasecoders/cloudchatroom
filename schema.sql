drop database if exists chatroom_db;
create database chatroom_db;
use chatroom_db;

create table users
(
  user_id int
  auto_increment,
user_name varchar
  (30),
  session int,
user_email varchar
  (30),
user_password varchar
  (30),
user_image longblob,
friends_id int,
PRIMARY KEY
  (user_id)
)

  insert into users
    (user_name, user_password, user_email, user_image, friends_id)
  values
    ("billybob", "piggy1234", "bil@gmail.com" , "https://www.google.com/search?q=pig+images&tbm=isch&source=iu&ictx=1&fir=KMo9Jgo6GeoHPM%253A%252CUjUhrOD9TLXe0M%252C_&vet=1&usg=AI4_-kTuxfFbXVhAvmQEvVszrgBoPjC63w&sa=X&ved=2ahUKEwi1rOe3yv3iAhUXWs0KHVeQB5MQ9QEwAHoECAcQBA#imgrc=KMo9Jgo6GeoHPM:", 2),
    ("spongebob", "sponge3232", "sponge@gmail.com", "https://www.google.com/search?q=spongebob&source=lnms&tbm=isch&sa=X&ved=0ahUKEwidho_3yv3iAhWQbs0KHW3tD68Q_AUIECgB&biw=1280&bih=578#imgrc=78xgJTSnSYbzyM:", 1),
    ("joedirt", "dirtyjoe", "joe@gmail.com", "https://www.google.com/search?q=joe+dirt&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjkq66Jy_3iAhVXHM0KHZa6CakQ_AUIECgB&biw=1280&bih=578#imgrc=74iSJMQM8WFJwM:", 4),
    ("schmiegel", "ring420", "ring@gmail.com", "https://www.google.com/search?q=schmiegel&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjuwMuay_3iAhVbGs0KHXzqCJ8Q_AUIECgB&biw=1280&bih=578&dpr=1.5#imgrc=UWWG89AyIDYmkM:", 3)