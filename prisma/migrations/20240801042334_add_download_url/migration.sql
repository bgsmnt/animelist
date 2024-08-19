-- CreateTable
CREATE TABLE `Anime` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `year` INTEGER NOT NULL,
    `rank` INTEGER NOT NULL,
    `score` DOUBLE NOT NULL,
    `members` INTEGER NOT NULL,
    `episodes` INTEGER NOT NULL,
    `synopsis` VARCHAR(191) NOT NULL,
    `images` JSON NOT NULL,
    `trailer` JSON NOT NULL,
    `download_url` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
