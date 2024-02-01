-- AUTO-GENERATED FILE.

-- This file is an auto-generated file by Ballerina persistence layer for model.
-- Please verify the generated scripts and execute them against the target DB server.

DROP TABLE IF EXISTS `UserCheck`;

CREATE TABLE `UserCheck` (
	`id` VARCHAR(191) NOT NULL,
	`email` VARCHAR(191) NOT NULL,
	`isEmailVerified` BOOLEAN NOT NULL,
	PRIMARY KEY(`id`)
);
