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
-- Table structure for table `biotec_board`
--

DROP TABLE IF EXISTS `biotec_board`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `biotec_board` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `description` text,
  `created` datetime NOT NULL,
  `author_id` int(11) DEFAULT NULL,
  `views` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `biotec_board`
--

LOCK TABLES `biotec_board` WRITE;
/*!40000 ALTER TABLE `biotec_board` DISABLE KEYS */;
/*!40000 ALTER TABLE `biotec_board` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `biotec_issue`
--

DROP TABLE IF EXISTS `biotec_issue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `biotec_issue` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `description` text,
  `created` datetime NOT NULL,
  `author_id` int(11) DEFAULT NULL,
  `views` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `biotec_issue`
--

LOCK TABLES `biotec_issue` WRITE;
/*!40000 ALTER TABLE `biotec_issue` DISABLE KEYS */;
INSERT INTO `biotec_issue` VALUES (1,'여긴 바이오','능','2018-07-25 02:23:36',1,1);
/*!40000 ALTER TABLE `biotec_issue` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `biotec_professor`
--

DROP TABLE IF EXISTS `biotec_professor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `biotec_professor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `description` text,
  `created` datetime NOT NULL,
  `author_id` int(11) DEFAULT NULL,
  `views` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `biotec_professor`
--

LOCK TABLES `biotec_professor` WRITE;
/*!40000 ALTER TABLE `biotec_professor` DISABLE KEYS */;
/*!40000 ALTER TABLE `biotec_professor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `che_board`
--

DROP TABLE IF EXISTS `che_board`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `che_board` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `description` text,
  `created` datetime NOT NULL,
  `author_id` int(11) DEFAULT NULL,
  `views` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `che_board`
--

LOCK TABLES `che_board` WRITE;
/*!40000 ALTER TABLE `che_board` DISABLE KEYS */;
INSERT INTO `che_board` VALUES (1,'자게','ㅎㅇㅎㅇㅎ','2018-07-25 02:22:38',1,1);
/*!40000 ALTER TABLE `che_board` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `che_issue`
--

DROP TABLE IF EXISTS `che_issue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `che_issue` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `description` text,
  `created` datetime NOT NULL,
  `author_id` int(11) DEFAULT NULL,
  `views` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `che_issue`
--

LOCK TABLES `che_issue` WRITE;
/*!40000 ALTER TABLE `che_issue` DISABLE KEYS */;
INSERT INTO `che_issue` VALUES (1,'호하ㅏㄱ','케시컬','2018-07-25 02:22:06',1,1),(2,'dfdf','sdf','2018-07-25 17:34:47',1,1);
/*!40000 ALTER TABLE `che_issue` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `che_professor`
--

DROP TABLE IF EXISTS `che_professor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `che_professor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `description` text,
  `created` datetime NOT NULL,
  `author_id` int(11) DEFAULT NULL,
  `views` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `che_professor`
--

LOCK TABLES `che_professor` WRITE;
/*!40000 ALTER TABLE `che_professor` DISABLE KEYS */;
INSERT INTO `che_professor` VALUES (1,'교수','여기임','2018-07-25 02:22:20',1,1);
/*!40000 ALTER TABLE `che_professor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cse_board`
--

DROP TABLE IF EXISTS `cse_board`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cse_board` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `description` text,
  `created` datetime NOT NULL,
  `author_id` int(11) DEFAULT NULL,
  `views` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cse_board`
--

LOCK TABLES `cse_board` WRITE;
/*!40000 ALTER TABLE `cse_board` DISABLE KEYS */;
/*!40000 ALTER TABLE `cse_board` ENABLE KEYS */;
UNLOCK TABLES;

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

--
-- Table structure for table `cse_professor`
--

DROP TABLE IF EXISTS `cse_professor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cse_professor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `description` text,
  `created` datetime NOT NULL,
  `author_id` int(11) DEFAULT NULL,
  `views` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cse_professor`
--

