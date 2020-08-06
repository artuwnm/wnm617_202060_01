CREATE TABLE IF NOT EXISTS `track_users` (
`id` INT NULL,
`name` VARCHAR(MAX) NULL,
`username` VARCHAR(MAX) NULL,
`email` VARCHAR(MAX) NULL,
`pssword` VARCHAR(MAX) NULL,
`date_create` VARCHAR(MAX) NULL,
`img` VARCHAR(MAX) NULL
);

INSERT INTO track_users VALUES
(1,'Bonita Sanford','user1','user1@gmail.com',md5('pass'),'20-02-24','https://via.placeholder.com/400/797/fff/?text=user1'),
(2,'Cameron Hess','user2','user2@gmail.com',md5('pass'),'20-05-08','https://via.placeholder.com/400/755/fff/?text=user2'),
(3,'Dorsey Hopper','user3','user3@gmail.com',md5('pass'),'20-02-25','https://via.placeholder.com/400/718/fff/?text=user3'),
(4,'Mcdowell Macdonald','user4','user4@gmail.com',md5('pass'),'20-03-10','https://via.placeholder.com/400/825/fff/?text=user4'),
(5,'Marshall Cobb','user5','user5@gmail.com',md5('pass'),'20-01-16','https://via.placeholder.com/400/851/fff/?text=user5'),
(6,'Conway Navarro','user6','user6@gmail.com',md5('pass'),'20-03-19','https://via.placeholder.com/400/864/fff/?text=user6'),
(7,'Gabrielle Nolan','user7','user7@gmail.com',md5('pass'),'20-03-17','https://via.placeholder.com/400/746/fff/?text=user7'),
(8,'Selma Mckinney','user8','user8@gmail.com',md5('pass'),'20-06-12','https://via.placeholder.com/400/792/fff/?text=user8'),
(9,'Sandy Patrick','user9','user9@gmail.com',md5('pass'),'20-05-14','https://via.placeholder.com/400/703/fff/?text=user9'),
(10,'Chaney Jensen','user10','user10@gmail.com',md5('pass'),'20-05-20','https://via.placeholder.com/400/762/fff/?text=user10');