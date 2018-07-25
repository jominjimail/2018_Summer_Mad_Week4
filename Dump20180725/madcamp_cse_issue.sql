-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: madcamp
-- ------------------------------------------------------
-- Server version	5.7.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cse_issue`
--

DROP TABLE IF EXISTS `cse_issue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cse_issue` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `description` text,
  `created` datetime NOT NULL,
  `author_id` int(11) DEFAULT NULL,
  `views` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cse_issue`
--

LOCK TABLES `cse_issue` WRITE;
/*!40000 ALTER TABLE `cse_issue` DISABLE KEYS */;
INSERT INTO `cse_issue` VALUES (1,'MySQ','MySQL is...ㅇㄹㄹㅀㄹ','2018-07-24 22:47:19',1,0),(2,'mmmmmm','Oracle is .ㅎ호ㅗ..','2018-07-25 00:34:20',1,0),(3,'진짜 된건가','ㅓㅏㅓ할dfdfd','2018-07-25 00:37:32',1,1),(5,'fg','ddfghh','2018-07-24 15:16:57',1,1),(7,'ㅎㅎㅎㅎㅎㅎㅎㅎ','wetyㅗㅓㅗㅓㅗㄹㅇㄹㅇㄹㅇㄹㅇㄹㅇㄹㅇㄹㅇㅇ','2018-07-24 22:39:33',1,1),(8,'dfgg','sdggggggggggggggg','2018-07-24 18:33:43',1,1),(10,'dfdf','dfdfd','2018-07-24 18:40:11',1,1),(14,'fuck','fuck you ','2018-07-24 19:23:17',1,1),(15,'dfffㄹ호오올','ffdㅗ홓','2018-07-24 22:56:52',1,1),(19,'ㄹㄹㄹㄹㄹㄹ','ㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹ','2018-07-24 22:47:28',1,1),(20,'ㅀㅀㅀㅀㅇㅇㅇ','ㅀㅀㅀㄹ','2018-07-24 22:54:31',1,1),(21,'dㄹㅇㄹㅇㄹㅇㄹ','ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ','2018-07-24 23:01:39',1,1),(23,'오 됐다ㅏ','ㅇ러아ㅓ핳','2018-07-25 00:37:20',1,1);
/*!40000 ALTER TABLE `cse_issue` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-07-25 19:21:16
