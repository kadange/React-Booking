BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS `User` (
	`user_id`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	`user_name`	TEXT NOT NULL UNIQUE,
	`password`	TEXT NOT NULL
);
INSERT INTO `User` VALUES (1,'test','test');
CREATE TABLE IF NOT EXISTS `Container_Details` (
	`id`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	`size_type`	TEXT,
	`quantity`	INTEGER,
	`gross_weight`	NUMERIC,
	`scale`	TEXT,
	`ob_haulage`	TEXT,
	`ib_haulage`	TEXT,
	`booking_number`	TEXT
);
INSERT INTO `Container_Details` VALUES (1,'20GP',1,1,'lbs','Carrier','Carrier',NULL),
 (2,'20RF',12,12,'KG','Merchant','Carrier','2362302158'),
 (3,'20RF',12,12,'KG','Merchant','Carrier','3723620404'),
 (4,'40RF',11,11,'TON','Merchant','Merchant','3723620404'),
 (5,'20HQ',1,1,'lbs','Carrier','Carrier','6655778666'),
 (6,'40HQ',2,2,'KG','Merchant','Merchant','6655778666'),
 (7,'20RD',1,1,'TON','Carrier','Merchant','6655778666'),
 (8,'20HQ',1,1,'lbs','Carrier','Carrier','9146225877'),
 (9,'20RD',1,1,'TON','Carrier','Merchant','9146225877'),
 (10,'20GP',1,1,'TON','Carrier','Carrier','3555834885'),
 (11,'20GP',1,1,'TON','Carrier','Carrier','4788775156'),
 (12,'20GP',2,1,'TON','Carrier','Carrier','4788775156'),
 (13,'20GP',3,1,'TON','Carrier','Carrier','4788775156'),
 (14,'20GP',4,1,'TON','Carrier','Carrier','4788775156'),
 (15,'20GP',5,1,'TON','Carrier','Carrier','4788775156'),
 (16,'20RD',6,1,'TON','Merchant','Merchant','4788775156'),
 (17,'20GP',1,1,'TON','Carrier','Carrier','5118527648'),
 (18,'20GP',2,1,'TON','Carrier','Carrier','5118527648'),
 (19,'20GP',3,1,'TON','Carrier','Carrier','5118527648'),
 (20,'20GP',4,1,'TON','Carrier','Carrier','5118527648'),
 (21,'20GP',5,1,'TON','Carrier','Carrier','5118527648'),
 (22,'20GP',1,1,'TON','Carrier','Carrier','4062047687'),
 (23,'20GP',2,1,'TON','Carrier','Carrier','4062047687'),
 (24,'20GP',3,1,'TON','Carrier','Carrier','4062047687'),
 (25,'20GP',4,1,'TON','Carrier','Carrier','4062047687'),
 (26,'20GP',5,1,'TON','Carrier','Carrier','4062047687'),
 (27,'20RD',6,1,'TON','Merchant','Merchant','4062047687'),
 (28,'20GP',1,1,'TON','Carrier','Carrier','9677817814'),
 (29,'20GP',2,1,'TON','Carrier','Carrier','9677817814'),
 (30,'20GP',3,1,'TON','Carrier','Carrier','9677817814'),
 (31,'20GP',1,1,'TON','Carrier','Carrier','8435117801'),
 (32,'20GP',2,1,'TON','Carrier','Carrier','8435117801'),
 (33,'20GP',1,1,'TON','Carrier','Carrier','4087567167'),
 (34,'20GP',2,1,'TON','Carrier','Carrier','4087567167'),
 (35,'20GP',3,1,'TON','Carrier','Carrier','4087567167'),
 (36,'20GP',4,1,'TON','Carrier','Carrier','4087567167'),
 (37,'20GP',1,1,'TON','Carrier','Carrier','4788775156'),
 (38,'20GP',2,1,'TON','Carrier','Carrier','4788775156'),
 (39,'20GP',3,1,'TON','Carrier','Carrier','4788775156'),
 (40,'20GP',4,1,'TON','Carrier','Carrier','4788775156'),
 (43,'20RF',12,12,'KG','Merchant','Carrier','2362302158'),
 (44,'40RD',2,1,'lbs','Carrier','Carrier','2362302158'),
 (45,'40RD',1,1,'TON','Merchant','Merchant','2005815048'),
 (46,'40RD',1,1,'TON','Merchant','Merchant','7137423244'),
 (47,'40RD',1,1,'TON','Merchant','Merchant','7137423244'),
 (48,'40RD',1,1,'TON','Merchant','Merchant','6165381457'),
 (49,'40RD',1,1,'TON','Merchant','Merchant','6165381457'),
 (50,'40RD',1,1,'TON','Merchant','Merchant','2545368583'),
 (51,'40RD',1,1,'TON','Merchant','Merchant','2545368583'),
 (52,'40RD',1,1,'TON','Merchant','Merchant','8108625420'),
 (53,'40RD',1,1,'TON','Merchant','Merchant','8108625420'),
 (54,'20GP',2,1,'TON','Carrier','Carrier','8108625420'),
 (55,'40RD',1,1,'TON','Merchant','Merchant','9522552845'),
 (56,'40RD',1,1,'TON','Carrier','Carrier','9522552845');
