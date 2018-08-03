-- phpMyAdmin SQL Dump
-- version 4.0.4.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 03, 2018 at 10:36 AM
-- Server version: 5.6.13
-- PHP Version: 5.4.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `parts`
--
CREATE DATABASE IF NOT EXISTS `parts` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `parts`;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE IF NOT EXISTS `product` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `desc` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `part_no` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `uom` varchar(10) COLLATE utf8_unicode_ci NOT NULL COMMENT 'unit of measure',
  `category` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `brand` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `curr` varchar(5) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'USD' COMMENT 'currency',
  `price` int(15) NOT NULL,
  `Long_desc` varchar(2500) COLLATE utf8_unicode_ci NOT NULL,
  `id_pics` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Flag_del` tinyint(1) NOT NULL DEFAULT '0',
  `posted_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=19 ;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `desc`, `part_no`, `uom`, `category`, `brand`, `curr`, `price`, `Long_desc`, `id_pics`, `Flag_del`, `posted_on`) VALUES
(1, 'Gold Watch, Balenciaga Style', 'OS-2018-01-005', 'Each', 'Casual', 'Balenciaga', 'USD', 86, ' Paste and Edit Here - Coba aja gan', '(icon)search.png', 0, '2018-07-23 10:08:37'),
(2, 'For Deletion', '11098278', 'PU', 'No Category', 'Donald Trump The Duck', 'USD', 111, 'long descriptions lorem ipsum regatta', 'privateaccess.jpg', 1, '2018-07-25 09:18:41'),
(3, 'Negi Bag', '12422', 'EA', 'Bags & Accessories', 'Alpina', 'USD', 211, 'Negi Bag Lorem Ipsum', '(icon)addprodductwhite.png', 1, '2018-07-25 10:26:29'),
(4, 'Nokia X 3000', 'N2330-211', 'SET', 'Handpone & Assy', 'NOKIA', 'USD', 115, ' Handphone, Nokia X 3000, N2330-211', '(logo)PL.jpg', 1, '2018-07-25 10:26:59'),
(5, 'Sony PS 9008', 'SPS-9008-19', 'PACK', 'Game Consoles', 'SONY', 'USD', 375, 'Sony Playstation, PS 9008, SPS-9008-19', 'sony psp-pro.jpeg', 0, '2018-07-25 10:23:21'),
(6, 'Car Land Rover, RC 2001', 'LR-DIECAST-2001', 'PACK', 'Toys', 'MIZUNO', 'USD', 402, 'Land Rover, RC 2001, Diecast, Toys, MIZUNO', 'ferrari.jpg', 1, '2018-07-25 10:27:14'),
(7, 'Valve, Butterfly, 201', 'VB-008-789', 'EA', 'INSTRUMENTS', 'ABB', 'USD', 202, 'Valve, Butterfly, 201, VB-008-789, ABB', 'p.boltnutsetcs.jpg', 1, '2018-07-25 10:27:22'),
(8, 'Hose, Floating, Fuel Transfer', 'PN-001-862-19', 'ROL', 'FUELHOSE', 'CATERPILLAR', 'USD', 175, 'Hose, Floating, Fuel Transfer, PN-001-862-19, 100 M per Roll, CATERPILLAR', 'floating hose.jpg', 0, '2018-07-25 10:04:15'),
(9, 'Brake Pad, Toyota, Fortuner', 'TYT-89-823-ASD', 'SET', 'CARPARTS', 'CHAMPION', 'USD', 300, 'Brake Pad, Toyota, Fortuner, TYT-89-823-ASD, CHAMPION', 'brake pad toyota.jpg', 0, '2018-07-25 10:23:39'),
(10, 'SPARK PLUG, NGK 56', 'NGK-70-001-65', 'EA', 'CARIGNITION', 'NGK', 'USD', 300, 'SPARK PLUG, NGK 56, NGK-70-001-65', 'spark-plug NGK.jpg', 0, '2018-07-25 10:04:52'),
(11, 'KLAAPERTART DONDER', 'KUE-123', 'Dus', 'CONFECTIONARY', 'Homemade', 'USD', 2002, 'KLAAPERTART DONDER, KUE-123, Homemade by Hanna Smith', 'HANNA_S-KLAPPERTAART.jpg', 1, '2018-07-25 10:39:38'),
(12, 'Alienware, 7007', 'DELL-7007-18', 'SET', 'PC & Assy', 'DELL', 'USD', 2500, 'Alienware, DELL-7007-18, Game PC', 'alienware r15.jpg', 0, '2018-07-25 10:05:12'),
(13, 'Razer, Gaming Laptop, 2889', 'RZ-9000-45', 'SET', 'PC & Assy', 'RAZER', 'USD', 2750, 'Razer, Gaming Laptop, 2889, RZ-9000-45, RAZER ', 'razer-blade-15-gaming-laptop.jpg', 0, '2018-07-25 10:05:39'),
(14, 'Hand Bag, LV, Leather 201', 'HB-LV-L201', 'EA', 'Bags & Accessories', 'LUIS-VUITTON', 'USD', 750, 'Hand Bag, Ladies LV, Leather 201, HB-LV-L201, LUIS-VUITTON ', 'Louis-Vuitton-Speedy-Bag.jpg', 0, '2018-07-25 10:06:00'),
(15, 'Iphone X, White, 256GB, 4G LTE', 'IP-X-IVORY-256-L', 'SET', 'Handpone & Assy', 'APPLE', 'USD', 980, 'Iphone X, White, 256GB, 4G LTE, IP-X-IVORY-256-L, APPLE', 'iphone x white.jpg', 0, '2018-07-25 10:24:46'),
(16, 'SPY', '123-ASD', 'BOX', 'TOYS', 'TAMIYA', 'USD', 13, 'Lorem Ipsum', 'spy car tamiya.jpg', 0, '2018-07-25 10:06:38'),
(17, 'Looking Glass Movie Rampage', 'QWERTY-123-ASD', 'SET', 'INSTRUMENTS', 'RODENSTOCK', 'USD', 1200, 'Looking Glass Set \r\nFor Movie Rampage\r\nClass ASTM-33\r\nQWERTY-123-ASD', 'looking-glass-rampage.jpg', 0, '2018-07-25 10:07:09'),
(18, 'Harness, Life Jacket, Marine', '7001-MLH', 'SET', 'PPE', 'Ospina', 'USD', 321, 'Life Jacket Harness\r\nMarine and Seawater Grade\r\n7001', 'life jacket harness.jpg', 0, '2018-07-25 10:07:53');

