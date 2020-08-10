CREATE TABLE IF NOT EXISTS `track_users` (
`id` INT NULL,
`name` VARCHAR(MAX) NULL,
`username` VARCHAR(MAX) NULL,
`email` VARCHAR(MAX) NULL,
`password` VARCHAR(MAX) NULL,
`date_create` VARCHAR(MAX) NULL,
`img` VARCHAR(MAX) NULL
); 

INSERT INTO `track_users` (`id`, `name`, `username`, `email`, `password`, `date_create`, `img`) VALUES
(1, 'Hollie Savage', 'user1', 'user1@gmail.com', md5('pass'), '2020-02-25 09:07:02', 'https://via.placeholder.com/400/990/fff/?text=user1'),
(2, 'Gregory Young', 'user2', 'user2@gmail.com', md5('pass'), '2020-05-25 01:44:54', 'https://via.placeholder.com/400/960/fff/?text=user2'),
(3, 'Ethel Holman', 'user3', 'user3@gmail.com', md5('pass'), '2020-07-03 07:40:13', 'https://via.placeholder.com/400/763/fff/?text=user3'),
(4, 'Austin Mayer', 'user4', 'user4@gmail.com', md5('pass'), '2020-07-09 03:09:53', 'https://via.placeholder.com/400/734/fff/?text=user4'),
(5, 'Eloise Wynn', 'user5', 'user5@gmail.com', md5('pass'), '2020-07-18 09:20:40', 'https://via.placeholder.com/400/719/fff/?text=user5'),
(6, 'Cassandra Merrill', 'user6', 'user6@gmail.com', md5('pass'), '2020-05-30 09:51:51', 'https://via.placeholder.com/400/933/fff/?text=user6'),
(7, 'Hines Wyatt', 'user7', 'user7@gmail.com', md5('pass'), '2020-01-25 03:22:22', 'https://via.placeholder.com/400/975/fff/?text=user7'),
(8, 'Elvia Shepard', 'user8', 'user8@gmail.com', md5('pass'), '2020-04-24 02:07:37', 'https://via.placeholder.com/400/939/fff/?text=user8'),
(9, 'Mcconnell Petty', 'user9', 'user9@gmail.com', md5('pass'), '2020-05-07 09:37:38', 'https://via.placeholder.com/400/711/fff/?text=user9'),
(10, 'Allison Edwards', 'user10', 'user10@gmail.com', md5('pass'), '2020-05-01 01:39:05', 'https://via.placeholder.com/400/918/fff/?text=user10');
