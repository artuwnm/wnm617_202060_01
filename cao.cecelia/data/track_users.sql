-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- 主机： localhost:3306
-- 生成日期： 2020-08-14 17:50:33
-- 服务器版本： 5.6.48-cll-lve
-- PHP 版本： 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `ceceliacao_aau`
--

-- --------------------------------------------------------

--
-- 表的结构 `track_users`
--

CREATE TABLE `track_users` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `username` varchar(64) NOT NULL,
  `email` varchar(128) NOT NULL,
  `phone` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  `date_create` datetime NOT NULL,
  `img` varchar(128) NOT NULL,
  `favoritealcohol` varchar(128) NOT NULL,
  `achievement` varchar(128) NOT NULL,
  `recentalcohol` varchar(128) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `track_users`
--

INSERT INTO `track_users` (`id`, `name`, `username`, `email`, `phone`, `password`, `date_create`, `img`, `favoritealcohol`, `achievement`, `recentalcohol`) VALUES
(1, 'Estela Howal', 'user1', 'user1@gmail.com', '5732929635', '1a1dc91c907325c69271ddf0c944bc72', '2019-07-05 01:36:07', 'uploads/1596573832.85_mojito.jpg', 'Tequila and beer', 'You already collected 5 kinds of alcohol.', 'Vodka'),
(2, 'Mccarty Newton', 'user2', 'user2@gmail.com', '+1 (844) 460-3000', '1a1dc91c907325c69271ddf0c944bc72', '2018-09-02 12:11:12', 'https://via.placeholder.com/400/921/fff/?text=user2', 'Vodka', 'You already collected 8 kinds of alcohol.', 'Vodka'),
(3, 'Frederick Morton', 'user3', 'user3@gmail.com', '+1 (874) 430-3242', '1a1dc91c907325c69271ddf0c944bc72', '2018-09-29 05:27:58', 'https://via.placeholder.com/400/943/fff/?text=user3', 'Vodka', 'You already collected 26 kinds of alcohol.', 'Jager'),
(4, 'Steele Sweet', 'user4', 'user4@gmail.com', '+1 (860) 554-2277', '1a1dc91c907325c69271ddf0c944bc72', '2018-05-29 02:12:47', 'https://via.placeholder.com/400/900/fff/?text=user4', 'Balleys', 'You already collected 10 kinds of alcohol.', 'Jin'),
(5, 'Rosemary Greer', 'user5', 'user5@gmail.com', '+1 (859) 469-3271', '1a1dc91c907325c69271ddf0c944bc72', '2019-06-14 07:41:11', 'https://via.placeholder.com/400/932/fff/?text=user5', 'Balleys', 'You already collected 37 kinds of alcohol.', 'Jager'),
(6, 'Mayra Bray', 'user6', 'user6@gmail.com', '+1 (929) 408-3395', '1a1dc91c907325c69271ddf0c944bc72', '2018-06-13 12:56:58', 'https://via.placeholder.com/400/826/fff/?text=user6', 'Balleys', 'You already collected 33 kinds of alcohol.', 'Vodka'),
(7, 'Ellen Wise', 'user7', 'user7@gmail.com', '+1 (962) 412-2039', '1a1dc91c907325c69271ddf0c944bc72', '2018-01-17 08:40:04', 'https://via.placeholder.com/400/789/fff/?text=user7', 'Vodka', 'You already collected 3 kinds of alcohol.', 'Jin'),
(8, 'Bethany Wolfe', 'user8', 'user8@gmail.com', '+1 (812) 469-2070', '1a1dc91c907325c69271ddf0c944bc72', '2018-11-05 03:44:51', 'https://via.placeholder.com/400/962/fff/?text=user8', 'Jin', 'You already collected 33 kinds of alcohol.', 'Vodka'),
(9, 'Stanley Baird', 'user9', 'user9@gmail.com', '+1 (859) 477-3869', '1a1dc91c907325c69271ddf0c944bc72', '2018-02-26 11:10:41', 'https://via.placeholder.com/400/809/fff/?text=user9', 'Jager', 'You already collected 15 kinds of alcohol.', 'Vodka'),
(10, 'Lourdes Wang', 'user10', 'user10@gmail.com', '+1 (870) 412-3697', '1a1dc91c907325c69271ddf0c944bc72', '2018-01-05 04:42:58', 'uploads/1596614224.493_brooke-cagle-n4pP64Jhd4w-unsplash.jpg', 'Jager', 'You already collected 49 kinds of alcohol.', 'Jin'),
(11, 'Alice Wang', 'user11', 'user11@gmail.com', '', '1a1dc91c907325c69271ddf0c944bc72', '2020-08-02 14:26:39', 'https://via.placeholder.com/400/?text=USER', '', '', ''),
(12, '', 'user20', 'user20@gmail.com', '', '1a1dc91c907325c69271ddf0c944bc72', '2020-08-06 12:52:07', 'https://via.placeholder.com/400/?text=USER', '', '', ''),
(13, '', 'ham', 'ham@ham.com', '', '79af0c177db2ee64b7301af6e1d53634', '2020-08-06 12:53:55', 'https://via.placeholder.com/400/?text=USER', '', '', ''),
(14, '', 'user30', 'user30@gmail.com', '', '1a1dc91c907325c69271ddf0c944bc72', '2020-08-06 14:12:24', 'https://via.placeholder.com/400/?text=USER', '', '', ''),
(15, '', 'user40', 'user40@gmail.com', '', '1a1dc91c907325c69271ddf0c944bc72', '2020-08-06 14:44:33', 'https://via.placeholder.com/400/?text=USER', '', '', ''),
(16, '', 'user50', 'user50@gmail.com', '', '1a1dc91c907325c69271ddf0c944bc72', '2020-08-06 14:45:22', 'https://via.placeholder.com/400/?text=USER', '', '', ''),
(17, '', 'user60', 'user60@gmail.com', '', '1a1dc91c907325c69271ddf0c944bc72', '2020-08-06 14:46:21', 'https://via.placeholder.com/400/?text=USER', '', '', ''),
(18, '', 'aaa', 'aaa@gmail.com', '', '1a1dc91c907325c69271ddf0c944bc72', '2020-08-07 09:46:12', 'https://via.placeholder.com/400/?text=USER', '', '', ''),
(19, 'Alexander Cao', 'user0', 'user0@gmail.com', '5738253051', '1a1dc91c907325c69271ddf0c944bc72', '2020-08-09 18:09:40', 'uploads/1597022033.6833_A79B6CCF-B2BE-4C5B-B21F-EA8AE6729521.jpeg', 'Beer', '', ''),
(20, '', 'user101', 'user101.aau.test@gmail.com', '', '1a1dc91c907325c69271ddf0c944bc72', '2020-08-09 19:44:25', 'https://via.placeholder.com/400/?text=USER', '', '', ''),
(21, '', 'user500', 'qiqiqiqi@gmail.com', '', '1a1dc91c907325c69271ddf0c944bc72', '2020-08-09 23:54:59', 'https://via.placeholder.com/400/?text=USER', '', '', ''),
(22, '', 'admin', 'admin@gmail.com', '', '1a1dc91c907325c69271ddf0c944bc72', '2020-08-10 03:03:58', 'https://via.placeholder.com/400/?text=USER', '', '', ''),
(23, 'Alice Wang', 'usernew', 'usernew@gmail.com', '8766654322', '1a1dc91c907325c69271ddf0c944bc72', '2020-08-10 12:12:00', 'uploads/1597086755.6786_brooke-cagle-n4pP64Jhd4w-unsplash.jpg', 'Tequila', '', ''),
(24, '', 'Li', '767927598@qq.com', '', 'e10adc3949ba59abbe56e057f20f883e', '2020-08-11 21:38:33', 'https://via.placeholder.com/400/?text=USER', '', '', ''),
(25, '', 'username', 'Liqing 4028@163.com ', '', '5f4dcc3b5aa765d61d8327deb882cf99', '2020-08-12 00:30:02', 'https://via.placeholder.com/400/?text=USER', '', '', '');

--
-- 转储表的索引
--

--
-- 表的索引 `track_users`
--
ALTER TABLE `track_users`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `track_users`
--
ALTER TABLE `track_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
