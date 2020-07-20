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
(1,'Luisa Gardner','user1','user1@gmail.com','md5(''pass'')','2020-07-08 12:08:21','https://via.placeholder.com/400/914/fff/?text=user1'),
(2,'Becker Small','user2','user2@gmail.com','md5(''pass'')','2020-02-15 12:34:58','https://via.placeholder.com/400/717/fff/?text=user2'),
(3,'Lloyd Salinas','user3','user3@gmail.com','md5(''pass'')','2020-02-06 05:55:37','https://via.placeholder.com/400/731/fff/?text=user3'),
(4,'Katherine Solomon','user4','user4@gmail.com','md5(''pass'')','2020-01-22 07:41:39','https://via.placeholder.com/400/707/fff/?text=user4'),
(5,'Silva Rodriguez','user5','user5@gmail.com','md5(''pass'')','2020-07-10 06:31:54','https://via.placeholder.com/400/714/fff/?text=user5'),
(6,'Sykes Doyle','user6','user6@gmail.com','md5(''pass'')','2020-03-13 03:47:58','https://via.placeholder.com/400/719/fff/?text=user6'),
(7,'Tate Townsend','user7','user7@gmail.com','md5(''pass'')','2020-04-28 08:29:20','https://via.placeholder.com/400/875/fff/?text=user7'),
(8,'Sharp Hart','user8','user8@gmail.com','md5(''pass'')','2020-07-12 01:00:24','https://via.placeholder.com/400/874/fff/?text=user8'),
(9,'Autumn Stuart','user9','user9@gmail.com','md5(''pass'')','2020-05-26 04:26:24','https://via.placeholder.com/400/880/fff/?text=user9'),
(10,'Frost Keller','user10','user10@gmail.com','md5(''pass'')','2020-02-28 05:55:39','https://via.placeholder.com/400/863/fff/?text=user10');