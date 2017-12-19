-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 19, 2017 at 10:52 AM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `facemash`
--

-- --------------------------------------------------------

--
-- Table structure for table `facemash_stats`
--

CREATE TABLE `facemash_stats` (
  `stats_id` int(11) NOT NULL,
  `votes` int(11) NOT NULL DEFAULT '0',
  `user` int(11) NOT NULL,
  `username` varchar(32) NOT NULL,
  `facemash_count` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `facemash_stats`
--

INSERT INTO `facemash_stats` (`stats_id`, `votes`, `user`, `username`, `facemash_count`) VALUES
(1, 0, 10, 'takkar', 0),
(2, 3, 11, 'faiyaz', 5),
(3, 2, 15, 'shtakkar', 3),
(4, 1, 16, 'coldplay', 2),
(5, 2, 17, 'gulzar', 4),
(6, 0, 18, 'shahrukh', 1),
(7, 1, 19, 'nobita', 3);

-- --------------------------------------------------------

--
-- Table structure for table `profile_views`
--

CREATE TABLE `profile_views` (
  `view_id` int(11) NOT NULL,
  `view_by` int(11) NOT NULL,
  `view_by_username` varchar(32) NOT NULL,
  `view_to` int(11) NOT NULL,
  `view_time` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `profile_views`
--

INSERT INTO `profile_views` (`view_id`, `view_by`, `view_by_username`, `view_to`, `view_time`) VALUES
(1, 10, 'coldplay', 16, '1513611171916'),
(2, 10, 'coldplay', 16, '1513611567791'),
(3, 10, 'coldplay', 16, '1513611740974'),
(4, 10, 'coldplay', 16, '1513612372782'),
(5, 10, 'coldplay', 16, '1513612508704'),
(6, 10, 'coldplay', 16, '1513612686613'),
(7, 10, 'coldplay', 16, '1513612818391'),
(8, 10, 'shtakkar', 15, '1513612831448'),
(9, 10, 'faiyaz', 11, '1513612842320'),
(10, 10, 'faiyaz', 11, '1513613381309'),
(11, 10, 'coldplay', 16, '1513613385735'),
(12, 10, 'gulzar', 17, '1513613391522'),
(13, 10, 'gulzar', 17, '1513613639622'),
(14, 10, 'gulzar', 17, '1513613840563'),
(15, 10, 'coldplay', 16, '1513613876891'),
(16, 10, 'faiyaz', 11, '1513613890237'),
(17, 10, 'faiyaz', 11, '1513614159998'),
(18, 10, 'gulzar', 17, '1513614170223'),
(19, 10, 'shtakkar', 15, '1513614215863'),
(20, 10, 'coldplay', 16, '1513614222382'),
(21, 10, 'gulzar', 17, '1513614328490'),
(22, 10, 'gulzar', 17, '1513614517865'),
(23, 10, 'gulzar', 17, '1513614806517'),
(24, 10, 'faiyaz', 11, '1513614841930'),
(25, 10, 'coldplay', 16, '1513614913737'),
(26, 10, 'gulzar', 17, '1513614931125'),
(27, 10, 'shtakkar', 15, '1513615002948'),
(28, 10, 'faiyaz', 11, '1513615052445'),
(29, 10, 'coldplay', 16, '1513615086176'),
(30, 10, 'gulzar', 17, '1513615103571'),
(31, 10, 'shahrukh', 18, '1513615116195'),
(32, 10, 'nobita', 19, '1513615127854'),
(33, 10, 'faiyaz', 11, '1513616323607'),
(34, 10, 'shtakkar', 15, '1513616374281'),
(35, 10, 'coldplay', 16, '1513616414404'),
(36, 10, 'gulzar', 17, '1513616427657'),
(37, 10, 'shahrukh', 18, '1513616442411'),
(38, 10, 'nobita', 19, '1513616454860'),
(39, 10, 'nobita', 19, '1513616605467'),
(40, 10, 'shahrukh', 18, '1513616620728'),
(41, 10, 'faiyaz', 11, '1513617992404'),
(42, 10, 'faiyaz', 11, '1513618151889'),
(43, 10, 'coldplay', 16, '1513671520755'),
(44, 10, 'faiyaz', 11, '1513671527562'),
(45, 10, 'faiyaz', 11, '1513671685453'),
(46, 10, 'faiyaz', 11, '1513672215952'),
(47, 10, 'faiyaz', 11, '1513674371171'),
(48, 10, 'faiyaz', 11, '1513674498355'),
(49, 10, 'shtakkar', 15, '1513675822858'),
(50, 10, 'faiyaz', 11, '1513676780064');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(32) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `bio` text NOT NULL,
  `joined` varchar(255) NOT NULL,
  `email_verified` enum('yes','no') NOT NULL DEFAULT 'no'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `bio`, `joined`, `email_verified`) VALUES
(10, 'takkar', 'takkar@gmail.com', '$2a$10$baD17YnukUAcLRF5sx2ON.Rel7RK9HhO6ZdcRYRyKlW73L5oJtWbG', '', '1512659714878', 'yes'),
(11, 'faiyaz', 'faiyaz@gmail.com', '$2a$10$j5AYt9ih9.Z0QacTlT3PjuNeiNzStdmZKzvmCF7YSTvlkt7k2CIKe', '', '1512663502795', 'no'),
(15, 'shtakkar', 'www.shtakkar@gmail.com', '$2a$10$4e/MCpnj4BMFws6h4BXXxudlelSz8H8Fcc.yPT2uvNh9X67EXJkQG', 'b', '1512908502257', 'no'),
(16, 'coldplay', 'coldplay@gmail.com', '$2a$10$Moyiiv6oc/v634Dg.YKsOucZGHP0KkYYcs5cN0JUnxg.rXnhFDAFq', '', '1513277016183', 'no'),
(17, 'gulzar', 'gulzar@gmail.com', '$2a$10$Sozboj01LucJt0uM1/Zcm.JYB7adg/OXfEyTi1IiBS6Zv0x90JCQC', '', '1513277125099', 'no'),
(18, 'shahrukh', 'sharukh@gmail.com', '$2a$10$vuJKnsbnFlg9IjKbA09GC.0JCcLZ8P/ZjUqOnHwEzdnefWVbnt/H2', '', '1513277211136', 'no'),
(19, 'nobita', 'nobita@gmail.com', '$2a$10$kr/yVHGDGDFxbWGDo.Esc.1exlhHb40rK.B.t0fGCxtN8KZX92d1O', '', '1513277276790', 'no');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `facemash_stats`
--
ALTER TABLE `facemash_stats`
  ADD PRIMARY KEY (`stats_id`);

--
-- Indexes for table `profile_views`
--
ALTER TABLE `profile_views`
  ADD PRIMARY KEY (`view_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `facemash_stats`
--
ALTER TABLE `facemash_stats`
  MODIFY `stats_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `profile_views`
--
ALTER TABLE `profile_views`
  MODIFY `view_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
