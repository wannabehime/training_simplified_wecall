/*
  Warnings:

  - You are about to drop the column `reservationDate` on the `ReservationSlots` table. All the data in the column will be lost.
  - You are about to drop the column `reservationTime` on the `ReservationSlots` table. All the data in the column will be lost.
  - You are about to drop the `Visitors` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `date` to the `ReservationSlots` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Visitors` DROP FOREIGN KEY `Visitors_reservationSlotId_fkey`;

-- AlterTable
ALTER TABLE `ReservationSlots` DROP COLUMN `reservationDate`,
    DROP COLUMN `reservationTime`,
    ADD COLUMN `date` DATETIME(3) NOT NULL;

-- DropTable
DROP TABLE `Visitors`;

-- CreateTable
CREATE TABLE `Entries` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `familyName` VARCHAR(191) NOT NULL,
    `personalName` VARCHAR(191) NOT NULL,
    `familyNameKana` VARCHAR(191) NOT NULL,
    `personalNameKana` VARCHAR(191) NOT NULL,
    `gender` ENUM('man', 'woman', 'other') NOT NULL,
    `birthDay` DATETIME(3) NOT NULL,
    `prefecture` VARCHAR(191) NOT NULL,
    `tel` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `isAccompanied` BOOLEAN NOT NULL,
    `visitDate` DATETIME(3) NOT NULL,
    `checkinTime` DATETIME(3) NULL,
    `reservationSlotId` INTEGER NOT NULL,

    INDEX `Visitors_reservationSlotId_fkey`(`reservationSlotId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Entries` ADD CONSTRAINT `Entries_reservationSlotId_fkey` FOREIGN KEY (`reservationSlotId`) REFERENCES `ReservationSlots`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
