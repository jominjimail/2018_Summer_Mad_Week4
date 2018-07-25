-- MySQL dump 10.13  Distrib 5.7.22, for Linux (x86_64)
--
-- Host: localhost    Database: openmajor
-- ------------------------------------------------------
-- Server version	5.7.22-0ubuntu0.17.10.1

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
-- Current Database: `openmajor`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `openmajor` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `openmajor`;

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
-- Table structure for table `college`
--

DROP TABLE IF EXISTS `college`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `college` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `domain` varchar(50) NOT NULL,
  `name` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2388 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `college`
--

LOCK TABLES `college` WRITE;
/*!40000 ALTER TABLE `college` DISABLE KEYS */;
INSERT INTO `college` VALUES (2047,'hcc','혜천대'),(2048,'hyejeon','혜전대'),(2049,'hywoman','한양여자대'),(2050,'hallym-c','한림정보산업대'),(2051,'krc','한국철도대'),(2052,'kn','한국농업전문학'),(2053,'pohang','포항1대'),(2054,'taesung','태성대'),(2055,'chch-c','충청대'),(2056,'choonhae','춘해대'),(2057,'chongjunc','청양대'),(2058,'chungkang','청강문화산업대'),(2059,'chonan-c','천안외국어대'),(2060,'cntc','천안공업대'),(2061,'changwon-c','창원전문대'),(2062,'changshin-c','창신대'),(2063,'chinju-c','진주전문대'),(2064,'chc','진주보건대'),(2065,'jisan','지산대'),(2066,'jsc','주성대'),(2067,'chosun-c','조선이공대'),(2068,'halla-c','제주한라대'),(2069,'jeju','제주산업정보대'),(2070,'cjtour','제주관광대'),(2071,'jungup-c','정인대'),(2072,'kijeon-c','전주기전여자대'),(2073,'jtc','전주공업대'),(2074,'chunnam-c','전남과학대'),(2075,'jnc','장흥대'),(2076,'jangan','장안대'),(2077,'inhatc','인하공업전문대'),(2078,'icc','인천전문대'),(2079,'induk','인덕대'),(2080,'iksan','익산대'),(2081,'yuhan','유한대'),(2082,'wonju','원주전문대'),(2083,'wkhc','원광보건대'),(2084,'ulsan-c','울산과학대'),(2085,'woosonginfo','우송정보대'),(2086,'woosongtech','우송공업대'),(2087,'ysc','용인송담대'),(2088,'occ','옥천전문대'),(2089,'osan-c','오산대'),(2090,'mpjcn','예수간호대'),(2091,'yeungjin-c','영진전문대'),(2092,'yongwol-c','영월공과대'),(2093,'yeongdong','영동전문대'),(2094,'yeungnam-c','영남이공대'),(2095,'yonam-ag','연암축산원예대'),(2096,'yonam-c','연암공업대'),(2097,'yeojoo','여주대'),(2098,'yosutc','여수공업대'),(2099,'yangsan','양산대'),(2100,'anyang-c','안양과학대'),(2101,'ansantc','안산공과대'),(2102,'ansan','안산1대'),(2103,'ait','안동정보대'),(2104,'andong-c','안동과학대'),(2105,'shinheung-c','신흥대'),(2106,'shinsung','신성대'),(2107,'shingu-c','신구대'),(2108,'scjc','순천청암대'),(2109,'suncheon','순천제일대'),(2110,'suwon-c','수원여자대'),(2111,'suwon-sc','수원과학대'),(2112,'songwon','송원대'),(2113,'sunghwa','성화대'),(2114,'sungsim','성심외국어대'),(2115,'sd-c','성덕대'),(2116,'sunlin','선린대'),(2117,'sohae','서해대'),(2118,'seoil','서울예술신학'),(2119,'snjc','서울여자간호대'),(2120,'shjc','서울보건대'),(2121,'sorabol','서라벌대'),(2122,'seokang','서강정보대'),(2123,'sangji-c','삼육의명대'),(2124,'snhc','삼육간호보건대'),(2125,'bucheon','부천대'),(2126,'pwc','부산여자대'),(2127,'psks','부산경상대'),(2128,'byuksung-c','벽성대'),(2129,'paekche','백제예술대'),(2130,'baewha','배화여자전문대'),(2131,'munkyung','문경대'),(2132,'o-c','목포과학대'),(2133,'mjc','명지전문대'),(2134,'masan-c','마산대'),(2135,'doowon','두원공과대'),(2136,'tonghae','동해대'),(2137,'dongju-c','동주대'),(2138,'dit','동의공업대'),(2139,'tongwon','동원대'),(2140,'duc','동우대'),(2141,'dytc','동양공업전문대'),(2142,'dongac','동아인재대'),(2143,'dab-c','동아방송전문대'),(2144,'dsc','동서울대'),(2145,'dpc','동부산대'),(2146,'tu','동명대'),(2147,'dongnam','동남보건대'),(2148,'dongkang','동강대'),(2149,'dcc','대천대'),(2150,'tjhealth','대전보건대'),(2151,'daewon','대원공과대'),(2152,'daelim','대림대'),(2153,'ddc','대덕대'),(2154,'tpic','대구산업정보대'),(2155,'taegu-hc','대구보건대'),(2156,'tfc','대구미래대'),(2157,'taegu-c','대구과학대'),(2158,'taegutech','대구공업대'),(2159,'tk','대경대'),(2160,'damyang','담양대'),(2161,'nonghyup','농협대'),(2162,'namhae','남해전문대'),(2163,'naju','나주대'),(2164,'kimpo','김포대'),(2165,'kimcheon','김천대'),(2166,'kcs','김천과학대'),(2167,'kdc','극동정보대'),(2168,'kunjang','군장대'),(2169,'kcn','군산간호대'),(2170,'nmc-c','국립세무대'),(2171,'kumi','구미1대'),(2172,'kjhc-c','광주보건대'),(2173,'kcac','공주영상정보대'),(2174,'kongju-c','공주문화대'),(2175,'korea','고려대학교 병설 보건대'),(2176,'kaywon','계원조형예술대'),(2177,'keimyung-c','계명문화대'),(2178,'kyungho-c','경희호텔전문대'),(2179,'kyungin-c','경인여자대'),(2180,'kyungwon-c','경원전문대'),(2181,'kp-c','경북전문대'),(2182,'kflc','경북외국어테크노대'),(2183,'kbcs','경북과학대'),(2184,'kyungbok','경복대'),(2185,'kyungmin-c','경민대'),(2186,'kmc','경문대'),(2187,'kyungdong-c','경동정보대'),(2188,'kyongdo','경도대'),(2189,'kit','경남정보대'),(2190,'kinst','경기공업대'),(2191,'kc','거창전문대'),(2192,'koje','거제대'),(2193,'kangwonpu','강원도립대'),(2194,'csangji','카톨릭상지대'),(2195,'gcgc','홍성기능대'),(2196,'chunchon','춘천기능대'),(2197,'cjpc','청주기능대학'),(2198,'cw-polytec','전주기능대'),(2199,'jpolytec','전북기능대'),(2200,'ipc','인천기능대'),(2201,'ans','안성여자기능대'),(2202,'snpc','성남기능대'),(2203,'tpc','서울정수기능대학 강서캠퍼'),(2204,'sjpc','부산기능대학'),(2205,'mpc','대전기능대'),(2206,'tgpc','대구기능대'),(2207,'kpc','구미기능대'),(2208,'navy','해군사관학'),(2209,'knupe','한국체육대학'),(2210,'kaist','한국과학기술원'),(2211,'krc','한국철도대'),(2212,'icu','한국정보통신대학원대학'),(2213,'knua','한국예술종합학'),(2214,'knou','한국방송대학'),(2215,'kma','육군3사관학'),(2216,'hyo','성산효도대학원대학'),(2217,'idas','국립세무대'),(2218,'police','국립경찰대'),(2219,'gist','광주과학기술'),(2220,'ttgst','횃불트리니티신학대학원대학'),(2221,'htus','호남신학대학'),(2222,'hapdong','합동신학대학원대학'),(2223,'hanil','한일장신대학'),(2224,'hytu','프레이즈음악신학'),(2225,'kbtus','침례신학대학'),(2226,'hongshin','총신대학'),(2227,'pcts','장로회신학대학교'),(2228,'westminster','웨스트민스터신학대학원대학교'),(2229,'wonbuddhism','원불교대학원대학'),(2230,'youngsan','영산원불교대학'),(2231,'yntcs','순복음신학'),(2232,'skhu','성공회대학'),(2233,'sungkyul','성결대학교'),(2234,'seouljangsin','서울장신대학'),(2235,'stu','서울신학대학'),(2236,'pcc','대한신학'),(2237,'dcatholic','대전가톨릭대학'),(2238,'cataegu','대구효성가톨릭대학교'),(2239,'nazarene','기독교신학대학원대학'),(2240,'gukje','국제신학대학원대학교'),(2241,'kjcatholic','광주가톨릭대학'),(2242,'knue','한국교원대학'),(2243,'cnue-e','춘천교육대학'),(2244,'chongju-e','청주교육대학'),(2245,'chinju-e','진주교육대학'),(2246,'cheju-e','제주교육대학'),(2247,'chonju-e','전주교육대학'),(2248,'inchon-e','인천교육대학'),(2249,'seoul-e','서울교육대학'),(2250,'pusan-e','부산교육대학'),(2251,'taegu-e','대구교육대학'),(2252,'kwangju-e','광주교육대학'),(2253,'hongik','홍익대학'),(2254,'howon','호원대학'),(2255,'hoseo','호서대학'),(2256,'honam','호남대학'),(2257,'hanyang','한양대학'),(2258,'hanshin','한신대학'),(2259,'hansei','한세대학'),(2260,'hansung','한성대학'),(2261,'hanseo','한서대학'),(2262,'hallym','한림대학'),(2263,'hanlyo','한려대학'),(2264,'halla','한라대학'),(2265,'han','한동대학'),(2266,'hannam','한남대학'),(2267,'kmaritime','한국해양대학'),(2268,'hufs','한국외국어대학'),(2269,'kpu','한국기술교육대학교'),(2270,'ansung','한경대학'),(2271,'postech','포항공과대학'),(2272,'cha','포천중문의과대학'),(2273,'ptuniv','평택대학'),(2274,'calvin','칼빈대학'),(2275,'chungju','충주대학'),(2276,'chungbuk','충북대학'),(2277,'chungnam','충남대학'),(2278,'chugye','추계예술대학'),(2279,'chodang','초당대학'),(2280,'chongju','청주대학'),(2281,'cwunet','청운대학'),(2282,'chonan','천안대학'),(2283,'changwon','창원대학'),(2284,'chinju','진주산업대학'),(2285,'cau','중앙대학'),(2286,'joongbu','중부대학'),(2287,'chosun','조선대학'),(2288,'cheju','제주대학'),(2289,'jeonju','전주대학'),(2290,'chonbuk','전북대학'),(2291,'chonnam','전남대학'),(2292,'inha','인하대학'),(2293,'inchon','인천대학'),(2294,'inje','인제대학'),(2295,'ewha','이화여자대학교'),(2296,'eulji','을지의과대'),(2297,'uiduk','위덕대학'),(2298,'wonkwang','원광대학'),(2299,'ulsan','울산대학'),(2300,'woosong','우송대학'),(2301,'woosuk','우석대학교'),(2302,'yongin','용인대학'),(2303,'ysu','영산대학'),(2304,'youngdong','영동대학'),(2305,'yonsei','연세대학'),(2306,'yosu','여수대학'),(2307,'anyang','안양대학'),(2308,'andong','안동대학'),(2309,'ajou','아주대학'),(2310,'silla','신라대학'),(2311,'soongsil','숭실대학'),(2312,'sch','순천향대학'),(2313,'sunchon','순천대학'),(2314,'sookmyung','숙명여자대학'),(2315,'suwon','수원대학'),(2316,'sejong','세종대학'),(2317,'semyung','세명대학'),(2318,'sungshin','성신여자대학'),(2319,'skku','성균관대학'),(2320,'sunmoon','선문대학'),(2321,'seowon','서원대학'),(2322,'swu','서울여자대학'),(2323,'uos','서울시립대학'),(2324,'snut','서울산업대학'),(2325,'snu','서울대학'),(2326,'seonam','서남대학'),(2327,'seokyeong','서경대학'),(2328,'sogang','서강대학'),(2329,'sangji','상지대학'),(2330,'sangmyung','상명대학'),(2331,'samchok','삼척대학'),(2332,'syu','삼육대학'),(2333,'pufs','부산외국어대학교'),(2334,'pusan','부산대학'),(2335,'pknu','부경대학'),(2336,'berea','베뢰아대학원대학'),(2337,'paichai','배재대학'),(2338,'miryang','밀양대학'),(2339,'mmu','목포해양대학'),(2340,'mokpo','목포대학'),(2341,'mokwon','목원대학'),(2342,'myongji','명지대학'),(2343,'dongeui','동의대학'),(2344,'dyu','동양대학'),(2345,'donga','동아대학'),(2346,'dongshinu','동신대학'),(2347,'dongseo','동서대학'),(2348,'tit','동명정보대학'),(2349,'dongguk','동국대학'),(2350,'duksung','덕성여자대학'),(2351,'daejin','대진대학'),(2352,'tnut','대전산업대학'),(2353,'taejon','대전대학'),(2354,'daebul','대불대학'),(2355,'dankook','단국대학'),(2356,'nsu','남서울대학'),(2357,'kumoh','금오공과대학'),(2358,'kdu','극동대학'),(2359,'kunsan','군산대학'),(2360,'kookmin','국민대학'),(2361,'kwu','광주여자대학'),(2362,'kwangju','광주대학'),(2363,'kwangwoon','광운대학'),(2364,'kwangshin','광신대학'),(2365,'kwandong','관동대학'),(2366,'kongju','공주대학'),(2367,'korea','고려대학'),(2368,'keimyung','계명대학'),(2369,'kyunghee','경희대학'),(2370,'kyongju','경주대학'),(2371,'kyungil','경일대학'),(2372,'kyungwon','경원대학'),(2373,'kyungwoon','경운대학'),(2374,'kyungsung','경성대학'),(2375,'gsnu','경상대학교'),(2376,'ksucc','경산대학교'),(2377,'kyungpook','경북대학교'),(2378,'kyungdong','경동대학'),(2379,'kyungnam','경남대학'),(2380,'kyonggi','경기대학'),(2381,'konyang','건양대학'),(2382,'konkuk','건국대학'),(2383,'kangwon','강원대학'),(2384,'kangnung','강릉대학'),(2385,'kangnam','강남대학'),(2386,'gachon','가천의과대'),(2387,'kaya','가야대학');
/*!40000 ALTER TABLE `college` ENABLE KEYS */;
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
-- Table structure for table `practice`
--

