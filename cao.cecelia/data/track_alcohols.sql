-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- 主机： localhost:3306
-- 生成日期： 2020-08-14 17:50:12
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
-- 表的结构 `track_alcohols`
--

CREATE TABLE `track_alcohols` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `type` varchar(64) NOT NULL,
  `alcoholpercent` varchar(64) NOT NULL,
  `description` text NOT NULL,
  `date_create` datetime NOT NULL,
  `img` varchar(256) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `track_alcohols`
--

INSERT INTO `track_alcohols` (`id`, `user_id`, `name`, `type`, `alcoholpercent`, `description`, `date_create`, `img`) VALUES
(1, 10, 'Pearlessa', 'wine', '34%', 'Excepteur nostrud sunt in in aliqua non nisi. Labore occaecat id et est veniam esse proident pariatur amet amet nisi. Exercitation eu exercitation veniam reprehenderit sit id adipisicing tempor ea amet occaecat aliqua sint elit.', '2020-01-05 10:49:12', 'uploads/1596611691.2319_IMG_2088.JPG'),
(2, 4, 'Temorak', 'Sake', '41%', 'Ut ad et occaecat voluptate sit esse nulla labore ea veniam exercitation aliqua elit. Lorem in labore incididunt elit dolor magna enim est. Sint voluptate ea consequat deserunt cillum magna irure anim deserunt.', '2018-11-17 09:58:07', 'https://via.placeholder.com/400/839/fff/?text=Temorak'),
(3, 6, 'Locazone', 'Vodka', '16%', 'Eiusmod adipisicing tempor est amet non do duis velit anim aliquip consequat anim in labore. Dolor culpa non est anim sit. Ipsum cupidatat voluptate anim proident laborum deserunt.', '2019-09-14 08:00:21', 'https://via.placeholder.com/400/840/fff/?text=Locazone'),
(4, 9, 'Geekus', 'Sake', '46%', 'Velit incididunt nisi adipisicing Lorem laboris magna commodo minim occaecat cupidatat dolore irure ipsum enim. Laboris duis voluptate amet ut et enim est. Ea voluptate voluptate commodo Lorem nisi nisi ad aliqua nulla eiusmod sint non incididunt.', '2019-06-18 02:57:44', 'https://via.placeholder.com/400/893/fff/?text=Geekus'),
(5, 2, 'Boilicon', 'Taquila', '41%', 'Proident occaecat consectetur ullamco cupidatat dolor esse occaecat aliqua. Sit id quis est quis. Do velit aliqua ad nostrud est.', '2020-03-20 03:49:06', 'https://via.placeholder.com/400/718/fff/?text=Boilicon'),
(6, 4, 'Interodeo', 'Gin', '24%', 'Officia ipsum culpa id elit veniam. Occaecat laboris aute nostrud ad adipisicing ea. Labore quis excepteur adipisicing proident labore.', '2018-01-23 10:42:52', 'https://via.placeholder.com/400/993/fff/?text=Interodeo'),
(7, 10, 'Imant', 'Wine', '31%', 'Enim consequat officia incididunt cupidatat. Veniam consequat ex labore occaecat magna veniam. Ad aliqua labore ipsum ex elit nulla in ad in officia exercitation exercitation.', '2019-09-10 08:41:23', 'https://via.placeholder.com/400/921/fff/?text=Imant'),
(8, 7, 'Oronoko', 'Wine', '47%', 'Est cupidatat quis aute cupidatat laborum non duis exercitation ut elit aliquip pariatur. Est exercitation pariatur pariatur qui ex qui amet mollit deserunt quis nisi. Nostrud incididunt consequat minim et irure nisi incididunt consequat occaecat aliquip id aliqua commodo.', '2018-08-24 10:54:12', 'https://via.placeholder.com/400/794/fff/?text=Oronoko'),
(9, 2, 'Oatfarm', 'wine', '41%', 'Aute et dolor minim nulla aliqua duis. Adipisicing anim dolor Lorem fugiat sit enim exercitation reprehenderit excepteur. Labore consequat eu ad enim ea.', '2019-08-19 07:10:50', 'uploads/1596696333.3824_C6DF0EAD-9BC1-4613-BA33-9A39D674FD0D.jpeg'),
(10, 10, 'Digial', 'Vodka', '48%', 'Minim officia enim veniam qui ex elit. Non ut non incididunt occaecat magna fugiat deserunt do dolor minim aliqua proident anim sint. Consequat mollit et do ipsum tempor ut excepteur.', '2020-05-26 09:33:16', 'https://via.placeholder.com/400/789/fff/?text=Digial'),
(11, 1, 'Ko', 'wine', '39%', 'Tempor aliqua dolore incididunt eu. Incididunt nostrud cillum aute qui. Consectetur enim amet culpa nulla aliqua enim aliquip sit cupidatat sint ex deserunt voluptate ea.', '2018-10-09 09:23:15', 'https://via.placeholder.com/400/735/fff/?text=Kog'),
(12, 1, 'Xanide', 'Wine', '50%', 'Reprehenderit esse qui anim dolor tempor reprehenderit anim. In nisi sit ad non magna ullamco irure enim consectetur ex laboris. Excepteur aute sit sit dolor occaecat occaecat cillum eiusmod eiusmod exercitation mollit.', '2019-08-12 07:21:40', 'https://via.placeholder.com/400/870/fff/?text=Xanide'),
(13, 2, 'Otherside', 'Gin', '4%', 'Culpa enim aliqua non quis ut. Cupidatat anim consequat consectetur voluptate deserunt nisi amet laboris cillum. Esse in adipisicing excepteur mollit incididunt reprehenderit irure esse.', '2019-05-25 11:33:31', 'https://via.placeholder.com/400/956/fff/?text=Otherside'),
(14, 1, 'Aquafire', 'Gin', '41%', 'Tempor cupidatat dolore dolore eu anim et ex ex. Excepteur Lorem consectetur labore ex Lorem aliqua eu laboris cupidatat esse esse id non tempor. Cillum sit excepteur fugiat officia aliqua adipisicing minim ullamco magna cillum.', '2019-06-15 05:44:39', 'https://via.placeholder.com/400/813/fff/?text=Aquafire'),
(15, 4, 'Flumbo', 'Taquila', '27%', 'Exercitation consectetur eu eu ex commodo excepteur sint exercitation dolore do deserunt ad velit pariatur. Irure qui occaecat sint nostrud proident ea non aliquip laboris proident duis amet. Mollit voluptate officia adipisicing esse mollit commodo nisi laboris mollit consequat elit aliqua ullamco enim.', '2020-03-12 10:49:41', 'https://via.placeholder.com/400/819/fff/?text=Flumbo'),
(16, 8, 'Geeky', 'Sake', '21%', 'Ipsum in officia eiusmod enim. Deserunt dolor dolore sint consequat. Cillum est aliqua deserunt id do pariatur veniam aliqua cupidatat culpa qui cupidatat Lorem.', '2019-04-20 08:49:53', 'https://via.placeholder.com/400/937/fff/?text=Geeky'),
(17, 5, 'Avit', 'Beer', '47%', 'Esse sint magna ea Lorem esse elit sint ipsum magna laborum consequat ad nulla. Sit in velit excepteur dolor non mollit commodo Lorem do labore enim. Proident elit est aliquip officia duis deserunt consectetur velit laborum.', '2018-12-18 02:56:17', 'https://via.placeholder.com/400/981/fff/?text=Avit'),
(18, 6, 'Zialactic', 'Beer', '4%', 'Tempor laborum pariatur consequat aute culpa non laborum qui exercitation. Excepteur id reprehenderit ipsum amet duis id ipsum magna ea nostrud. Non occaecat non qui voluptate cupidatat in exercitation enim.', '2020-03-27 02:57:56', 'https://via.placeholder.com/400/873/fff/?text=Zialactic'),
(19, 10, 'Rockyard', 'Wine', '37%', 'Exercitation ut eu tempor tempor eu excepteur in sint ipsum sint fugiat. Esse est enim et eu pariatur do laborum Lorem voluptate nulla in. Nulla aliqua sit fugiat veniam esse.', '2020-02-04 10:03:11', 'https://via.placeholder.com/400/954/fff/?text=Rockyard'),
(20, 8, 'Stralum', 'Wine', '16%', 'Ex anim pariatur labore in ullamco pariatur non. Fugiat consequat duis aliquip do est aliquip officia laborum duis. Labore commodo veniam labore fugiat laborum ex nostrud duis do proident sint dolor elit excepteur.', '2019-07-28 07:51:50', 'https://via.placeholder.com/400/835/fff/?text=Stralum'),
(21, 5, 'Callflex', 'wine', '16%', 'Excepteur eu id proident irure cillum. Sit in eiusmod labore ipsum deserunt nostrud exercitation ea officia consequat. Magna minim dolor culpa velit non ad exercitation elit fugiat mollit et sit.', '2019-06-29 12:27:50', 'uploads/1596932656.9752_IMG_9270.jpg'),
(22, 5, 'Zenthall', 'Sake', '27%', 'Minim eiusmod incididunt excepteur reprehenderit excepteur incididunt sint duis anim labore et excepteur. Quis anim ullamco ullamco minim laborum adipisicing. Fugiat sit laboris laboris excepteur pariatur.', '2020-05-21 06:07:00', 'https://via.placeholder.com/400/784/fff/?text=Zenthall'),
(23, 2, 'Jumpstack', 'Sake', '14%', 'Pariatur culpa Lorem duis fugiat fugiat laboris sint nostrud proident laboris. Culpa nostrud id mollit esse. Sint ea esse anim sint et consectetur enim laboris mollit commodo et eiusmod do.', '2019-04-23 04:29:44', 'https://via.placeholder.com/400/893/fff/?text=Jumpstack'),
(24, 5, 'Sunclipse', 'Taquila', '29%', 'Eiusmod laborum eu Lorem sit eiusmod aliqua id sint eiusmod quis cupidatat excepteur exercitation. Laboris pariatur cupidatat qui labore labore reprehenderit exercitation ex labore. Dolore magna nulla mollit cillum non qui deserunt cupidatat pariatur ad duis cupidatat dolore.', '2018-08-03 06:15:56', 'https://via.placeholder.com/400/751/fff/?text=Sunclipse'),
(25, 10, 'Ezentia', 'Gin', '15%', 'Id do id anim aute ullamco Lorem excepteur ullamco voluptate eiusmod veniam commodo sunt est. Eu elit dolore tempor reprehenderit minim eu pariatur et Lorem consequat minim. Nulla est veniam ea laborum deserunt incididunt cupidatat dolore.', '2019-11-17 06:15:11', 'uploads/1596586624.6325_location_bg.jpg'),
(26, 2, 'Exoswitch', 'Vodka', '41%', 'Cillum et eiusmod fugiat velit eu aliquip cillum qui nulla ut ut commodo. Esse commodo elit deserunt est do nisi anim sit occaecat aliquip non in adipisicing aute. Labore exercitation eu commodo dolore ea ipsum anim.', '2018-12-05 02:46:13', 'https://via.placeholder.com/400/766/fff/?text=Exoswitch'),
(27, 3, 'Bluegrain', 'Sake', '49%', 'Esse id duis aliqua aliqua labore proident occaecat minim dolor laborum dolor minim consectetur anim. Exercitation eu esse qui ex. Elit amet aliqua duis consequat aute tempor tempor esse excepteur.', '2020-02-06 10:30:17', 'https://via.placeholder.com/400/945/fff/?text=Bluegrain'),
(28, 8, 'Keeg', 'Taquila', '31%', 'Do do anim minim deserunt excepteur minim voluptate. Officia officia laboris tempor nisi exercitation nostrud. Non tempor reprehenderit Lorem labore adipisicing labore voluptate officia tempor eiusmod proident irure proident excepteur.', '2018-05-19 08:55:18', 'https://via.placeholder.com/400/999/fff/?text=Keeg'),
(29, 4, 'Pharmacon', 'Wine', '24%', 'Excepteur excepteur et cupidatat enim nostrud anim et nostrud et nisi. Ex laborum minim minim mollit elit sit adipisicing nulla voluptate quis minim excepteur ea quis. Id veniam minim qui nulla non enim.', '2018-11-24 08:39:04', 'https://via.placeholder.com/400/718/fff/?text=Pharmacon'),
(30, 2, 'Zenolux', 'Brandy', '18%', 'Laborum tempor deserunt id esse id occaecat officia labore pariatur ex excepteur cupidatat. Et ipsum aliquip commodo eiusmod qui. Elit mollit anim exercitation adipisicing enim non tempor veniam officia cupidatat tempor ullamco velit.', '2018-01-01 11:16:15', 'https://via.placeholder.com/400/942/fff/?text=Zenolux'),
(31, 10, 'Techtrix', 'Taquila', '26%', 'Dolore sint exercitation dolore amet ut ipsum adipisicing nisi sit. Non laboris dolore cillum laborum fugiat do veniam ullamco sit eu eiusmod irure labore est. Minim reprehenderit velit adipisicing elit do anim labore exercitation aute commodo consectetur proident.', '2018-04-04 11:15:45', 'https://via.placeholder.com/400/900/fff/?text=Techtrix'),
(32, 3, 'Frenex', 'Gin', '45%', 'Enim qui pariatur sit laborum aliqua magna duis minim veniam sint culpa sit cupidatat tempor. Proident anim excepteur labore tempor velit aute fugiat fugiat qui. Culpa labore ex nisi ad laborum cupidatat quis laborum.', '2018-09-22 02:51:47', 'https://via.placeholder.com/400/808/fff/?text=Frenex'),
(33, 8, 'Zizzle', 'Vodka', '36%', 'Adipisicing commodo ipsum officia nulla in duis mollit ut id in. Laboris minim minim ullamco incididunt dolor adipisicing. Ipsum ad deserunt cillum excepteur cillum deserunt veniam duis ut ullamco.', '2018-01-25 07:08:30', 'https://via.placeholder.com/400/893/fff/?text=Zizzle'),
(78, 1, 'Cyder', 'wine', '6%', 'This is my favorite taste.', '2020-08-09 23:24:27', 'uploads/1597040637.0649_0165E05B-4249-430B-AC4F-288CA409A068.jpeg'),
(79, 1, 'What a good beer', 'beer', '9%', 'Good', '2020-08-09 23:25:58', 'uploads/1597040740.3908_2001EC34-CAF0-4799-8864-F91A4AA6BBD7.jpeg'),
(87, 24, '5556', 'gin', '444', '22', '2020-08-11 21:42:40', 'uploads/1597207358.7626_timg (1).jpg'),
(35, 2, 'Essensia', 'Taquila', '10%', 'Amet in qui deserunt ad tempor ad laborum voluptate veniam. Enim ea dolore eu elit sunt non. Ea adipisicing qui eiusmod non occaecat esse laborum sint.', '2018-07-06 08:57:54', 'https://via.placeholder.com/400/873/fff/?text=Essensia'),
(36, 6, 'Futurity', 'Vodka', '22%', 'Culpa mollit pariatur commodo esse commodo elit do. Lorem ullamco esse adipisicing et non tempor eu nulla do deserunt labore irure sint. Do fugiat et proident aute aute sint esse cupidatat ad.', '2019-11-06 03:07:57', 'https://via.placeholder.com/400/833/fff/?text=Futurity'),
(37, 10, 'Fuelworks', 'Brandy', '38%', 'Fugiat aute ex laborum elit labore minim deserunt dolore in id. Sit sit ex ad veniam do aliquip cillum. Cillum Lorem laborum in excepteur consequat laboris magna eiusmod eiusmod dolor ut.', '2019-11-30 12:37:26', 'https://via.placeholder.com/400/819/fff/?text=Fuelworks'),
(38, 2, 'Nipaz', 'Taquila', '45%', 'Occaecat laborum proident cillum ipsum eiusmod elit in laboris anim magna excepteur. Eiusmod qui minim dolor do. Dolor commodo excepteur voluptate adipisicing.', '2020-05-19 02:03:39', 'https://via.placeholder.com/400/900/fff/?text=Nipaz'),
(39, 7, 'Xiix', 'Beer', '21%', 'Occaecat cillum Lorem incididunt aliquip adipisicing. Deserunt exercitation adipisicing nostrud minim tempor sit. Cupidatat deserunt aliquip ea quis sunt.', '2018-05-12 09:00:34', 'https://via.placeholder.com/400/826/fff/?text=Xiix'),
(40, 5, 'Portica', 'Sake', '14%', 'Amet nulla aliqua commodo eiusmod cillum eu aliquip excepteur ullamco culpa. Esse id eu est magna ad enim. Laboris pariatur officia enim minim.', '2019-01-16 08:19:49', 'https://via.placeholder.com/400/944/fff/?text=Portica'),
(41, 9, 'Bovis', 'Beer', '27%', 'Lorem quis id ipsum deserunt quis cillum adipisicing reprehenderit labore. Cillum do reprehenderit commodo ullamco ipsum id proident. Fugiat est occaecat pariatur enim consequat excepteur veniam sit.', '2019-08-18 02:29:35', 'https://via.placeholder.com/400/837/fff/?text=Bovis'),
(42, 7, 'Cognicode', 'Beer', '8%', 'Deserunt reprehenderit in eu aute consequat culpa aliqua qui reprehenderit dolore excepteur. Aute velit culpa esse sunt cillum quis anim minim laborum quis nisi magna esse labore. Pariatur officia do ad sit eiusmod.', '2018-07-24 05:22:09', 'https://via.placeholder.com/400/775/fff/?text=Cognicode'),
(43, 2, 'Terragen', 'Brandy', '12%', 'Enim et dolor duis mollit est ipsum in ad. Sit ad sunt aliqua aute ut labore labore nostrud ut eiusmod est. Consectetur amet proident magna sit do elit qui excepteur non ut officia sint sint officia.', '2019-10-06 10:54:23', 'https://via.placeholder.com/400/801/fff/?text=Terragen'),
(44, 1, 'Cosmetex', 'Beer', '35%', 'Eiusmod officia qui commodo eu enim sunt anim. Ut laboris sit aliqua tempor cillum. Culpa excepteur eu quis sunt ea anim voluptate ullamco qui deserunt aliquip non quis.', '2019-10-19 03:46:04', 'https://via.placeholder.com/400/851/fff/?text=Cosmetex'),
(45, 6, 'Terascape', 'Gin', '30%', 'Incididunt magna quis officia non culpa. Nisi laborum magna nulla id ut occaecat minim duis magna sit magna veniam quis. Pariatur est id adipisicing minim.', '2018-12-17 08:01:44', 'https://via.placeholder.com/400/756/fff/?text=Terascape'),
(46, 8, 'Koogle', 'Gin', '39%', 'Et aliquip ullamco duis adipisicing. Commodo nulla velit nulla dolore commodo voluptate in et ex proident. Nulla dolor officia commodo elit qui occaecat et.', '2019-02-07 05:52:34', 'https://via.placeholder.com/400/896/fff/?text=Koogle'),
(47, 10, 'Musix', 'Beer', '11%', 'Culpa tempor eu incididunt eiusmod sunt ullamco id cupidatat ad veniam pariatur do dolor. Nostrud laborum ullamco elit Lorem aliqua veniam id officia et consectetur Lorem sit id cillum. Labore commodo sit officia pariatur laboris enim eiusmod magna reprehenderit anim ipsum excepteur sunt.', '2018-12-09 04:18:33', 'https://via.placeholder.com/400/889/fff/?text=Musix'),
(48, 6, 'Apextri', 'Sake', '8%', 'Cillum adipisicing occaecat do officia deserunt. Aliquip duis adipisicing cillum occaecat minim esse reprehenderit ut duis adipisicing sit et. Consectetur esse magna veniam aute nisi.', '2018-08-05 10:20:05', 'https://via.placeholder.com/400/970/fff/?text=Apextri'),
(49, 7, 'Digifad', 'Sake', '16%', 'Aliquip fugiat pariatur eiusmod elit ut nulla qui ex cupidatat excepteur non eu. Occaecat cupidatat eiusmod adipisicing dolore consectetur mollit nostrud sit amet exercitation aliqua magna anim. Eiusmod esse mollit excepteur laborum est.', '2020-01-06 02:26:28', 'https://via.placeholder.com/400/700/fff/?text=Digifad'),
(50, 2, 'Splinx', 'Gin', '11%', 'Laboris elit proident do nostrud. Enim laborum aliquip laborum pariatur laboris elit culpa nisi culpa. Non minim exercitation laborum consectetur cillum aute do esse.', '2019-09-30 04:00:57', 'https://via.placeholder.com/400/844/fff/?text=Splinx'),
(63, 4, 'New Beer', 'wine', '31%', 'good', '2020-08-07 01:02:29', 'uploads/1596787336.1814_IMG_2088.JPG'),
(60, 1, 'Sunset', 'wine', '31%', 'good', '2020-08-06 12:42:27', 'uploads/1596742979.8119__.jpeg'),
(85, 19, '', 'wine', '', '', '2020-08-10 12:11:03', 'https://via.placeholder.com/400/?text=ALCOHOL'),
(62, 4, 'New Beer', 'vodka', '9%', 'good', '2020-08-07 00:57:48', 'https://via.placeholder.com/400/?text=ALCOHOL'),
(64, 18, 'vodka', 'vodka', '10%', 'vodka', '2020-08-07 09:46:57', 'uploads/1596818806.8209_151711-apps-feature-high-res-zoom-backgrounds-image1-2roevx6rwv.jpg'),
(68, 1, 'New Beer', 'beer', '9%', 'good', '2020-08-08 23:08:02', 'uploads/1596953278.4584_IMG_9262.jpg'),
(69, 19, 'Tequila Margarita', 'tequila', '12.5%', 'I love margaritas on the rocks, I love them frozen.  I love margaritas made with tequila, I love them with mezcal and sotol.  I love margaritas rimed with straight lime juice, I love them muddled with fruit or fresh mint or a nice kick of some jalapeño.', '2020-08-09 18:24:10', 'uploads/1597022565.7358_62A21299-7B9E-4FFF-B027-D24C159A2012.jpeg'),
(73, 19, 'Asahi', 'beer', '8%', 'Has a lovely beery smell, very, very sweet and some lemon and grass found. The lager yeast, and the rice coming to the fore. I liked the smell, faint aroma but not bad…..', '2020-08-09 22:28:15', 'uploads/1597037160.641_C92B2EA6-13D0-4030-BEFC-6365EEAC7B17.jpeg'),
(70, 19, 'Carpene Malvolti', 'wine', '12%', 'Very nice drinking rose. Clean and fine drinking bubbles. Notes of strawberry and cranberry. Excellent choice for a toast at a celebration, or with some cranberry or orange juice for breakfast. Worth the price.', '2020-08-09 18:29:20', 'uploads/1597022837.3569_13095468-3F24-4249-AD2F-C94BE65FA856.jpeg'),
(74, 19, 'Aspall', 'vodka', '32%', 'It starts dry and very watery with low acidity and an overwhelming and lingering matches-like sulphur flavour. On the mid-palate overripe apples and a gentle smoky flavour with a touch of bitterness.', '2020-08-09 22:31:23', 'uploads/1597037394.7653_78191AF7-47EE-425C-85AD-CF50604274CA.jpeg'),
(76, 1, 'New Beer', 'wine', '31%', 'good', '2020-08-09 23:00:02', 'uploads/1597039201.745_IMG_2088.JPG'),
(86, 23, 'Sunset', 'beer', '31%', 'Good', '2020-08-10 12:13:30', 'uploads/1597086802.3502_IMG_9262.jpg'),
(82, 1, '1', 'wine', '', '', '2020-08-09 23:49:51', 'https://via.placeholder.com/400/?text=ALCOHOL'),
(83, 21, '1', 'wine', '', '', '2020-08-09 23:55:23', 'https://via.placeholder.com/400/?text=ALCOHOL'),
(84, 22, 'bn', 'wine', '', '', '2020-08-10 03:16:25', 'uploads/1597054581.9693_USB micro.jpg'),
(88, 19, '', 'wine', '', '', '2020-08-12 06:43:57', 'https://via.placeholder.com/400/?text=ALCOHOL'),
(89, 19, '', 'wine', '', '', '2020-08-12 06:44:45', 'https://via.placeholder.com/400/?text=ALCOHOL'),
(90, 19, '', 'wine', '', '', '2020-08-12 06:44:46', 'https://via.placeholder.com/400/?text=ALCOHOL');

--
-- 转储表的索引
--

--
-- 表的索引 `track_alcohols`
--
ALTER TABLE `track_alcohols`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `track_alcohols`
--
ALTER TABLE `track_alcohols`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
