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
(1,'Meyer Cohen','user1','user1@gmail.com',md5('pass'),'2020-05-11 10:34:48','https://via.placeholder.com/400/889/fff/?text=user1'),
(2,'Dianna Phelps','user2','user2@gmail.com',md5('pass'),'2020-07-04 04:12:10','https://via.placeholder.com/400/736/fff/?text=user2'),
(3,'Alisa Mcgee','user3','user3@gmail.com',md5('pass'),'2020-05-12 04:32:46','https://via.placeholder.com/400/986/fff/?text=user3'),
(4,'Rachel Roman','user4','user4@gmail.com',md5('pass'),'2020-07-15 08:16:05','https://via.placeholder.com/400/829/fff/?text=user4'),
(5,'Marylou Avery','user5','user5@gmail.com',md5('pass'),'2020-07-12 02:17:13','https://via.placeholder.com/400/932/fff/?text=user5'),
(6,'Monica Saunders','user6','user6@gmail.com',md5('pass'),'2020-04-08 01:04:04','https://via.placeholder.com/400/700/fff/?text=user6'),
(7,'Witt Mills','user7','user7@gmail.com',md5('pass'),'2020-01-24 07:11:28','https://via.placeholder.com/400/894/fff/?text=user7'),
(8,'Christina Wilson','user8','user8@gmail.com',md5('pass'),'2020-02-18 05:20:35','https://via.placeholder.com/400/726/fff/?text=user8'),
(9,'Wiggins Lane','user9','user9@gmail.com',md5('pass'),'2020-02-18 03:01:46','https://via.placeholder.com/400/738/fff/?text=user9'),
(10,'Rojas Mccarthy','user10','user10@gmail.com',md5('pass'),'2020-04-28 09:22:09','https://via.placeholder.com/400/896/fff/?text=user10');