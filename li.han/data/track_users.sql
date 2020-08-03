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
(1,'Arlene Mcclure','user1','user1@gmail.com',md5('pass'),'2020-04-28 02:47:29','https://via.placeholder.com/400/911/fff/?text=user1'),
(2,'Margaret Short','user2','user2@gmail.com',md5('pass'),'2020-04-26 07:56:15','https://via.placeholder.com/400/801/fff/?text=user2'),
(3,'Kane Ratliff','user3','user3@gmail.com',md5('pass'),'2020-04-03 10:57:02','https://via.placeholder.com/400/990/fff/?text=user3'),
(4,'Tricia Davis','user4','user4@gmail.com',md5('pass'),'2020-01-22 12:55:18','https://via.placeholder.com/400/780/fff/?text=user4'),
(5,'Delia Cox','user5','user5@gmail.com',md5('pass'),'2020-05-30 02:52:11','https://via.placeholder.com/400/929/fff/?text=user5'),
(6,'Tonia Farley','user6','user6@gmail.com',md5('pass'),'2020-04-26 09:59:06','https://via.placeholder.com/400/857/fff/?text=user6'),
(7,'Castro Coleman','user7','user7@gmail.com',md5('pass'),'2020-01-06 10:29:01','https://via.placeholder.com/400/778/fff/?text=user7'),
(8,'Russo Sharp','user8','user8@gmail.com',md5('pass'),'2020-05-08 07:17:44','https://via.placeholder.com/400/705/fff/?text=user8'),
(9,'Knowles Good','user9','user9@gmail.com',md5('pass'),'2020-01-26 06:21:59','https://via.placeholder.com/400/973/fff/?text=user9'),
(10,'Lena Jordan','user10','user10@gmail.com',md5('pass'),'2020-03-05 11:32:26','https://via.placeholder.com/400/975/fff/?text=user10');