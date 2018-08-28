-- phpMyAdmin SQL Dump
-- version 4.0.4.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 28, 2018 at 03:09 PM
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
-- Table structure for table `cart`
--

CREATE TABLE IF NOT EXISTS `cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  `quantity` int(10) NOT NULL,
  `total_price` int(15) NOT NULL,
  `item_created_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `item_stat_code` int(10) DEFAULT '1',
  `order_no` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL,
  `order_date` datetime NOT NULL,
  `posted_on` datetime NOT NULL,
  `bill_to` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `complete_name` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tel_no` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pay_method` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `inv_no` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `inv_date` datetime NOT NULL,
  `payment_date` datetime DEFAULT NULL,
  `ship_date` datetime DEFAULT NULL,
  `receipt_date` datetime DEFAULT NULL,
  `last_changed_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=26 ;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `product_id`, `user_id`, `quantity`, `total_price`, `item_created_on`, `item_stat_code`, `order_no`, `order_date`, `posted_on`, `bill_to`, `name`, `complete_name`, `tel_no`, `address`, `email`, `pay_method`, `inv_no`, `inv_date`, `payment_date`, `ship_date`, `receipt_date`, `last_changed_on`) VALUES
(1, 10, 5, 1, 300, '2018-08-26 10:43:32', 0, '', '2018-08-26 10:25:57', '2018-08-23 15:03:35', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '2018-08-26 10:34:04', NULL, NULL, NULL, '2018-08-26 03:23:12'),
(2, 12, 5, 1, 2500, '2018-08-26 10:43:32', 3, '00001', '2018-08-26 10:25:57', '2018-08-23 15:20:00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '2018-08-27 16:42:16', NULL, NULL, NULL, '2018-08-27 09:42:16'),
(3, 14, 5, 1, 750, '2018-08-26 10:43:32', 0, '', '2018-08-26 10:25:57', '2018-08-23 15:20:31', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '2018-08-26 10:34:04', NULL, NULL, NULL, '2018-08-26 03:23:12'),
(4, 13, 5, 1, 2750, '2018-08-26 10:43:32', 3, '00001', '2018-08-26 10:25:57', '2018-08-23 15:21:45', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '2018-08-27 16:42:16', NULL, NULL, NULL, '2018-08-27 09:42:16'),
(5, 15, 5, 1, 980, '2018-08-26 10:43:32', 0, '', '2018-08-26 10:25:57', '2018-08-24 15:53:12', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '2018-08-26 10:34:04', NULL, NULL, NULL, '2018-08-26 03:23:12'),
(6, 5, 9, 1, 375, '2018-08-28 09:27:47', 3, '00002', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '2018-08-28 10:12:26', NULL, NULL, NULL, '2018-08-28 03:12:26'),
(7, 8, 9, 1, 175, '2018-08-28 09:28:11', 3, '00002', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '2018-08-28 10:12:26', NULL, NULL, NULL, '2018-08-28 03:12:26'),
(8, 15, 9, 1, 980, '2018-08-28 09:28:20', 3, '00002', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '2018-08-28 10:12:26', NULL, NULL, NULL, '2018-08-28 03:12:26'),
(9, 18, 9, 1, 321, '2018-08-28 09:28:33', 3, '00002', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '2018-08-28 10:12:26', NULL, NULL, NULL, '2018-08-28 03:12:26'),
(10, 1, 10, 1, 86, '2018-08-28 10:26:47', 3, '00003', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '2018-08-28 10:45:09', NULL, NULL, NULL, '2018-08-28 03:45:09'),
(11, 10, 10, 1, 300, '2018-08-28 10:26:58', 3, '00003', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '2018-08-28 10:45:09', NULL, NULL, NULL, '2018-08-28 03:45:09'),
(12, 14, 10, 1, 750, '2018-08-28 10:27:11', 3, '00003', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '2018-08-28 10:45:09', NULL, NULL, NULL, '2018-08-28 03:45:09'),
(13, 17, 10, 1, 1200, '2018-08-28 10:27:21', 3, '00003', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '2018-08-28 10:45:09', NULL, NULL, NULL, '2018-08-28 03:45:09'),
(14, 16, 10, 1, 13, '2018-08-28 10:27:32', 3, '00003', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '2018-08-28 10:45:09', NULL, NULL, NULL, '2018-08-28 03:45:09'),
(15, 1, 10, 1, 86, '2018-08-28 10:27:42', 3, '00003', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '2018-08-28 10:45:09', NULL, NULL, NULL, '2018-08-28 03:45:09'),
(16, 12, 10, 1, 2500, '2018-08-28 11:01:36', 3, '00004', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '2018-08-28 11:02:16', NULL, NULL, NULL, '2018-08-28 04:02:16'),
(17, 15, 10, 1, 980, '2018-08-28 11:01:46', 3, '00004', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '2018-08-28 11:02:16', NULL, NULL, NULL, '2018-08-28 04:02:16'),
(18, 5, 10, 1, 375, '2018-08-28 11:03:59', 3, '00005', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '2018-08-28 11:04:34', NULL, NULL, NULL, '2018-08-28 04:04:34'),
(19, 1, 11, 1, 900, '2018-08-28 13:39:27', 3, '00006', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '2018-08-28 13:44:15', NULL, NULL, NULL, '2018-08-28 06:44:15'),
(20, 12, 11, 1, 2500, '2018-08-28 13:40:35', 3, '00006', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '2018-08-28 13:44:15', NULL, NULL, NULL, '2018-08-28 06:44:15'),
(21, 15, 11, 1, 980, '2018-08-28 13:40:43', 3, '00006', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '2018-08-28 13:44:15', NULL, NULL, NULL, '2018-08-28 06:44:15'),
(22, 14, 11, 1, 750, '2018-08-28 13:40:56', 3, '00006', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '2018-08-28 13:44:15', NULL, NULL, NULL, '2018-08-28 06:44:15'),
(23, 8, 10, 1, 175, '2018-08-28 18:13:28', 3, '00007', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '2018-08-28 18:15:37', NULL, NULL, NULL, '2018-08-28 11:15:37'),
(24, 10, 10, 1, 300, '2018-08-28 18:13:35', 3, '00007', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '2018-08-28 18:15:37', NULL, NULL, NULL, '2018-08-28 11:15:37'),
(25, 9, 10, 1, 300, '2018-08-28 18:13:56', 3, '00007', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '2018-08-28 18:15:37', NULL, NULL, NULL, '2018-08-28 11:15:37');

-- --------------------------------------------------------

--
-- Table structure for table `cart_item_stat`
--

CREATE TABLE IF NOT EXISTS `cart_item_stat` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `code` int(10) NOT NULL,
  `code_desc` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Cara spy data tidak berubah',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=8 ;

--
-- Dumping data for table `cart_item_stat`
--

INSERT INTO `cart_item_stat` (`id`, `code`, `code_desc`, `created_on`) VALUES
(1, 0, 'item is deleted/canceled', '2018-08-26 09:47:27'),
(2, 1, 'item is created', '2018-08-26 09:47:27'),
(3, 2, 'item is ordered', '2018-08-26 09:54:10'),
(4, 3, 'item is invoiced', '2018-08-26 09:54:10'),
(5, 4, 'item is paid', '2018-08-26 09:54:10'),
(6, 5, 'item is shipped', '2018-08-26 09:54:10'),
(7, 6, 'item is received', '2018-08-26 09:54:10');

-- --------------------------------------------------------

--
-- Table structure for table `inv_header`
--

CREATE TABLE IF NOT EXISTS `inv_header` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user_id` int(40) NOT NULL,
  `inv_no` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `sub_total` int(40) NOT NULL,
  `ship_cost` int(10) NOT NULL,
  `tax` int(15) NOT NULL,
  `grand_total` int(15) NOT NULL,
  `bill_to` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `pay_method` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `inv_stat_id` int(5) DEFAULT '1',
  `ship_to_Name` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `ship_to_Fname` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `ship_to_Telno` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `ship_to_Email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `ship_to_Address` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `order_date` datetime NOT NULL,
  `confirm_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `posted_date` datetime DEFAULT NULL,
  `paid_date` datetime DEFAULT NULL,
  `shipped_date` datetime DEFAULT NULL,
  `received_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=9 ;

--
-- Dumping data for table `inv_header`
--

INSERT INTO `inv_header` (`id`, `user_id`, `inv_no`, `sub_total`, `ship_cost`, `tax`, `grand_total`, `bill_to`, `pay_method`, `inv_stat_id`, `ship_to_Name`, `ship_to_Fname`, `ship_to_Telno`, `ship_to_Email`, `ship_to_Address`, `order_date`, `confirm_date`, `posted_date`, `paid_date`, `shipped_date`, `received_date`) VALUES
(2, 5, '00001', 5250, 53, 525, 5828, 'Esa Adama. Tasikmadu, Tasikmalaya Raya 78\nKab Banjar\nJawa Barat\n334913', 'bank_transfer', 2, 'Okky', 'Okky Satria', '62-21-7778-0091', 'okky.satria@gmail.com', 'Jakarta 12091', '2018-08-26 06:28:18', '2018-08-26 22:56:37', '2018-08-27 16:42:16', NULL, NULL, NULL),
(3, 9, '00002', 1851, 19, 185, 2055, 'Asril Pradana. Jl. Bekasi Barat Raya no. 908\nPekayon Barat\nBekasi 90223', 'bank-transfer', 2, 'Gilang', 'Gilang NegiBags', '021-6720-9012', 'negibags@gmail.com', 'Jl. Cilandak Raya 23\nTanjung Barat\nJakarta Selatan\nJakarta 20289', '2018-08-28 02:47:11', '2018-08-28 10:01:58', '2018-08-28 10:12:26', NULL, NULL, NULL),
(4, 10, '00003', 2435, 24, 244, 2703, 'Okky Satria. Jl. Satria Mandala No. 34\nPekayon Barat\nBekasi 899021', 'bank-transfer', 2, 'Budi', 'Budi L Satria', '021-7890-1111', 'budisatria@gmail.com', 'Jl. Satria Mandala No. 101\nPekayon Barat\nBekasi 899021', '2018-08-28 03:43:09', '2018-08-28 10:44:58', '2018-08-28 10:45:09', NULL, NULL, NULL),
(5, 10, '00004', 3480, 35, 348, 3863, 'Okky Satria. Jl. Satria Mandala No. 34\nPekayon Barat\nBekasi 899021', 'bank-transfer', 2, 'Okky', 'Okky Satria', '021-5622-7645', 'okky.satria@gmail.com', 'Jl. Satria Mandala No. 34\nPekayon Barat\nBekasi 899021', '2018-08-28 04:01:54', '2018-08-28 11:02:09', '2018-08-28 11:02:16', NULL, NULL, NULL),
(6, 10, '00005', 375, 4, 38, 416, 'Okky Satria. Jl. Satria Mandala No. 34\nPekayon Barat\nBekasi 899021', 'bank-transfer', 2, 'Okky', 'Okky Satria', '021-5622-7645', 'okky.satria@gmail.com', 'Jl. Satria Mandala No. 34\nPekayon Barat\nBekasi 899021', '2018-08-28 04:04:04', '2018-08-28 11:04:14', '2018-08-28 11:04:34', NULL, NULL, NULL),
(7, 11, '00006', 5130, 51, 513, 5694, 'Heri Sucipto. Jl. Jelambar 24\nJakarta Barat\nJKT 130023', 'bank-transfer', 2, 'Adi', 'Adi Sucipto', '021-5567-0000', 'adi.sucipto@gmail.com', 'Jl. Surya Kencana\nBogor\nBogor 6712', '2018-08-28 06:41:01', '2018-08-28 13:43:38', '2018-08-28 13:44:15', NULL, NULL, NULL),
(8, 10, '00007', 775, 8, 78, 860, 'Okky Satria. Jl. Satria Mandala No. 34\nPekayon Barat\nBekasi 899021', 'bank-transfer', 2, 'Dimas', 'Dimas Septyanto', '021-8901-8945', 'samid77@gmail.com', 'Jl. Keran Bocor 256\nBekasi Barat\nJawa Barat 899021', '2018-08-28 11:14:03', '2018-08-28 18:15:24', '2018-08-28 18:15:37', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `inv_item`
--

CREATE TABLE IF NOT EXISTS `inv_item` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `inv_id` int(10) NOT NULL,
  `part_no` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `price` int(15) NOT NULL,
  `qty` int(10) NOT NULL,
  `subtotal` int(15) NOT NULL,
  `inv_no` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `inv_stat`
--

CREATE TABLE IF NOT EXISTS `inv_stat` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `stat_desc` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=6 ;

--
-- Dumping data for table `inv_stat`
--

INSERT INTO `inv_stat` (`id`, `stat_desc`) VALUES
(1, 'draft'),
(2, 'posted'),
(3, 'paid'),
(4, 'shipped'),
(5, 'received');

-- --------------------------------------------------------

--
-- Table structure for table `order_header`
--

CREATE TABLE IF NOT EXISTS `order_header` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user_id` int(10) NOT NULL,
  `order_no` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `bill_to` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `complete_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `tel_no` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `hp_no` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `pay_method` varchar(50) COLLATE utf8_unicode_ci DEFAULT 'bank-transfer',
  `order_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `cart_total` int(10) DEFAULT NULL,
  `cart_totalVAT` int(10) DEFAULT NULL,
  `cart_totalSHIP` int(10) DEFAULT NULL,
  `cart_grandtotal` int(15) DEFAULT NULL,
  `order_status` int(5) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=9 ;

