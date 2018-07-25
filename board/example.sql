--
-- Table structure for table `author`
--


CREATE TABLE `Major_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fullname` varchar(20) NOT NULL,
  `nickname` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `mater_issue` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `description` text,
  `created` datetime NOT NULL,
  `author_id` int(11) DEFAULT NULL,
  `views` int(11),
 PRIMARY KEY (`id`)
);
CREATE TABLE `mater_professor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `description` text,
  `created` datetime NOT NULL,
  `author_id` int(11) DEFAULT NULL,
  `views` int(11),
 PRIMARY KEY (`id`)
);
CREATE TABLE `mater_board` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `description` text,
  `created` datetime NOT NULL,
  `author_id` int(11) DEFAULT NULL,
  `views` int(11),
 PRIMARY KEY (`id`)
);

INSERT INTO `cse_issue` VALUES (1,'MySQL','MySQL is...','2018-01-01 12:10:11',1,0);
INSERT INTO `cse_issue` VALUES (2,'Oracle','Oracle is ...','2018-01-03 13:01:10',1,0);

INSERT INTO `Major_list` (fullname , nickname) VALUES ('chemical' , 'chem');
INSERT INTO `Major_list` (fullname , nickname) VALUES ('mechanical' , 'mech');
INSERT INTO `Major_list` (fullname , nickname) VALUES ('materials' , 'mater');
INSERT INTO `Major_list` (fullname , nickname) VALUES ('Computer' , 'cse');
INSERT INTO `Major_list` (fullname , nickname) VALUES ('biotechnology' , 'biotec');
INSERT INTO `Major_list` (fullname , nickname) VALUES ('electric' , 'elec');

--
-- Dumping data for table `author`
--

INSERT INTO `author` VALUES (1,'egoing','developer');
INSERT INTO `author` VALUES (2,'duru','database administrator');
INSERT INTO `author` VALUES (3,'taeho','data scientist, developer');

--
-- Table structure for table `topic`
--

CREATE TABLE `topic` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `description` text,
  `created` datetime NOT NULL,
  `author_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

--
-- Dumping data for table `topic`
--

INSERT INTO `topic` VALUES (1,'MySQL','MySQL is...','2018-01-01 12:10:11',1);
INSERT INTO `topic` VALUES (2,'Oracle','Oracle is ...','2018-01-03 13:01:10',1);
INSERT INTO `topic` VALUES (3,'SQL Server','SQL Server is ...','2018-01-20 11:01:10',2);
INSERT INTO `topic` VALUES (4,'PostgreSQL','PostgreSQL is ...','2018-01-23 01:03:03',3);
INSERT INTO `topic` VALUES (5,'MongoDB','MongoDB is ...','2018-01-30 12:31:03',1);