-- --------------------------------------------------------

--
-- Table structure for table `produk`
--

CREATE TABLE IF NOT EXISTS `produk` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `id_brand` int(10) DEFAULT NULL,
  `size` enum('S','M','L','XL') COLLATE utf8_unicode_ci DEFAULT NULL,
  `category` enum('Pria','Wanita') COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_jenis` int(10) DEFAULT NULL,
  `harga` int(10) DEFAULT NULL,
  `quantity` int(10) DEFAULT NULL,
  `posted_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Flag_del` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `users_data`
--

CREATE TABLE IF NOT EXISTS `users_data` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `nama_lengkap` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `username` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `post_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=8 ;

--
-- Dumping data for table `users_data`
--

INSERT INTO `users_data` (`id`, `nama_lengkap`, `username`, `password`, `address`, `email`, `post_date`) VALUES
(1, 'Djoko Rudijanto', 'Djoko', '688787d8ff144c502c7f5cffaafe2cc588d86079f9de88304c26b0cb99ce91c6', 'Jl. Cipulir Pemai Blok Y/12\r\nJakarta-Selatan', 'dxrudijanto@gmail.com', '2018-07-30 09:57:44'),
(2, 'Rudy Sutama', 'Rudy', 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', 'Jl. Selabintana No. 45\r\nSukabumi Kota\r\nJawa Barat', 'rudy.sutama@gmail.com', '2018-07-30 09:57:44'),
(3, 'Agus Haekal', 'Ekal', 'ee8150964923c0898b312a0a53ee6bae4e7207134cef529cab6a61cbf3096504', 'Jl. Kemang Asri\r\nRumah Mertua Indah', 'ekalmomon@gmail.com', '2018-07-30 09:57:44'),
(4, 'Adeputra Shu', 'Ade', '65e84be33532fb784c48129675f9eff3a682b27168c0ea744b2cf58ee02337c5', 'Jl. Jelambar 201', 'ade@gmail.com', '2018-07-30 10:13:46'),
(5, 'Esa Adama', 'Esa', '4799bad5751a3536e9b6d0cc5490e9a2c61671de29b255d119b4458f872dfa4e', 'Tasikmadu, Tasikmalaya Raya 78\nKab Banjar\nJawa Barat\n334913', 'esa.adama77@gmail.com', '2018-08-02 02:18:08'),
(6, 'Dimas Prasetyo', 'Dimas', 'd3a24f864764f297bc634c997be4c546a0821cd5bb8d42dd8b5b1895c3a175e8', 'Jl. Jakasempurna, Jakasetia Raya no. 98\nKalimalang Bates\nBekasi Barat\nJawa Barat\n203321', 'samid@gmail.com', '2018-08-02 02:14:05'),
(7, 'Mendy Mohede', 'Mendy', '234afbd5f044f3636494f368fb8dc1139c181caad86b15cdbc3cf16550acdcd0', 'Jl. H. Barokah No. 67\nKampung Pladen\nBintaro Selatan, Banten', 'mendymohede@gmail.com', '2018-08-01 02:26:57');

-- --------------------------------------------------------

--
-- Table structure for table `user_login`
--

CREATE TABLE IF NOT EXISTS `user_login` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Admin_User` tinyint(1) NOT NULL DEFAULT '0',
  `Flag_del` tinyint(1) NOT NULL DEFAULT '0',
  `post_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=8 ;

--
-- Dumping data for table `user_login`
--

INSERT INTO `user_login` (`id`, `username`, `email`, `password`, `Admin_User`, `Flag_del`, `post_date`) VALUES
(1, 'Djoko', 'dxrudijanto@gmail.com', '688787d8ff144c502c7f5cffaafe2cc588d86079f9de88304c26b0cb99ce91c6', 0, 0, '2018-07-17 14:10:13'),
(2, 'Rudy', 'rudy.sutama@gmail.com', 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', 1, 0, '2018-07-17 16:47:27'),
(3, 'Ekal', 'ekalmomon@gmail.com', 'ee8150964923c0898b312a0a53ee6bae4e7207134cef529cab6a61cbf3096504', 1, 0, '2018-07-18 02:26:43'),
(4, 'Ade', 'ade@gmail.com', '65e84be33532fb784c48129675f9eff3a682b27168c0ea744b2cf58ee02337c5', 0, 0, '2018-07-30 10:13:46'),
(5, 'Esa', 'esa.adama77@gmail.com', '4799bad5751a3536e9b6d0cc5490e9a2c61671de29b255d119b4458f872dfa4e', 0, 0, '2018-08-02 02:18:08'),
(6, 'Dimas', 'samid@gmail.com', 'd3a24f864764f297bc634c997be4c546a0821cd5bb8d42dd8b5b1895c3a175e8', 0, 0, '2018-08-01 02:17:18'),
(7, 'Mendy', 'mendymohede@gmail.com', '234afbd5f044f3636494f368fb8dc1139c181caad86b15cdbc3cf16550acdcd0', 0, 0, '2018-08-01 02:26:57');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
