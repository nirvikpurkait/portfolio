-- CreateTable
CREATE TABLE `ToolsTechnologies` (
    `id` CHAR(24) NOT NULL,
    `skill` VARCHAR(191) NOT NULL,
    `currentlyLearning` BOOLEAN NOT NULL DEFAULT false,
    `order` INTEGER NULL,

    UNIQUE INDEX `ToolsTechnologies_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Education` (
    `id` CHAR(24) NOT NULL,
    `course` VARCHAR(191) NOT NULL,
    `institute` VARCHAR(191) NOT NULL,
    `yearOfPassing` INTEGER NOT NULL,
    `percentage` FLOAT NULL,
    `GPA` FLOAT NULL,
    `currentlyEnroled` BOOLEAN NOT NULL DEFAULT false,
    `shortDescription` VARCHAR(50) NULL,

    UNIQUE INDEX `Education_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rating` (
    `id` CHAR(24) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `rating` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    UNIQUE INDEX `Rating_id_key`(`id`),
    UNIQUE INDEX `Rating_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ContactMessage` (
    `id` CHAR(24) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `message` LONGTEXT NOT NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `ContactMessage_id_key`(`id`),
    UNIQUE INDEX `ContactMessage_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProjectDetails` (
    `id` CHAR(24) NOT NULL,
    `heading` VARCHAR(191) NOT NULL,
    `sourceLink` VARCHAR(191) NOT NULL,
    `thumbnailImageUrl` VARCHAR(191) NOT NULL,
    `liveLink` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `imageDescription` VARCHAR(191) NULL,

    UNIQUE INDEX `ProjectDetails_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ProjectDetailsToToolsTechnologies` (
    `A` CHAR(24) NOT NULL,
    `B` CHAR(24) NOT NULL,

    UNIQUE INDEX `_ProjectDetailsToToolsTechnologies_AB_unique`(`A`, `B`),
    INDEX `_ProjectDetailsToToolsTechnologies_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_ProjectDetailsToToolsTechnologies` ADD CONSTRAINT `_ProjectDetailsToToolsTechnologies_A_fkey` FOREIGN KEY (`A`) REFERENCES `ProjectDetails`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProjectDetailsToToolsTechnologies` ADD CONSTRAINT `_ProjectDetailsToToolsTechnologies_B_fkey` FOREIGN KEY (`B`) REFERENCES `ToolsTechnologies`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
