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
(1,'Marquez Kirkland','user1','user1@gmail.com','md5(''pass'')','2015-11-03 09:34:23','https://via.placeholder.com/400/900/fff/?text=user1'),
(2,'Cox Monroe','user2','user2@gmail.com','md5(''pass'')','2016-11-14 07:44:24','https://via.placeholder.com/400/945/fff/?text=user2'),
(3,'Ferrell Mullen','user3','user3@gmail.com','md5(''pass'')','2018-11-28 02:31:44','https://via.placeholder.com/400/825/fff/?text=user3'),
(4,'Annmarie Hooper','user4','user4@gmail.com','md5(''pass'')','2017-06-14 03:08:53','https://via.placeholder.com/400/983/fff/?text=user4'),
(5,'Edwina Wallace','user5','user5@gmail.com','md5(''pass'')','2020-01-28 09:19:16','https://via.placeholder.com/400/940/fff/?text=user5'),
(6,'Angel Chang','user6','user6@gmail.com','md5(''pass'')','2019-06-11 05:16:42','https://via.placeholder.com/400/763/fff/?text=user6'),
(7,'Susan Moreno','user7','user7@gmail.com','md5(''pass'')','2018-10-27 07:30:44','https://via.placeholder.com/400/931/fff/?text=user7'),
(8,'Kramer Willis','user8','user8@gmail.com','md5(''pass'')','2014-03-23 11:31:45','https://via.placeholder.com/400/972/fff/?text=user8'),
(9,'Hester Webster','user9','user9@gmail.com','md5(''pass'')','2015-06-16 05:02:20','https://via.placeholder.com/400/874/fff/?text=user9'),
(10,'Janelle Mccray','user10','user10@gmail.com','md5(''pass'')','2017-01-31 08:40:39','https://via.placeholder.com/400/780/fff/?text=user10');