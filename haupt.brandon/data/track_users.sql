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
(1,'Mara Collins','user1','user1@gmail.com','md5(''pass'')','63Y-03-25 03:23:19','https://via.placeholder.com/400/855/fff/?text=user1'),
(2,'Yesenia Ferrell','user2','user2@gmail.com','md5(''pass'')','49Y-10-02 09:54:32','https://via.placeholder.com/400/777/fff/?text=user2'),
(3,'Lynne Marks','user3','user3@gmail.com','md5(''pass'')','38Y-03-18 12:31:05','https://via.placeholder.com/400/956/fff/?text=user3'),
(4,'Rodriguez Travis','user4','user4@gmail.com','md5(''pass'')','16Y-06-21 03:03:04','https://via.placeholder.com/400/702/fff/?text=user4'),
(5,'Louisa Payne','user5','user5@gmail.com','md5(''pass'')','62Y-12-15 01:16:35','https://via.placeholder.com/400/998/fff/?text=user5'),
(6,'Margo Reed','user6','user6@gmail.com','md5(''pass'')','91Y-01-29 12:27:24','https://via.placeholder.com/400/857/fff/?text=user6'),
(7,'Bass Shelton','user7','user7@gmail.com','md5(''pass'')','88Y-11-03 03:45:25','https://via.placeholder.com/400/750/fff/?text=user7'),
(8,'Vazquez Wood','user8','user8@gmail.com','md5(''pass'')','61Y-04-23 04:23:49','https://via.placeholder.com/400/870/fff/?text=user8'),
(9,'Mercado Erickson','user9','user9@gmail.com','md5(''pass'')','01Y-08-27 12:38:00','https://via.placeholder.com/400/721/fff/?text=user9'),
(10,'Padilla Norris','user10','user10@gmail.com','md5(''pass'')','81Y-05-07 11:51:18','https://via.placeholder.com/400/842/fff/?text=user10');