LOCK TABLES `cse_professor` WRITE;
/*!40000 ALTER TABLE `cse_professor` DISABLE KEYS */;
INSERT INTO `cse_professor` VALUES (1,'오ㅎㅀ','ㅓㅏㅀㅀㅀㄹㅓㅏㅎㅇ','2018-07-25 01:13:17',1,1),(2,'오오','어ㅏㅓㅏㅣㅓㅣㅎ','2018-07-25 01:11:24',1,1);
/*!40000 ALTER TABLE `cse_professor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `elec_board`
--

DROP TABLE IF EXISTS `elec_board`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `elec_board` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `description` text,
  `created` datetime NOT NULL,
  `author_id` int(11) DEFAULT NULL,
  `views` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `elec_board`
--

LOCK TABLES `elec_board` WRITE;
/*!40000 ALTER TABLE `elec_board` DISABLE KEYS */;
/*!40000 ALTER TABLE `elec_board` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `elec_issue`
--

DROP TABLE IF EXISTS `elec_issue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `elec_issue` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `description` text,
  `created` datetime NOT NULL,
  `author_id` int(11) DEFAULT NULL,
  `views` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `elec_issue`
--

LOCK TABLES `elec_issue` WRITE;
/*!40000 ALTER TABLE `elec_issue` DISABLE KEYS */;
/*!40000 ALTER TABLE `elec_issue` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `elec_professor`
--

DROP TABLE IF EXISTS `elec_professor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `elec_professor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `description` text,
  `created` datetime NOT NULL,
  `author_id` int(11) DEFAULT NULL,
  `views` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `elec_professor`
--

LOCK TABLES `elec_professor` WRITE;
/*!40000 ALTER TABLE `elec_professor` DISABLE KEYS */;
/*!40000 ALTER TABLE `elec_professor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mafor_list`
--

DROP TABLE IF EXISTS `mafor_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mafor_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fullname` varchar(20) NOT NULL,
  `nickname` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mafor_list`
--

LOCK TABLES `mafor_list` WRITE;
/*!40000 ALTER TABLE `mafor_list` DISABLE KEYS */;
/*!40000 ALTER TABLE `mafor_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `major_list`
--

DROP TABLE IF EXISTS `major_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `major_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fullname` varchar(20) NOT NULL,
  `nickname` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `major_list`
--

LOCK TABLES `major_list` WRITE;
/*!40000 ALTER TABLE `major_list` DISABLE KEYS */;
INSERT INTO `major_list` VALUES (1,'chemical','che'),(2,'mechanical','mech'),(3,'materials','mater'),(4,'Computer','cse'),(5,'biotechnology','biotec'),(6,'electric','elec');
/*!40000 ALTER TABLE `major_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mater_board`
--

DROP TABLE IF EXISTS `mater_board`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mater_board` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `description` text,
  `created` datetime NOT NULL,
  `author_id` int(11) DEFAULT NULL,
  `views` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mater_board`
--

LOCK TABLES `mater_board` WRITE;
/*!40000 ALTER TABLE `mater_board` DISABLE KEYS */;
/*!40000 ALTER TABLE `mater_board` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mater_issue`
--

DROP TABLE IF EXISTS `mater_issue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mater_issue` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `description` text,
  `created` datetime NOT NULL,
  `author_id` int(11) DEFAULT NULL,
  `views` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mater_issue`
--

LOCK TABLES `mater_issue` WRITE;
/*!40000 ALTER TABLE `mater_issue` DISABLE KEYS */;
INSERT INTO `mater_issue` VALUES (1,'볼펜','mater','2018-07-25 17:47:10',1,1),(3,'크리스피퐆','로로로롤','2018-07-25 17:46:58',1,1);
/*!40000 ALTER TABLE `mater_issue` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mater_professor`
--

DROP TABLE IF EXISTS `mater_professor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mater_professor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `description` text,
  `created` datetime NOT NULL,
  `author_id` int(11) DEFAULT NULL,
  `views` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mater_professor`
--

LOCK TABLES `mater_professor` WRITE;
/*!40000 ALTER TABLE `mater_professor` DISABLE KEYS */;
/*!40000 ALTER TABLE `mater_professor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mech_board`
--

DROP TABLE IF EXISTS `mech_board`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mech_board` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `description` text,
  `created` datetime NOT NULL,
  `author_id` int(11) DEFAULT NULL,
  `views` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mech_board`
--

LOCK TABLES `mech_board` WRITE;
/*!40000 ALTER TABLE `mech_board` DISABLE KEYS */;
/*!40000 ALTER TABLE `mech_board` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mech_issue`
--

DROP TABLE IF EXISTS `mech_issue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mech_issue` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `description` text,
  `created` datetime NOT NULL,
  `author_id` int(11) DEFAULT NULL,
  `views` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mech_issue`
--

LOCK TABLES `mech_issue` WRITE;
/*!40000 ALTER TABLE `mech_issue` DISABLE KEYS */;
INSERT INTO `mech_issue` VALUES (2,'ffff','sdfgsdfg','2018-07-25 17:37:23',1,1),(3,'메카메카','ㅓ아ㅓㅏㅓㅎ','2018-07-25 17:37:36',1,1);
/*!40000 ALTER TABLE `mech_issue` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mech_professor`
--

DROP TABLE IF EXISTS `mech_professor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mech_professor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `description` text,
  `created` datetime NOT NULL,
  `author_id` int(11) DEFAULT NULL,
  `views` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mech_professor`
--

LOCK TABLES `mech_professor` WRITE;
/*!40000 ALTER TABLE `mech_professor` DISABLE KEYS */;
/*!40000 ALTER TABLE `mech_professor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'madcamp'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-07-25 19:29:29
