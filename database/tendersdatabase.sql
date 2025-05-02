-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 02 Maj 2025, 10:43
-- Wersja serwera: 10.4.21-MariaDB
-- Wersja PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `tendersdatabase`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `offers`
--

CREATE TABLE `offers` (
  `id` int(11) NOT NULL,
  `tenderId` int(11) NOT NULL,
  `bidderName` varchar(200) NOT NULL,
  `value` decimal(16,2) NOT NULL,
  `submissionDatetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `offers`
--

INSERT INTO `offers` (`id`, `tenderId`, `bidderName`, `value`, `submissionDatetime`) VALUES
(1, 10, 'X-kom Sp. z o. o.', '29000.00', '2025-04-16 12:27:57'),
(2, 10, 'Komputronik', '27599.00', '2025-04-16 12:30:02'),
(3, 10, 'Media Expert', '29999.00', '2025-04-16 12:32:28'),
(5, 3, 'Budimex SA', '9500001.00', '2025-02-28 15:12:12'),
(6, 3, 'KrakTrans Sp. z o. o.', '9400002.00', '2025-02-27 23:16:12'),
(7, 3, 'Modern Trams Sp. z o. o.', '10000200.00', '2025-02-27 23:16:12'),
(8, 11, 'Szymon Fortuna', '2.00', '2025-04-16 19:48:29'),
(9, 11, 'Robert Lewandowski', '50.00', '2025-04-16 19:48:46'),
(12, 12, 'Robert Lewandowski', '5000000000.00', '2025-04-16 19:53:22'),
(13, 9, 'Stowarzyszenie Kraków dla Mieszkańców', '9769.00', '2025-04-17 13:59:30'),
(14, 9, 'New Tram Technologies', '9712.00', '2025-04-17 14:02:30'),
(15, 13, 'Szymon Fortuna', '1999.00', '2025-04-17 23:13:23'),
(16, 15, 'Oknoplast SP Z o o', '24599.00', '2025-04-17 23:17:51'),
(17, 16, 'Szymon Fortuna', '24000.00', '2025-04-23 19:43:13'),
(18, 16, 'Daniel Droś', '-40.00', '2025-04-23 19:43:29'),
(19, 16, 'Hubert Jackowski', '-50.00', '2025-04-23 19:43:48'),
(20, 16, 'TairGPT Sp. z o. o.', '-1000.00', '2025-04-23 19:44:13'),
(21, 14, 'Szymon Fortuna', '3000.00', '2025-04-23 20:22:50'),
(22, 20, 'Szymon Fortuna', '313.34', '2025-04-23 21:21:21'),
(23, 21, 'Ja', '205.44', '2025-04-23 21:28:31'),
(24, 21, 'On', '230.21', '2025-04-23 21:28:44'),
(25, 21, 'Ona', '299.98', '2025-04-23 21:28:58'),
(26, 21, 'Oni', '230.78', '2025-04-23 21:29:10'),
(27, 21, 'Ty', '287.45', '2025-04-23 21:29:23'),
(28, 21, 'Wy', '300.34', '2025-04-23 21:30:01'),
(29, 24, 'Szymon Fortuna', '200.46', '2025-04-24 16:46:18'),
(30, 24, 'Kierowca na dropsach', '200.01', '2025-04-24 16:46:34'),
(31, 24, 'Super Baterie', '201.00', '2025-04-24 16:46:48'),
(32, 25, 'Robert Lewandowski', '20000.00', '2025-04-28 10:53:19'),
(33, 25, 'Szymon Fortuna', '30002.23', '2025-04-28 10:53:38'),
(34, 25, 'X-kom Sp. z o. o.', '40500.45', '2025-04-28 10:53:54');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `tenders`
--

CREATE TABLE `tenders` (
  `id` int(11) NOT NULL,
  `subjectName` varchar(100) NOT NULL,
  `institution` varchar(100) NOT NULL,
  `description` varchar(500) NOT NULL,
  `startDate` date NOT NULL,
  `startTime` time NOT NULL,
  `endDate` date NOT NULL,
  `endTime` time NOT NULL,
  `maxPrice` decimal(16,2) NOT NULL,
  `submissionDatetime` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `tenders`
--

INSERT INTO `tenders` (`id`, `subjectName`, `institution`, `description`, `startDate`, `startTime`, `endDate`, `endTime`, `maxPrice`, `submissionDatetime`) VALUES
(1, 'Projekt linii tramwajowej', 'Miasto Kraków', 'Projekt linii tramwajowej na osiedle Kliny w Krakowie', '2025-04-01', '00:00:00', '2025-06-30', '23:59:59', '400000.00', '2025-04-12 19:16:45'),
(2, 'Dostawa nowych autobusów', 'MPK Kraków', 'Dostawa 40 nowych autobusów, w tym 15 przegubowych', '2025-05-01', '00:00:00', '2025-07-15', '23:59:59', '10000000.00', '2025-04-12 20:04:10'),
(3, 'Remont wiat przystankowych', 'MPK Kraków', 'Remont 20 wiat przystankowych', '2025-01-02', '00:00:00', '2025-03-31', '23:59:59', '10000000.00', '2025-04-14 20:29:29'),
(9, 'Montaż elektronicznych tablic na przystankach', 'MPK Kraków', 'Montaż dwóch tablic elektronicznych wyświetlających dynamiczne rozkłady odjazdów tramwajów na przystanku Kopiec Wandy', '2025-04-15', '12:00:00', '2025-04-30', '18:00:00', '10000.00', '2025-04-15 23:32:08'),
(10, 'Zakup projektorów dla szkoły podstawowej', 'Szkoła Podstawowa nr 76 w Krakowie', 'Zakup 10 nowoczesnych projektorów wraz z potrzebnym okablowaniem i akcesoriami oraz montaż w salach dydaktycznych', '2025-04-16', '10:45:00', '2025-04-20', '20:20:00', '30000.00', '2025-04-16 10:41:25'),
(11, 'Remont stadionu', 'FC Barcelona', 'Remont stadionu Camp Nou', '2025-04-16', '19:48:00', '2025-04-16', '19:50:00', '1000000.00', '2025-04-16 19:47:24'),
(12, 'Remont trybun na stadionie', 'Legia Warszawa', 'Remont trybun na stadionie Legii Warszawa przy ulicy Łazienkowskiej', '2025-04-16', '19:53:00', '2025-04-16', '19:54:00', '500000.00', '2025-04-16 19:51:42'),
(13, 'Naprawa elektronicznych tablic na przystankach', 'Miasto Kraków', 'Naprawa elektronicznych tablic na przystankach autobusowych w Krakowie', '2025-04-17', '23:00:00', '2025-04-18', '21:00:00', '3000.00', '2025-04-17 22:59:44'),
(14, 'Montaż elektronicznych tablic na przystankach', 'MPK Kraków', 'brak', '2025-04-23', '10:00:00', '2025-04-24', '12:00:00', '3000.00', '2025-04-17 23:00:30'),
(15, 'Wymiana okien', 'Uniwersytet Jagielloński', 'Wymiana starych drewnianych okien w budynku Collegium Novum na terenie I kampusu Uniwersytetu Jagiellońskiego', '2025-04-17', '23:17:00', '2025-04-17', '23:19:00', '25000.00', '2025-04-17 23:17:12'),
(16, 'Organizacja meczu charytatywnego', 'KS Cracovia', 'Organizacja meczu charytatywnego pomiędzy Klubem Sportowym Cracovia a Wisłą Kraków połączonego ze zbiórką dla potrzebujących dzieci', '2025-04-23', '19:43:00', '2025-04-23', '19:45:00', '25000.00', '2025-04-23 19:42:32'),
(17, 'Organizacja turnieju siatkarskiego Memoriał Wagnera', 'Polski Związek Piłki Siatkowej', 'Memoriał Huberta Jerzego Wagnera to największy na świecie turniej towarzyski w piłce siatkowej mężczyzn z udziałem reprezentacji narodowych. Został on zainicjowany przez Prezesa Fundacji Huberta Jerzego Wagnera - Jerzego Mroza. Dotychczas wszystkie edycje Memoriału były objęte Honorowym Patronatem Prezydenta Rzeczpospolitej Polskiej. Jesteśmy organizatorem Turnieju, który rozgrywany był w Olsztynie (2003-2008), w Łodzi (2009), w Bydgoszczy (2010), w Katowicach (2011), w Zielonej Górze (2012), w ', '2025-03-06', '01:00:00', '2025-04-23', '19:53:00', '500000.00', '2025-04-23 19:51:10'),
(18, 'Budowa nowego budynku MOPS', 'Miasto Kraków', 'Budowa nowego budynku Miejskiego Ośrodka Pomocy Społecznej we Wzgórzach Krzesławickich w Krakowie', '2025-04-23', '12:00:00', '2025-05-13', '14:45:00', '2500000.75', '2025-04-23 20:51:39'),
(19, 'Zakup komputerów dla UJ', 'Uniwersytet Jagielloński', 'Zakup 25 nowych komputerów wraz z niezbędnymi peryferiami do pracowni G-1-10 na Wydziale Fizyki, Astronomii i Informatyki Stosowanej Uniwersytetu Jagiellońskiego w Krakowie', '2025-04-21', '01:00:00', '2025-05-12', '19:55:00', '305100.85', '2025-04-23 21:00:26'),
(20, 'Przetarg testowy', 'Test', 'Test', '2025-04-23', '21:20:00', '2025-04-23', '21:22:00', '23456.89', '2025-04-23 21:19:45'),
(21, 'Test123', 'Test', 'Test', '2025-04-23', '21:28:00', '2025-04-23', '21:30:00', '300.50', '2025-04-23 21:28:08'),
(24, 'Wymiana baterii w autobusach', 'MPK Kraków Zajezdnia Wola Duchacka', 'Zakup oraz wymiana baterii w 15 autobusach elektrycznych', '2025-04-24', '16:46:00', '2025-04-24', '16:47:00', '200.49', '2025-04-24 16:45:41'),
(25, 'Remont murawy na boisku', 'Klub Sportowy Kabel Kraków', 'Wymiana murawy na boisku', '2025-04-28', '10:53:00', '2025-04-28', '10:54:00', '100000.00', '2025-04-28 10:52:26');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `offers`
--
ALTER TABLE `offers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `offers_tenders_id_fk` (`tenderId`);

--
-- Indeksy dla tabeli `tenders`
--
ALTER TABLE `tenders`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `offers`
--
ALTER TABLE `offers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT dla tabeli `tenders`
--
ALTER TABLE `tenders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `offers`
--
ALTER TABLE `offers`
  ADD CONSTRAINT `offers_tenders_id_fk` FOREIGN KEY (`tenderId`) REFERENCES `tenders` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
