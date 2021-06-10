USE jlpt;

--
-- Table structure for table `grammarpractice`
--

-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: jlpt
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `grammarpractice`
--

DROP TABLE IF EXISTS `grammarpractice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `grammarpractice` (
  `id` int NOT NULL AUTO_INCREMENT,
  `level` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grammarpractice`
--

LOCK TABLES `grammarpractice` WRITE;
/*!40000 ALTER TABLE `grammarpractice` DISABLE KEYS */;
/*!40000 ALTER TABLE `grammarpractice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kanjipractice`
--

DROP TABLE IF EXISTS `kanjipractice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kanjipractice` (
  `id` int NOT NULL AUTO_INCREMENT,
  `level` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kanjipractice`
--

LOCK TABLES `kanjipractice` WRITE;
/*!40000 ALTER TABLE `kanjipractice` DISABLE KEYS */;
/*!40000 ALTER TABLE `kanjipractice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questionpracticegrammar`
--

DROP TABLE IF EXISTS `questionpracticegrammar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questionpracticegrammar` (
  `id` int NOT NULL AUTO_INCREMENT,
  `question` varchar(1000) NOT NULL,
  `answer1` varchar(1000) NOT NULL,
  `answer2` varchar(1000) NOT NULL,
  `answer3` varchar(1000) NOT NULL,
  `answer4` varchar(1000) NOT NULL,
  `result` varchar(1000) NOT NULL,
  `idRLG` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questionpracticegrammar`
--

LOCK TABLES `questionpracticegrammar` WRITE;
/*!40000 ALTER TABLE `questionpracticegrammar` DISABLE KEYS */;
/*!40000 ALTER TABLE `questionpracticegrammar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questionpracticevocabulary`
--

DROP TABLE IF EXISTS `questionpracticevocabulary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questionpracticevocabulary` (
  `id` int NOT NULL AUTO_INCREMENT,
  `question` varchar(1000) NOT NULL,
  `answer1` varchar(1000) NOT NULL,
  `answer2` varchar(1000) NOT NULL,
  `answer3` varchar(1000) NOT NULL,
  `answer4` varchar(1000) NOT NULL,
  `result` varchar(1000) NOT NULL,
  `idRLG` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questionpracticevocabulary`
--

LOCK TABLES `questionpracticevocabulary` WRITE;
/*!40000 ALTER TABLE `questionpracticevocabulary` DISABLE KEYS */;
INSERT INTO `questionpracticevocabulary` VALUES (1,'きのう　かいしゃを　*やすみました*','友みました','休みました','安みました','体みました','3',2),(2,'いすの*した*に　かばんが　あります。','才','丅','下','干','3',2),(3,'けさ　おそく　うちを　*出ました*','だしました','でました','でりました','きました','2',2),(4,'*せんせい*は　いつも　いそがしいです。','先生','生先','先牛','矢王','1',2),(5,'けさ　おそく　うちを　*出ました*','だしました','でました','でりました','きました','2',2),(6,'アンさんは　ぼうしを　（　　）　います。','きて','はいて','かけて','かぶって','4',2),(7,'（　　）　のみものが　ほしいです　。','いたい','つめたい','あかるい','さむい','2',2),(8,'ふくを　（　　）、　おふろに　はいります。','すって','すわって','けして','ぬいで','4',2),(9,'この　かばんは　*高い*です','たかい','だかい','たがい','だがい','1',2),(10,'*わたしは　はじめて　にほんに　きました*。','わたしは　にほんに　きたことが　ありませんでした。','わたしは　ことし　にほんに　きました。','わたしは　らいねん　にほんに　きます。','わたしは　にほんに　きたかったです。','1',2),(11,'*わたしは　フランスごを　ならっています*。','わたしは　フランスごを　おしえて　います。','わたしは　フランスごを　かいて　います。','わたしは　フランスごを　べんきょうして　います。','わたしは　フランスごを　よんで　います。','3',2),(12,'*たなかさんは　もう　かえりました*。','たなかさんは　きのう　きました。','たなかさんは　どこも　いません。','たなかさんは　ここに　いません。','たなかさんは　きょう　やすみでした。','1',2),(13,'まいあさ、ジョギングをして、シャワーを　（　　　）。','はいります','いれます','あびます','よびます','3',2),(14,'いままで　（　　　）にほんごを　べんきょうしましたか。','いくつ','いくら','どのくらい','どちら','3',2);
/*!40000 ALTER TABLE `questionpracticevocabulary` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(40) NOT NULL,
  `admin` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'hoanganh','vuminhhoanganh12@gmail.com','4297f44b13955235245b2497399d7a93',0),(7,'admin','admin@gmail.com','21232f297a57a5a743894a0e4a801fc3',1),(9,'tra','nvd.vnist@gmail.com','4297f44b13955235245b2497399d7a93',0),(10,'ha','nva.vnist@gmail.com','4297f44b13955235245b2497399d7a93',0),(11,'da','super.admin.vnist@gmail.com','4297f44b13955235245b2497399d7a93',0),(12,'Vũ Hoàng Anh','admin.vnist@gmail.com','202cb962ac59075b964b07152d234b70',0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `value`
--

DROP TABLE IF EXISTS `value`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `value` (
  `user_id` int NOT NULL,
  `pactice_id` int NOT NULL,
  `point` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `value`
--

LOCK TABLES `value` WRITE;
/*!40000 ALTER TABLE `value` DISABLE KEYS */;
INSERT INTO `value` VALUES (1,2,2),(2,2,3),(3,2,3),(4,2,1),(5,2,7),(6,2,5),(9,2,11),(10,2,4),(11,2,4),(12,2,5);
/*!40000 ALTER TABLE `value` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vocabularypractice`
--

DROP TABLE IF EXISTS `vocabularypractice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vocabularypractice` (
  `id` int NOT NULL AUTO_INCREMENT,
  `level` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vocabularypractice`
--

LOCK TABLES `vocabularypractice` WRITE;
/*!40000 ALTER TABLE `vocabularypractice` DISABLE KEYS */;
INSERT INTO `vocabularypractice` VALUES (2,'N5');
/*!40000 ALTER TABLE `vocabularypractice` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-10 14:36:27
