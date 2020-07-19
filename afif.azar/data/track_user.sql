CREATE TABLE IF NOT EXISTS `user-template` (
`id` INT NULL,
`name` VARCHAR(MAX) NULL,
`username` VARCHAR(MAX) NULL,
`email` VARCHAR(MAX) NULL,
`password` VARCHAR(MAX) NULL,
`date_create` VARCHAR(MAX) NULL,
`img` VARCHAR(MAX) NULL
);

INSERT INTO user-template VALUES
(1,'Boyer Booth','user1','user1@gmail.com','md5(''pass'')','2020-05-     20 12:12:33','https://via.placeholder.com/400/710/fff/?text=user1'),
(2,'Skinner Patel','user2','user2@gmail.com','md5(''pass'')','2020-03-     03 09:37:29','https://via.placeholder.com/400/811/fff/?text=user2'),
(3,'Moon Curtis','user3','user3@gmail.com','md5(''pass'')','2020-05-     29 08:02:06','https://via.placeholder.com/400/889/fff/?text=user3'),
(4,'Gabrielle Mcconnell','user4','user4@gmail.com','md5(''pass'')','2020-05-     01 10:48:57','https://via.placeholder.com/400/994/fff/?text=user4'),
(5,'Guerra Aguirre','user5','user5@gmail.com','md5(''pass'')','2020-04-     09 10:09:29','https://via.placeholder.com/400/911/fff/?text=user5'),
(6,'Kelley Mays','user6','user6@gmail.com','md5(''pass'')','2020-04-     25 10:40:36','https://via.placeholder.com/400/712/fff/?text=user6'),
(7,'Clara Landry','user7','user7@gmail.com','md5(''pass'')','2020-01-     08 06:51:18','https://via.placeholder.com/400/824/fff/?text=user7'),
(8,'Holly Barrett','user8','user8@gmail.com','md5(''pass'')','2020-05-     31 03:42:03','https://via.placeholder.com/400/932/fff/?text=user8'),
(9,'Brennan Goodman','user9','user9@gmail.com','md5(''pass'')','2020-01-     03 02:56:48','https://via.placeholder.com/400/880/fff/?text=user9'),
(10,'Hart Cortez','user10','user10@gmail.com','md5(''pass'')','2020-02-     03 05:51:10','https://via.placeholder.com/400/799/fff/?text=user10');