--
-- Dumping data for table `order_header`
--

INSERT INTO `order_header` (`id`, `user_id`, `order_no`, `bill_to`, `name`, `complete_name`, `tel_no`, `hp_no`, `address`, `email`, `pay_method`, `order_date`, `cart_total`, `cart_totalVAT`, `cart_totalSHIP`, `cart_grandtotal`, `order_status`) VALUES
(2, 5, '00001', 'Esa Adama. Tasikmadu, Tasikmalaya Raya 78\nKab Banjar\nJawa Barat\n334913', 'Okky', 'Okky Satria', '62-21-7778-0091', '62-8592-000-1209', 'Jakarta 12091', 'okky.satria@gmail.com', 'bank_transfer', '2018-08-26 13:28:18', 5250, 525, 53, 5828, 1),
(3, 9, '00002', 'Asril Pradana. Jl. Bekasi Barat Raya no. 908\nPekayon Barat\nBekasi 90223', 'Gilang', 'Gilang NegiBags', '021-6720-9012', '0877-9001-3670', 'Jl. Cilandak Raya 23\nTanjung Barat\nJakarta Selatan\nJakarta 20289', 'negibags@gmail.com', 'bank-transfer', '2018-08-28 09:47:11', 1851, 185, 19, 2055, 1),
(4, 10, '00003', 'Okky Satria. Jl. Satria Mandala No. 34\nPekayon Barat\nBekasi 899021', 'Budi', 'Budi L Satria', '021-7890-1111', '0859-4509-2222', 'Jl. Satria Mandala No. 101\nPekayon Barat\nBekasi 899021', 'budisatria@gmail.com', 'bank-transfer', '2018-08-28 10:43:09', 2435, 244, 24, 2703, 1),
(5, 10, '00004', 'Okky Satria. Jl. Satria Mandala No. 34\nPekayon Barat\nBekasi 899021', 'Okky', 'Okky Satria', '021-5622-7645', '0859-4509-2222', 'Jl. Satria Mandala No. 34\nPekayon Barat\nBekasi 899021', 'okky.satria@gmail.com', 'bank-transfer', '2018-08-28 11:01:54', 3480, 348, 35, 3863, 1),
(6, 10, '00005', 'Okky Satria. Jl. Satria Mandala No. 34\nPekayon Barat\nBekasi 899021', 'Okky', 'Okky Satria', '021-5622-7645', '0859-4509-2222', 'Jl. Satria Mandala No. 34\nPekayon Barat\nBekasi 899021', 'okky.satria@gmail.com', 'bank-transfer', '2018-08-28 11:04:04', 375, 38, 4, 416, 1),
(7, 11, '00006', 'Heri Sucipto. Jl. Jelambar 24\nJakarta Barat\nJKT 130023', 'Adi', 'Adi Sucipto', '021-5567-0000', '0857-9000-7210', 'Jl. Surya Kencana\nBogor\nBogor 6712', 'adi.sucipto@gmail.com', 'bank-transfer', '2018-08-28 13:41:01', 5130, 513, 51, 5694, 1),
(8, 10, '00007', 'Okky Satria. Jl. Satria Mandala No. 34\nPekayon Barat\nBekasi 899021', 'Dimas', 'Dimas Septyanto', '021-8901-8945', '0859-4509-2222', 'Jl. Keran Bocor 256\nBekasi Barat\nJawa Barat 899021', 'samid77@gmail.com', 'bank-transfer', '2018-08-28 18:14:03', 775, 78, 8, 860, 1);