DROP TABLE IF EXISTS `practice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `practice` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `userid` varchar(50) NOT NULL,
  `password` char(32) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `school` varchar(50) DEFAULT NULL,
  `major` varchar(50) DEFAULT NULL,
  `level` int(1) DEFAULT NULL,
  `code` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `userid` (`userid`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `practice`
--

LOCK TABLES `practice` WRITE;
/*!40000 ALTER TABLE `practice` DISABLE KEYS */;
INSERT INTO `practice` VALUES (32,'김기수','k014520','19940523','k014520@kaist.ac.kr','한국과학기술원','CS',1,'Y'),(33,'호날두','ronaldo','ghskfen','ks3156@naver.com',NULL,'CS',1,'Y');
/*!40000 ALTER TABLE `practice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) unsigned NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('1QJ4ykSv3d0lq5q6vA1RF0RfKgJ-lwMd',1532585181,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('74AlV-VWGPvMlrm3QB7sTS0TfyA_wMCm',1532540217,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('rV4svonaBFdQY--6NpE0fd_aIY8AoJW3',1532600489,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"authId\":\"k014520\"}');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test`
--

DROP TABLE IF EXISTS `test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `test` (
  `id` varchar(10) NOT NULL,
  `password` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test`
--

LOCK TABLES `test` WRITE;
/*!40000 ALTER TABLE `test` DISABLE KEYS */;
INSERT INTO `test` VALUES ('123','123'),('abdbad','abdbs'),('doghoney','doghoney'),('k014520','19940523'),('kisoo','123123');
/*!40000 ALTER TABLE `test` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `mem_idx` int(10) NOT NULL,
  `mem_userid` varchar(100) NOT NULL,
  `mem_password` char(32) NOT NULL,
  `mem_email` varchar(100) NOT NULL,
  `mem_username` varchar(20) NOT NULL,
  `mem_class` int(1) NOT NULL,
  `mem_major` varchar(100) NOT NULL,
  `mem_school` varchar(100) NOT NULL,
  PRIMARY KEY (`mem_idx`),
  UNIQUE KEY `mem_userid` (`mem_userid`),
  UNIQUE KEY `mem_email` (`mem_email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-07-25 11:00:52
