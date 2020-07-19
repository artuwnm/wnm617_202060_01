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
(1,'Hendrix Munoz','user1','user1@gmail.com',md5('pass'),'2020-04-25 01:34:40','https://via.placeholder.com/400/712/fff/?text=user1'),
(2,'Walls Martin','user2','user2@gmail.com',md5('pass'),'2020-04-15 05:07:06','https://via.placeholder.com/400/726/fff/?text=user2'),
(3,'Dillard Quinn','user3','user3@gmail.com',md5('pass'),'2020-06-11 11:06:51','https://via.placeholder.com/400/837/fff/?text=user3'),
(4,'Wade Shelton','user4','user4@gmail.com',md5('pass'),'2020-05-31 03:26:43','https://via.placeholder.com/400/783/fff/?text=user4'),
(5,'Vicky York','user5','user5@gmail.com',md5('pass'),'2020-06-19 01:45:56','https://via.placeholder.com/400/726/fff/?text=user5'),
(6,'Krista Hicks','user6','user6@gmail.com',md5('pass'),'2020-04-16 01:17:42','https://via.placeholder.com/400/993/fff/?text=user6'),
(7,'Ellen Higgins','user7','user7@gmail.com',md5('pass'),'2020-02-27 05:25:13','https://via.placeholder.com/400/837/fff/?text=user7'),
(8,'Sabrina Snyder','user8','user8@gmail.com',md5('pass'),'2020-02-09 08:25:20','https://via.placeholder.com/400/802/fff/?text=user8'),
(9,'Shannon Turner','user9','user9@gmail.com',md5('pass'),'2020-07-15 06:52:39','https://via.placeholder.com/400/929/fff/?text=user9'),
(10,'Charity Justice','user10','user10@gmail.com',md5('pass'),'2020-03-05 06:44:07','https://via.placeholder.com/400/801/fff/?text=user10');