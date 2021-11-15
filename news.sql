-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 15 Nov 2021 pada 09.16
-- Versi server: 10.4.20-MariaDB
-- Versi PHP: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `news`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `news`
--

CREATE TABLE `news` (
  `Penulis` varchar(100) NOT NULL,
  `Topic` text NOT NULL,
  `Tanggal` date NOT NULL,
  `Source` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `news`
--

INSERT INTO `news` (`Penulis`, `Topic`, `Tanggal`, `Source`) VALUES
('Fadhilah Sari', 'Syarat Penerimaan Vaksin', '2021-08-17', 'Kompas.com'),
('Nur Rahma', 'Tips Hidup Sehat', '2021-10-05', 'Kompas.com'),
('Rico Dewa', 'Update Seputar Covid-19', '2021-11-05', 'Liputan6.com'),
('Echa Sant', 'Fashion Selalu Mencuri Perhatian Female', '2021-08-01', 'Liputan.com'),
('Dika Resa', 'Perkembangan Trend Fashion di Indonesia', '2021-09-14', 'Wikipedia.com'),
('Nunu Riza', 'OOTD Gaya Casual Male', '2021-10-07', 'Rama//blog.spot.com'),
('Tina Han', 'Tips Belajar dimasa Pandemi', '2021-11-03', 'Liputan6.com'),
('Cindy Eka', 'Pembelajaran Daring Pada Masa Pandemi', '2021-07-31', 'Linblog.spot.com');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
