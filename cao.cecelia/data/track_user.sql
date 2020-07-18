CREATE TABLE IF NOT EXISTS `track_users` (
`id` INT NULL,
`name` VARCHAR(MAX) NULL,
`username` VARCHAR(MAX) NULL,
`email` VARCHAR(MAX) NULL,
`password` VARCHAR(MAX) NULL,
`data_create` VARCHAR(MAX) NULL,
`img` VARCHAR(MAX) NULL
);

INSERT INTO track_users VALUES
(1,'Morrison Solis','user1','user1@gmail.com',md5(''pass''),'2019-12-06 11:30:22','https://via.placeholder.com/400/766/fff/?text=user1'),
(2,'Duncan Chaney','user2','user2@gmail.com',md5(''pass''),'2020-01-25 08:02:00','https://via.placeholder.com/400/883/fff/?text=user2'),
(3,'Ellison Bowen','user3','user3@gmail.com',md5(''pass''),'2020-06-29 09:15:22','https://via.placeholder.com/400/730/fff/?text=user3'),
(4,'Giles Rojas','user4','user4@gmail.com',md5(''pass''),'2018-07-10 07:16:00','https://via.placeholder.com/400/933/fff/?text=user4'),
(5,'Rosario Shaw','user5','user5@gmail.com',md5(''pass''),'2019-02-18 05:54:44','https://via.placeholder.com/400/955/fff/?text=user5'),
(6,'Edna Tyler','user6','user6@gmail.com',md5(''pass''),'2019-02-05 04:37:28','https://via.placeholder.com/400/804/fff/?text=user6'),
(7,'Anna Herrera','user7','user7@gmail.com',md5(''pass''),'2019-08-05 07:25:12','https://via.placeholder.com/400/840/fff/?text=user7'),
(8,'Judith Shepard','user8','user8@gmail.com',md5(''pass''),'2018-03-20 01:54:41','https://via.placeholder.com/400/747/fff/?text=user8'),
(9,'Cecelia Donaldson','user9','user9@gmail.com',md5(''pass''),'2020-07-03 04:19:17','https://via.placeholder.com/400/777/fff/?text=user9'),
(10,'Carney David','user10','user10@gmail.com',md5(''pass''),'2020-03-21 05:46:20','https://via.placeholder.com/400/931/fff/?text=user10');