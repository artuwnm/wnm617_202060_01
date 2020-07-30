CREATE TABLE IF NOT EXISTS `track_users` (
`id` INT NULL,
`name` VARCHAR(MAX) NULL,
`username` VARCHAR(MAX) NULL,
`email` VARCHAR(MAX) NULL,
`password` VARCHAR(MAX) NULL,
`date_create` VARCHAR(MAX) NULL,
`img` VARCHAR(MAX) NULL
);

INSERT INTO track_users VALUES
(1,'Bass Jensen','user1','user1@gmail.com',md5('pass'),'2020-06-29 10:29:23','https://via.placeholder.com.400/962/fff/?text=user1'),
(2,'Marta Chang','user2','user2@gmail.com',md5('pass'),'2020-03-05 08:32:14','https://via.placeholder.com.400/970/fff/?text=user2'),
(3,'Randolph Roberson','user3','user3@gmail.com',md5('pass'),'2020-06-13 03:29:10','https://via.placeholder.com.400/891/fff/?text=user3'),
(4,'Mckee Avery','user4','user4@gmail.com',md5('pass'),'2020-05-13 09:49:05','https://via.placeholder.com.400/957/fff/?text=user4'),
(5,'Angelina Hughes','user5','user5@gmail.com',md5('pass'),'2020-07-14 11:19:25','https://via.placeholder.com.400/852/fff/?text=user5'),
(6,'Traci Campbell','user6','user6@gmail.com',md5('pass'),'2020-05-09 01:21:18','https://via.placeholder.com.400/833/fff/?text=user6'),
(7,'Rodriquez Casey','user7','user7@gmail.com',md5('pass'),'2020-06-22 02:22:07','https://via.placeholder.com.400/954/fff/?text=user7'),
(8,'Merle Byers','user8','user8@gmail.com',md5('pass'),'2020-04-28 09:44:56','https://via.placeholder.com.400/967/fff/?text=user8'),
(9,'Talley Maldonado','user9','user9@gmail.com',md5('pass'),'2020-01-31 12:16:00','https://via.placeholder.com.400/821/fff/?text=user9'),
(10,'Lessie Swanson','user10','user10@gmail.com',md5('pass'),'2020-01-11 07:32:55','https://via.placeholder.com.400/879/fff/?text=user10');