-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 08, 2020 at 03:37 PM
-- Server version: 5.6.48-cll-lve
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `i6925698_wp1`
--

-- --------------------------------------------------------

--
-- Table structure for table `track_locations`
--

CREATE TABLE `track_locations` (
  `id` int(11) NOT NULL,
  `animal_id` int(11) NOT NULL,
  `lat` double NOT NULL,
  `lng` double NOT NULL,
  `description` text NOT NULL,
  `date_create` datetime NOT NULL,
  `photo` varchar(256) NOT NULL,
  `icon` varchar(256) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `track_locations`
--

INSERT INTO `track_locations` (`id`, `animal_id`, `lat`, `lng`, `description`, `date_create`, `photo`, `icon`) VALUES
(150, 25, 37.69945, -122.468809, 'Officia enim sit eiusmod in labore est anim labore nostrud minim velit nulla officia cupidatat.', '2020-04-06 08:07:40', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(149, 16, 37.74069, -122.440028, 'Nostrud pariatur aute commodo do consequat adipisicing voluptate fugiat sunt culpa enim eiusmod sit sunt.', '2020-04-09 01:10:05', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(148, 22, 37.70204, -122.442495, 'Anim eu anim aute ullamco incididunt quis ipsum proident esse ullamco sunt occaecat tempor.', '2020-04-30 05:09:58', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(146, 2, 37.74838, -122.4649, 'Reprehenderit laboris consectetur Lorem id cillum enim eu nulla sit veniam deserunt.', '2020-07-19 10:54:46', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(147, 32, 37.74638, -122.405299, 'Occaecat labore consectetur reprehenderit dolore occaecat reprehenderit nulla do reprehenderit do consectetur.', '2020-02-02 09:13:41', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(144, 20, 37.71092, -122.415791, 'In non est dolore aute aliquip dolore deserunt.', '2020-04-15 05:54:01', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(145, 3, 37.79481, -122.40686, 'Elit veniam ad fugiat veniam.', '2020-02-11 03:41:38', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(143, 1, 37.79481, -122.423782, 'Sit tempor mollit aute magna duis sunt qui.', '2020-02-12 11:33:27', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(141, 16, 37.72358, -122.4159, 'Exercitation deserunt commodo cupidatat sint ullamco elit irure ullamco id.', '2020-05-04 01:23:09', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(142, 15, 37.72118, -122.437547, 'Anim consequat laboris sint enim excepteur duis dolor do exercitation velit irure ullamco duis.', '2020-03-16 09:34:13', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(139, 1, 37.74531, -122.496086, 'Culpa deserunt Lorem do sunt deserunt qui.', '2020-04-03 09:28:57', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(140, 39, 37.76624, -122.471719, 'Consequat quis ut et eu fugiat.', '2020-06-06 06:09:26', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(138, 25, 37.77772, -122.403114, 'Et do deserunt sit cupidatat.', '2020-02-08 01:19:15', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(137, 6, 37.76369, -122.421985, 'Commodo esse cillum adipisicing pariatur aliquip eu quis excepteur deserunt dolore.', '2020-02-21 03:36:13', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(135, 18, 37.73735, -122.403593, 'Nisi mollit nisi proident excepteur Lorem.', '2020-03-11 08:55:43', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(136, 5, 37.73568, -122.493872, 'Cupidatat nulla laboris dolore consectetur in nisi minim tempor qui dolore mollit ut.', '2020-07-03 01:02:38', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(133, 6, 37.78521, -122.450804, 'Qui sit cupidatat aliquip reprehenderit culpa commodo ad fugiat id.', '2020-05-15 01:13:27', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(134, 25, 37.72366, -122.446447, 'Magna labore aliqua laborum duis anim magna cillum.', '2020-02-21 06:05:23', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(132, 40, 37.7198, -122.430047, 'Eu cillum nisi enim adipisicing ipsum ut irure consectetur commodo nostrud aliqua.', '2020-02-01 03:26:06', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(130, 4, 37.77972, -122.425388, 'Elit officia culpa nostrud eu.', '2020-04-26 07:35:45', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(131, 34, 37.71689, -122.410075, 'Nostrud et aliqua pariatur commodo ut fugiat ipsum deserunt id incididunt.', '2020-03-13 10:49:47', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(129, 25, 37.78065, -122.41477, 'Labore Lorem ex cillum exercitation ullamco enim minim veniam tempor laborum duis officia aliqua incididunt.', '2020-07-07 10:14:14', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(128, 36, 37.7078, -122.498658, 'Commodo enim non proident sunt ex laborum eu excepteur mollit consectetur sunt laborum adipisicing elit.', '2020-03-10 03:01:02', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(126, 45, 37.74401, -122.490235, 'Pariatur esse ea labore id.', '2020-03-11 02:54:20', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(127, 28, 37.72752, -122.447229, 'Ipsum aliqua ea duis ex sit irure deserunt ea.', '2020-07-04 05:31:10', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(124, 37, 37.72208, -122.39301, 'Exercitation fugiat duis ex ipsum magna.', '2020-04-05 08:56:01', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(125, 16, 37.75682, -122.43373, 'Laborum non excepteur velit sint consequat exercitation minim exercitation in ullamco ad ad Lorem.', '2020-03-17 04:22:18', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(122, 25, 37.72452, -122.406592, 'Aliquip commodo et voluptate officia id nostrud laborum.', '2020-05-28 08:35:07', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(123, 16, 37.72138, -122.422623, 'Enim non dolor dolore minim est anim est magna duis.', '2020-07-16 04:12:38', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(121, 32, 37.79065, -122.390861, 'Id elit ad in dolore eiusmod mollit et esse non exercitation mollit amet nostrud aliquip.', '2020-06-21 03:03:02', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(120, 21, 37.78384, -122.455229, 'Amet incididunt nostrud mollit ea dolore consequat eu laborum est est nisi et.', '2020-06-21 01:02:36', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(118, 5, 37.76227, -122.416173, 'Officia esse ad tempor magna ex officia elit consectetur non nostrud.', '2020-04-23 11:00:52', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(119, 26, 37.78458, -122.456047, 'Nulla nulla amet irure commodo quis elit quis.', '2020-04-27 01:10:34', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(117, 29, 37.75266, -122.404241, 'Incididunt sint veniam anim ut ut ea tempor aute velit esse commodo pariatur.', '2020-07-12 11:34:01', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(115, 20, 37.76597, -122.42774, 'Velit cillum ullamco qui mollit consectetur ullamco culpa tempor irure.', '2020-03-07 10:52:47', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(116, 19, 37.73962, -122.466465, 'Id officia cupidatat proident labore occaecat sint ex voluptate dolore proident id tempor id dolor.', '2020-04-21 10:56:06', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(113, 44, 37.77726, -122.44067, 'Amet id qui ut ullamco ea sit aliqua cupidatat consequat veniam nulla Lorem.', '2020-02-19 08:38:38', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(114, 6, 37.74914, -122.481535, 'Sint exercitation in in consequat adipisicing adipisicing irure.', '2020-03-02 05:14:10', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(112, 43, 37.79751, -122.48611, 'Eiusmod duis sunt ullamco officia elit.', '2020-07-20 08:39:18', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(110, 41, 37.70655, -122.437951, 'Labore sit mollit non sunt esse ut elit elit deserunt esse minim est.', '2020-06-05 09:30:53', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(111, 22, 37.7792, -122.432397, 'Et esse veniam cillum qui velit officia occaecat est veniam fugiat ipsum commodo quis.', '2020-05-07 02:04:21', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(109, 5, 37.76073, -122.415961, 'Id irure ex veniam nulla non incididunt laboris proident excepteur veniam ea ex ut.', '2020-03-23 10:16:12', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(107, 11, 37.72537, -122.426763, 'Aliqua do dolore magna quis fugiat proident officia minim veniam enim.', '2020-06-21 03:59:51', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(108, 43, 37.73028, -122.498555, 'Et reprehenderit officia non do ad cillum laborum.', '2020-04-04 10:36:13', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(105, 5, 37.78819, -122.435154, 'Magna sint qui adipisicing ut irure culpa et.', '2020-02-05 05:23:24', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(106, 1, 37.78183, -122.398909, 'Cupidatat proident esse irure officia magna proident.', '2020-06-16 02:50:43', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(104, 24, 37.80101, -122.43431, 'Sint fugiat officia ad nisi minim.', '2020-05-30 12:18:51', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(102, 50, 37.72569, -122.490591, 'Anim Lorem esse commodo elit.', '2020-06-15 06:34:59', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(103, 13, 37.75075, -122.395984, 'Cupidatat ipsum ut anim minim anim laboris consequat dolore velit minim.', '2020-02-22 03:11:45', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(100, 6, 37.76296, -122.421382, 'Aliquip eu ad dolor ut dolore.', '2020-01-20 11:51:10', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(101, 40, 37.73429, -122.257057, 'Elit fugiat aliquip laboris ipsum id ea et sint.', '2020-05-26 06:13:30', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(98, 28, 37.70522, -122.845905, 'Adipisicing ex dolor nostrud ad.', '2020-05-10 10:19:55', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(99, 21, 37.79846, -122.46112, 'Magna nulla ad proident quis nulla fugiat sit id est excepteur culpa.', '2020-02-14 06:30:20', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(96, 23, 37.7834, -122.854746, 'Dolore irure excepteur quis eu.', '2020-01-05 04:41:04', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(97, 41, 37.72973, -122.528983, 'Enim minim amet magna in.', '2020-04-14 11:46:40', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(94, 11, 37.79187, -122.445371, 'Culpa ut ex anim excepteur veniam.', '2020-03-24 01:54:44', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(95, 9, 37.77026, -122.435645, 'Sint quis id culpa ipsum.', '2020-07-05 05:18:43', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(93, 17, 37.78293, -122.471836, 'Qui elit ex fugiat non enim officia ea.', '2020-03-27 01:28:10', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(91, 30, 37.77014, -122.460009, 'Velit elit aliqua velit aute tempor nulla ipsum qui Lorem amet nostrud.', '2020-03-15 10:21:44', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(92, 35, 37.79183, -122.497527, 'Id Lorem aliqua magna proident ad dolore eu.', '2020-06-03 09:49:12', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(89, 6, 37.72454, -122.472298, 'Quis quis consectetur magna nostrud.', '2020-06-15 08:59:19', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(90, 20, 37.76242, -122.408836, 'Duis dolor ea dolore reprehenderit.', '2020-02-18 01:46:56', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(88, 11, 37.77711, -122.480733, 'Nostrud duis in do fugiat tempor ut qui ipsum officia in magna officia id.', '2020-05-23 11:53:44', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(87, 25, 37.713, -122.481675, 'Ad laborum consectetur occaecat labore exercitation laboris.', '2020-03-19 02:38:44', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(85, 1, 37.76617, -122.44705, 'Aute enim adipisicing quis anim laboris quis.', '2020-05-14 06:51:36', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(86, 44, 37.74006, -122.39217, 'Exercitation proident qui dolor deserunt qui dolor sunt non ad ut sint.', '2020-03-12 01:19:17', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(83, 39, 37.70433, -122.443832, 'Non labore duis est quis proident dolor mollit.', '2020-01-30 10:15:08', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(84, 32, 37.77872, -122.397138, 'Nulla Lorem Lorem dolor ad excepteur cillum irure pariatur consectetur labore sunt sit id.', '2020-02-04 08:19:08', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(82, 50, 37.76089, -122.406646, 'Eiusmod consequat nisi eu Lorem ullamco duis non duis laboris deserunt amet irure nostrud.', '2020-04-08 06:42:52', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(80, 23, 37.79111, -122.728202, 'Ex esse ipsum aute ea ex nisi ad elit pariatur.', '2020-02-16 01:44:57', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(81, 26, 37.74167, -122.451069, 'Minim laboris eu cupidatat minim nulla est magna.', '2020-03-18 09:08:37', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(78, 10, 37.72065, -122.481564, 'Exercitation eu mollit officia qui occaecat dolor adipisicing duis in id ullamco.', '2020-02-10 11:53:59', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(79, 8, 37.74037, -122.444498, 'Minim ex laborum laborum commodo tempor deserunt tempor nulla.', '2020-05-08 06:42:10', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(77, 33, 37.70557, -122.450737, 'Irure voluptate id excepteur ut consectetur anim duis laborum nulla do dolor culpa aliqua.', '2020-05-28 08:41:38', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(75, 2, 37.76369, -122.40061, 'Nisi magna cupidatat ad proident esse do ea dolore voluptate.', '2020-07-16 03:57:02', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(76, 7, 37.71412, -122.031141, 'Lorem eiusmod irure nisi consequat.', '2020-06-25 01:11:22', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(74, 27, 37.74849, -122.646136, 'Mollit minim ea ad id aliqua id voluptate non velit.', '2020-02-03 07:16:54', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(72, 32, 37.72224, -122.528024, 'Elit eu non mollit ullamco occaecat amet.', '2020-04-27 06:50:01', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(73, 42, 37.77858, -122.435595, 'Do enim veniam nisi id proident officia irure.', '2020-02-21 02:34:41', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(70, 3, 37.78153, -122.458789, 'In aute cillum Lorem labore labore.', '2020-01-29 05:53:00', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(71, 49, 37.76743, -122.423719, 'Labore labore incididunt sit incididunt fugiat proident veniam ut nostrud minim.', '2020-04-17 08:35:21', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(69, 2, 37.7471, -122.473165, 'Ullamco ea sit deserunt mollit est id excepteur nisi irure eu veniam aliquip.', '2020-04-01 04:33:41', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(67, 24, 37.76903, -122.442343, 'Qui nisi elit veniam aute incididunt ipsum Lorem minim.', '2020-01-13 07:09:02', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(68, 34, 37.79233, -122.454623, 'Esse culpa ipsum ullamco sint veniam minim commodo tempor duis.', '2020-04-23 10:50:52', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(66, 16, 37.74563, -122.464788, 'Adipisicing exercitation elit Lorem non esse sit magna pariatur ad proident reprehenderit ullamco ea.', '2020-01-19 11:23:20', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(64, 50, 37.76351, -122.475766, 'Ex enim quis ut veniam.', '2020-02-25 07:02:33', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(65, 4, 37.75835, -122.423329, 'Commodo cupidatat duis commodo sint exercitation culpa id sit qui.', '2020-05-09 01:42:07', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(63, 5, 37.70964, -122.446313, 'Enim labore id duis qui id tempor dolore officia adipisicing aliquip et deserunt.', '2020-03-25 04:29:22', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(61, 48, 37.75655, -122.454561, 'Aute commodo excepteur reprehenderit quis ullamco.', '2020-01-28 03:36:15', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(62, 19, 37.70157, -122.467338, 'Cillum tempor id deserunt commodo irure exercitation sunt.', '2020-02-26 11:08:17', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(60, 46, 37.70061, -122.401353, 'Culpa minim in id cupidatat laborum irure velit tempor enim.', '2020-05-13 07:29:15', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(58, 20, 37.74921, -122.450889, 'Aute ullamco mollit deserunt culpa nulla velit amet commodo.', '2020-02-21 02:47:53', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(59, 19, 37.79661, -122.413002, 'Quis irure aute ea cillum velit in consectetur ipsum exercitation.', '2020-05-08 12:30:34', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(56, 7, 37.71843, -122.443322, 'Anim tempor reprehenderit et sint amet id esse amet aliqua.', '2020-06-25 06:39:24', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(57, 26, 37.74456, -122.430857, 'Eiusmod ipsum dolor dolore reprehenderit aute deserunt quis.', '2020-05-09 08:35:17', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(54, 36, 37.78997, -122.491172, 'Officia occaecat culpa veniam veniam sit.', '2020-05-18 12:48:22', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(55, 27, 37.75237, -122.461902, 'Duis nulla eu nulla sit elit.', '2020-06-23 03:42:13', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(53, 31, 37.74166, -122.483197, 'Aute aliquip veniam Lorem aute adipisicing occaecat est irure non voluptate reprehenderit minim nostrud.', '2020-06-01 06:49:31', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(52, 39, 37.79474, -122.455305, 'Est adipisicing sint dolore consequat cillum eu in eu eu et voluptate Lorem.', '2020-01-19 09:36:38', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(51, 23, 37.75995, -122.49278, 'In sunt sint aute consequat exercitation nisi ex elit ad.', '2020-05-19 09:22:26', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(49, 34, 37.71199, -122.440695, 'Eu est aliqua nulla nostrud in amet sit id reprehenderit adipisicing dolor voluptate ad esse.', '2020-07-21 01:02:08', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(50, 13, 37.72913, -122.488052, 'Minim mollit in laboris qui occaecat sit nulla ea minim magna deserunt.', '2020-06-22 12:18:41', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(48, 43, 37.70443, -122.493628, 'Dolore pariatur nulla Lorem exercitation tempor ut aute veniam qui consectetur.', '2020-04-28 12:44:08', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(46, 4, 37.77435, -122.480515, 'Voluptate Lorem Lorem aliqua sit id nisi esse ad cillum.', '2020-01-06 06:37:22', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(47, 24, 37.76666, -122.409072, 'Reprehenderit ut nisi laborum laborum et duis duis minim enim commodo.', '2020-04-17 02:11:17', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(45, 11, 37.71174, -122.435704, 'Proident veniam velit proident sunt.', '2020-06-02 11:37:58', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(43, 38, 37.75698, -122.423266, 'Anim consectetur fugiat ipsum amet officia id sit labore.', '2020-01-26 10:09:52', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(44, 1, 37.78426, -122.440212, 'Anim consequat ea in ex dolor reprehenderit culpa aliquip magna culpa ad.', '2020-03-03 11:38:15', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(41, 16, 37.76299, -122.423883, 'Minim deserunt dolore aliquip ut consectetur.', '2020-01-24 07:51:22', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(42, 37, 37.758, -122.453193, 'Et laborum occaecat sunt laboris incididunt ad do sunt sit.', '2020-03-29 12:01:50', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(40, 19, 37.147823, -122.475758, 'Elit velit incididunt Lorem cupidatat occaecat exercitation amet.', '2020-01-11 05:07:22', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(39, 19, 37.036739, -122.458288, 'Quis incididunt sit officia mollit elit est duis commodo ipsum labore incididunt.', '2020-01-22 07:08:07', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(37, 5, 37.843234, -122.440404, 'Quis minim incididunt officia pariatur.', '2020-04-21 04:27:00', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(38, 43, 37.78894, -122.4629, 'Reprehenderit sint duis anim laborum excepteur laboris ex culpa esse dolore ad in excepteur.', '2020-04-09 12:44:16', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(35, 7, 37.75667, -122.436462, 'Fugiat officia eu sit non.', '2020-06-10 12:22:52', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(36, 2, 37.7473, -122.491976, 'Irure non sunt reprehenderit ipsum ut aliquip non cillum anim cupidatat consectetur et cupidatat.', '2020-07-20 09:59:50', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(34, 11, 37.75304, -122.405678, 'Ea sint consectetur in adipisicing cupidatat magna excepteur consectetur eiusmod deserunt ipsum magna incididunt.', '2020-02-09 02:17:26', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(32, 1, 37.78453, -122.497374, 'Sit incididunt adipisicing occaecat commodo laborum in aliquip magna voluptate velit officia.', '2020-02-19 10:07:44', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(33, 29, 37.79267, -122.477469, 'Eiusmod id consequat excepteur nulla aliqua excepteur incididunt mollit.', '2020-01-03 10:59:51', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(31, 40, 37.70852, -122.472738, 'Lorem excepteur cupidatat sunt anim eu anim fugiat minim voluptate do.', '2020-03-15 07:19:03', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(29, 35, 37.70364, -122.475064, 'Reprehenderit tempor sit aliquip consectetur excepteur deserunt anim nostrud magna pariatur sunt id quis labore.', '2020-05-25 05:49:10', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(30, 10, 37.77679, -122.411127, 'Sint proident consequat ad magna.', '2020-06-23 07:18:57', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(28, 41, 37.70733, -122.404594, 'Cupidatat consequat ad ea enim nisi incididunt incididunt pariatur minim laborum esse Lorem commodo.', '2020-07-18 07:47:46', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(26, 41, 37.77044, -122.423907, 'In eiusmod amet irure fugiat irure.', '2020-05-03 05:05:33', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(27, 43, 37.75977, -122.446652, 'Magna commodo pariatur pariatur qui ex aliquip fugiat.', '2020-01-31 07:11:04', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(24, 31, 37.69959, -122.392357, 'Laboris sit sint Lorem non culpa duis occaecat commodo dolore.', '2020-06-22 05:53:15', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(25, 18, 37.70063, -122.426567, 'Esse nostrud irure ea amet consequat.', '2020-05-11 02:36:11', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(23, 31, 37.77167, -122.480622, 'Non nulla eiusmod irure officia nostrud fugiat excepteur.', '2020-07-03 12:46:37', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(21, 22, 37.75729, -122.42962, 'Eu anim est sunt proident ipsum sunt Lorem proident anim nisi eiusmod minim amet.', '2020-03-28 04:14:40', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(22, 3, 37.76175, -122.465692, 'Laboris elit non occaecat eiusmod cillum ut Lorem ipsum veniam excepteur.', '2020-01-25 07:25:17', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(20, 38, 37.73896, -122.468027, 'Eu cillum aliqua eu dolor anim deserunt eiusmod aute aute.', '2020-06-29 06:38:55', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(19, 1, 37.76248, -122.435703, 'Adipisicing deserunt deserunt ut voluptate excepteur.', '2020-06-14 11:09:34', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(17, 21, 37.75158, -122.483982, 'Ullamco adipisicing exercitation reprehenderit sunt.', '2020-03-12 12:28:42', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(18, 48, 37.76921, -122.398432, 'Cillum dolore qui eu sint ullamco cupidatat eu mollit dolore velit consectetur aliqua anim.', '2020-01-21 11:08:24', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(15, 42, 37.79482, -122.399799, 'Aliquip aliquip dolore labore nostrud sint amet Lorem sunt aute qui.', '2020-07-07 01:46:25', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(16, 36, 37.70364, -122.440214, 'Esse esse irure occaecat commodo.', '2020-05-22 07:41:17', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(14, 18, 37.78496, -122.42011, 'Est sunt mollit eu enim adipisicing dolor sint ea.', '2020-05-31 01:43:20', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(12, 15, 37.76831, -122.424533, 'Aliquip ad consequat ipsum proident qui officia enim.', '2020-04-06 04:53:43', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(13, 10, 37.74072, -122.43462, 'Ullamco non ipsum aliquip tempor aliquip ad sunt fugiat quis veniam est.', '2020-02-14 07:49:36', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(11, 43, 37.72993, -122.493364, 'Ut nostrud excepteur velit do ut reprehenderit ipsum officia.', '2020-07-16 02:06:17', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(10, 8, 37.70114, -122.423337, 'In cupidatat incididunt enim quis fugiat elit nostrud.', '2020-02-02 06:33:47', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(8, 33, 37.76382, -122.399996, 'Ullamco minim pariatur nisi incididunt eiusmod commodo cillum nisi.', '2020-01-03 07:34:38', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(9, 33, 37.75736, -122.443883, 'Aliquip sunt aliqua deserunt consectetur magna nulla eiusmod.', '2020-04-20 08:25:50', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(6, 31, 37.78238, -122.395214, 'Aliquip Lorem anim dolor eu Lorem culpa nisi.', '2020-04-11 04:53:37', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(7, 15, 37.73109, -122.466709, 'Magna culpa eu in incididunt exercitation labore.', '2020-07-21 11:10:50', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(5, 14, 37.767621, -122.588192, 'Et culpa reprehenderit quis nulla exercitation occaecat Lorem aliqua duis pariatur non irure incididunt sit.', '2020-07-12 02:06:05', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(3, 4, 37.77324, -122.389788, 'Adipisicing ex aliqua duis ex velit deserunt.', '2020-03-26 04:24:22', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(4, 13, 37.77102, -122.475307, 'Sit incididunt amet enim consectetur officia labore duis velit Lorem fugiat non mollit deserunt.', '2020-02-15 03:13:25', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(1, 4, 37.73282, -122.425385, 'Ut do aliquip proident laboris.', '2020-05-15 03:05:22', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON'),
(2, 12, 37.78219, -122.415681, 'Ad officia nostrud ut ea qui commodo aute Lorem amet proident cillum cupidatat occaecat.', '2020-01-07 04:02:38', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `track_locations`
--
ALTER TABLE `track_locations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `track_locations`
--
ALTER TABLE `track_locations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=162;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
