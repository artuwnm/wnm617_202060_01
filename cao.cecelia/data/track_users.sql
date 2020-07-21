CREATE TABLE IF NOT EXISTS `track_user` (
`id` INT NULL,
`name` VARCHAR(MAX) NULL,
`username` VARCHAR(MAX) NULL,
`email` VARCHAR(MAX) NULL,
`phone` VARCHAR(MAX) NULL,
`password` VARCHAR(MAX) NULL,
`data_create` VARCHAR(MAX) NULL,
`img` VARCHAR(MAX) NULL,
`favoritealcohol` VARCHAR(MAX) NULL,
`achievement` VARCHAR(MAX) NULL,
`recentalcohol` VARCHAR(MAX) NULL
);

INSERT INTO track_users VALUES
(1,'Estela Howe','user1','user1@gmail.com','+1 (810) 470-2304',md5('pass'),'2019-07-05 01:36:07','https://via.placeholder.com/400/899/fff/?text=user1','Jager','You already collected 5 kinds of alcohol.','Vodka'),
(2,'Mccarty Newton','user2','user2@gmail.com','+1 (844) 460-3000',md5('pass'),'2018-09-02 12:11:12','https://via.placeholder.com/400/921/fff/?text=user2','Vodka','You already collected 8 kinds of alcohol.','Vodka'),
(3,'Frederick Morton','user3','user3@gmail.com','+1 (874) 430-3242',md5('pass'),'2018-09-29 05:27:58','https://via.placeholder.com/400/943/fff/?text=user3','Vodka','You already collected 26 kinds of alcohol.','Jager'),
(4,'Steele Sweet','user4','user4@gmail.com','+1 (860) 554-2277',md5('pass'),'2018-05-29 02:12:47','https://via.placeholder.com/400/900/fff/?text=user4','Balleys','You already collected 10 kinds of alcohol.','Jin'),
(5,'Rosemary Greer','user5','user5@gmail.com','+1 (859) 469-3271',md5('pass'),'2019-06-14 07:41:11','https://via.placeholder.com/400/932/fff/?text=user5','Balleys','You already collected 37 kinds of alcohol.','Jager'),
(6,'Mayra Bray','user6','user6@gmail.com','+1 (929) 408-3395',md5('pass'),'2018-06-13 12:56:58','https://via.placeholder.com/400/826/fff/?text=user6','Balleys','You already collected 33 kinds of alcohol.','Vodka'),
(7,'Ellen Wise','user7','user7@gmail.com','+1 (962) 412-2039',md5('pass'),'2018-01-17 08:40:04','https://via.placeholder.com/400/789/fff/?text=user7','Vodka','You already collected 3 kinds of alcohol.','Jin'),
(8,'Bethany Wolfe','user8','user8@gmail.com','+1 (812) 469-2070',md5('pass'),'2018-11-05 03:44:51','https://via.placeholder.com/400/962/fff/?text=user8','Jin','You already collected 33 kinds of alcohol.','Vodka'),
(9,'Stanley Baird','user9','user9@gmail.com','+1 (859) 477-3869',md5('pass'),'2018-02-26 11:10:41','https://via.placeholder.com/400/809/fff/?text=user9','Jager','You already collected 15 kinds of alcohol.','Vodka'),
(10,'Lourdes Sharpe','user10','user10@gmail.com','+1 (870) 412-3697',md5('pass'),'2018-01-05 04:42:58','https://via.placeholder.com/400/748/fff/?text=user10','Jager','You already collected 49 kinds of alcohol.','Jin');