CREATE TABLE IF NOT EXISTS `Booking` (
	`booking_number`	TEXT NOT NULL UNIQUE,
	`booking_office`	TEXT NOT NULL,
	`booking_party`	TEXT NOT NULL,
	`shipper`	TEXT NOT NULL,
	`forwarder`	TEXT NOT NULL,
	`consignee`	TEXT NOT NULL,
	`from_city`	TEXT NOT NULL,
	`to_city`	TEXT NOT NULL,
	`cargo_description`	TEXT NOT NULL,
	`cargo_nature`	TEXT NOT NULL,
	`user_id`	INTEGER,
	PRIMARY KEY(`booking_number`)
);
INSERT INTO `Booking` VALUES ('1011111110','MNL','test','test','test','test','HKG','SIN','description','dg',1),
 ('5020667533','booking office','booking party','shipper','forwarder','consignee','HKG','SIN','description','GC',NULL),
 ('2362302158','booking office','booking party','shipper','forwarder','consignee','HKG','SIN','description','GC',NULL),
 ('3723620404','booking office','booking party','shipper','forwarder','consignee','HKG','SIN','description','GC',1),
 ('6655778666','booking office','booking party','shipper','forwarder','consignee','HKG','SIN','description','GC',NULL),
 ('9146225877','booking office','booking party','shipper','forwarder','consignee','HKG','SIN','description','DG',NULL),
 ('3555834885','MNL','Black & Decker','Black & Decker','Black & Decker','Black & Decker','JPN','LGB','Cotton','DG',NULL),
 ('4788775156','SHA','Black & Decker','Black & Decker','Black & Decker','Black & Decker','SIN','JPN','Cotton','DG',NULL),
 ('5118527648','MNL','Black & Decker','Black & Decker','Black & Decker','Black & Decker','SIN','JPN','Cotton','DG',NULL),
 ('4062047687','JPN','Black & Decker','Black & Decker','Black & Decker','Black & Decker','SIN','JPN','Cotton','DG',NULL),
 ('9677817814','LGB','Black & Decker','Black & Decker','Black & Decker','Black & Decker','SIN','JPN','Cotton','DG',NULL),
 ('8435117801','SIN','Black & Decker','Black & Decker','Black & Decker','Black & Decker','SIN','JPN','Cotton','DG',NULL),
 ('4087567167','PUS','Black & Decker','Black & Decker','Black & Decker','Black & Decker','SIN','JPN','Cotton','DG',NULL),
 ('2005815048','SIN','Black & Decker','2362302158','2362302158','2362302158','HKG','MNL','Cotton','GC',NULL),
 ('7137423244','SIN','Black & Decker','2362302158','2362302158','2362302158','HKG','MNL','Cotton','GC',NULL),
 ('6165381457','SIN','Black & Decker','2362302158','2362302158','2362302158','HKG','MNL','Cotton','GC',NULL),
 ('2545368583','MNL','Black & Decker','2362302158','2362302158','2362302158','HKG','MNL','Cotton','GC',NULL),
 ('8108625420','SIN','Black & Decker','2362302158','2362302158','2362302158','HKG','MNL','Cotton','GC',NULL),
 ('9522552845','SIN','Black & Decker','2362302158','2362302158','2362302158','HKG','MNL','Cotton','GC',NULL);
COMMIT;