-- --------------------------------------------------------

--
-- Table structure for table `order_item`
--

CREATE TABLE IF NOT EXISTS `order_item` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user_id` int(10) NOT NULL,
  `order_no` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `bill_to` varchar(25) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `complete_name` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tel_no` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pay_method` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `order_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `part_no` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `price` int(15) NOT NULL,
  `qty` int(10) NOT NULL,
  `item_total` int(15) NOT NULL,
  `it_ord_status` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=85 ;

--
-- Dumping data for table `order_item`
--

INSERT INTO `order_item` (`id`, `user_id`, `order_no`, `bill_to`, `name`, `complete_name`, `tel_no`, `address`, `email`, `pay_method`, `order_date`, `part_no`, `price`, `qty`, `item_total`, `it_ord_status`) VALUES
(80, 5, '00001', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2018-08-24 17:48:15', 'NGK-70-001-65', 300, 1, 300, 0),
(81, 5, '00001', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2018-08-24 17:48:15', 'DELL-7007-18', 2500, 1, 2500, 0),
(82, 5, '00001', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2018-08-24 17:48:15', 'HB-LV-L201', 750, 1, 750, 0),
(83, 5, '00001', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2018-08-24 17:48:15', 'RZ-9000-45', 2750, 1, 2750, 0),
(84, 5, '00001', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2018-08-24 17:48:15', 'IP-X-IVORY-256-L', 980, 1, 980, 0);

-- --------------------------------------------------------

--
-- Table structure for table `order_stat`
--

CREATE TABLE IF NOT EXISTS `order_stat` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `stat_desc` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=2 ;

--
-- Dumping data for table `order_stat`
--

INSERT INTO `order_stat` (`id`, `stat_desc`) VALUES
(0, 'Draft'),
(1, 'Confirmed');

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=20 ;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `desc`, `part_no`, `uom`, `category`, `brand`, `curr`, `price`, `Long_desc`, `id_pics`, `Flag_del`, `posted_on`) VALUES
(1, 'Gold Watch, Balenciaga Style', 'OS-2018-01-005', 'Each', 'Casual', 'Balenciaga', 'USD', 900, 'Balenciaga Watch, Gold Plated 24 Ct. Model: Grand Touring Cresto, Made in Italy', 'balen_gold_watch.jpg', 0, '2018-08-28 06:27:04'),
(2, 'For Deletion', '11098278', 'PU', 'No Category', 'Donald Trump The Duck', 'USD', 111, 'long descriptions lorem ipsum regatta', 'privateaccess.jpg', 1, '2018-07-25 09:18:41'),
(3, 'Negi Bag', '12422', 'EA', 'Bags & Accessories', 'Alpina', 'USD', 211, 'Negi Bag Lorem Ipsum', '(icon)addprodductwhite.png', 1, '2018-07-25 10:26:29'),
(4, 'Nokia X 3000', 'N2330-211', 'SET', 'Handpone & Assy', 'NOKIA', 'USD', 115, ' Handphone, Nokia X 3000, N2330-211', '(logo)PL.jpg', 1, '2018-08-28 06:26:15'),
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
(18, 'Harness, Life Jacket, Marine', '7001-MLH', 'SET', 'PPE', 'Ospina', 'USD', 321, 'Life Jacket Harness\r\nMarine and Seawater Grade\r\n7001', 'life jacket harness.jpg', 0, '2018-07-25 10:07:53'),
(19, 'Tas', '23-552-21', 'EA', 'Bags', 'LV', 'USD', 60, 'Tas Handbag', '1000-sony-ps4-pro.jpeg', 0, '2018-08-28 06:29:16');

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
  `salutation` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nama_lengkap` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `hobby` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `bday` date DEFAULT '1970-01-01',
  `city` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `username` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tel_no` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `hp_no` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `visa` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `post_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=12 ;

--
-- Dumping data for table `users_data`
--

INSERT INTO `users_data` (`id`, `salutation`, `nama_lengkap`, `hobby`, `bday`, `city`, `username`, `password`, `address`, `email`, `tel_no`, `hp_no`, `visa`, `post_date`) VALUES
(1, NULL, 'Djoko Rudijanto', NULL, '1977-02-14', NULL, 'Djoko', '688787d8ff144c502c7f5cffaafe2cc588d86079f9de88304c26b0cb99ce91c6', 'Jl. Cipulir Pemai Blok Y/12\r\nJakarta-Selatan', 'dxrudijanto@gmail.com', '62-21-739-5896', '62-8588-066-1971', NULL, '2018-08-28 06:00:49'),
(2, NULL, 'Rudy Sutama', NULL, '1977-02-14', NULL, 'Rudy', 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', 'Jl. Selabintana No. 45\r\nSukabumi Kota\r\nJawa Barat', 'rudy.sutama@gmail.com', '62-21-866-12322', '62-812-858-00822', NULL, '2018-08-28 06:01:01'),
(3, NULL, 'Agus Haekal', NULL, '1977-02-14', NULL, 'Ekal', 'ee8150964923c0898b312a0a53ee6bae4e7207134cef529cab6a61cbf3096504', 'Jl. Kemang Asri\nRumah Mertua Indah\nJakarta 55421', 'ekalmomon@gmail.com', '62-21-701-8900', '62-857-4660-001', NULL, '2018-08-28 06:30:55'),
(4, NULL, 'Adeputra Shu', NULL, '1977-02-14', NULL, 'Ade', '65e84be33532fb784c48129675f9eff3a682b27168c0ea744b2cf58ee02337c5', 'Jl. Jelambar 201', 'ade@gmail.com', '62-2500-1000', '62-855-0089-0091', NULL, '2018-08-28 06:01:19'),
(5, 'Mr.', 'Esa Adama', 'Basket Ball, Running', '1977-02-14', 'Tasikmalaya', 'Esa', '4799bad5751a3536e9b6d0cc5490e9a2c61671de29b255d119b4458f872dfa4e', 'Tasikmadu, Tasikmalaya Raya 78\nKab Banjar\nJawa Barat\n334913\nCimahi Permai', 'esa.adama77@gmail.com', '62-21-8009-1234', '62-8592-000-1209', '4555-2789-3198-2001', '2018-08-27 13:40:55'),
(6, NULL, 'Dimas Prasetyo', NULL, '1977-02-14', NULL, 'Dimas', 'd3a24f864764f297bc634c997be4c546a0821cd5bb8d42dd8b5b1895c3a175e8', 'Jl. Jakasempurna, Jakasetia Raya no. 98\nKalimalang Bates\nBekasi Barat\nJawa Barat\n203321', 'samid@gmail.com', '62-21-8906-0034', '62-821-789-4567', NULL, '2018-08-28 06:01:24'),
(7, NULL, 'Mendy Mohede', NULL, '1977-02-14', NULL, 'Mendy', '234afbd5f044f3636494f368fb8dc1139c181caad86b15cdbc3cf16550acdcd0', 'Jl. H. Barokah No. 67\nKampung Pladen\nBintaro Selatan, Banten', 'mendymohede@gmail.com', '62-21-7809-0781', '62-813-9001-7892', NULL, '2018-08-28 06:01:32'),
(8, NULL, 'Gilang Pratama', NULL, '1977-02-14', NULL, 'Gilang', '8145a224b907eebaf4179d2c1470d4cd25240e389b247458b772f2e49954f647', 'Jl. Fatmawati 212\nCilandak Barat\nJakarta Selatan\n120098', 'gilang@gmail.com', '021-789-0021', '0877-9001-3670', NULL, '2018-08-28 06:01:37'),
(9, NULL, 'Asril Pradana', NULL, '1977-02-14', NULL, 'Asril', 'b5a414dd43394c5a57bd5bdb2bc32e66abfc210d19f7d83453274dbff00d4215', 'Jl. Bekasi Barat Raya no. 908\nPekayon Barat\nBekasi 90223', 'asril.pradana@gmail.com', '021-866-2090-1', '0822-9012-9002', NULL, '2018-08-28 06:01:40'),
(10, NULL, 'Okky Satria', NULL, '1977-02-14', NULL, 'Okky', 'adc6e9ebc4eadea7ba44032a1bc58ed4b808ecbc26c14380ba824d7f036d8f3c', 'Jl. Satria Mandala No. 34\nPekayon Barat\nBekasi 899021', 'okky.satria@gmail.com', '021-5622-7645', '0859-4509-2222', NULL, '2018-08-28 06:01:47'),
(11, 'Mr.', 'Heri Sucipto', 'Basket', '1970-12-12', 'Jakarta Selatan', 'Heri', '657f18518eaa2f41307895e18c3ba0d12d97b8a23c6de3966f52c6ba39a07ee4', 'Jl. Jelambar 24\nJakarta Barat\nJKT 130023', 'heri.sucipto@gmail.com', '021-7892-0000', '0857-9000-7210', '', '2018-08-28 06:51:11');

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=12 ;

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
(7, 'Mendy', 'mendymohede@gmail.com', '234afbd5f044f3636494f368fb8dc1139c181caad86b15cdbc3cf16550acdcd0', 0, 0, '2018-08-01 02:26:57'),
(8, 'Gilang', 'gilang@gmail.com', '8145a224b907eebaf4179d2c1470d4cd25240e389b247458b772f2e49954f647', 0, 0, '2018-08-28 01:55:13'),
(9, 'Asril', 'asril.pradana@gmail.com', 'b5a414dd43394c5a57bd5bdb2bc32e66abfc210d19f7d83453274dbff00d4215', 0, 0, '2018-08-28 02:17:56'),
(10, 'Okky', 'okky.satria@gmail.com', 'adc6e9ebc4eadea7ba44032a1bc58ed4b808ecbc26c14380ba824d7f036d8f3c', 0, 0, '2018-08-28 03:26:30'),
(11, 'Heri', 'heri.sucipto@gmail.com', '657f18518eaa2f41307895e18c3ba0d12d97b8a23c6de3966f52c6ba39a07ee4', 0, 0, '2018-08-28 06:34:16');

-- --------------------------------------------------------

--
-- Table structure for table `user_quality_receipt`
--

CREATE TABLE IF NOT EXISTS `user_quality_receipt` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `code` varchar(5) COLLATE utf8_unicode_ci NOT NULL,
  `desc` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `created_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=7 ;

--
-- Dumping data for table `user_quality_receipt`
--

INSERT INTO `user_quality_receipt` (`id`, `code`, `desc`, `created_on`) VALUES
(1, 'VPQ', 'very poor quality item received', '2018-08-26 10:53:01'),
(2, 'POQ', 'poor quality item received', '2018-08-26 10:53:01'),
(3, 'FQR', 'fair quality item received', '2018-08-26 10:54:28'),
(4, 'GQR', 'good quality item received', '2018-08-26 10:54:28'),
(5, 'VGR', 'very good item quality received', '2018-08-26 10:57:19'),
(6, 'EQR', 'excellent quality item received', '2018-08-26 10:57:19');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
