/*
  Warnings:

  - You are about to drop the column `reservationSlotId` on the `Entries` table. All the data in the column will be lost.
  - You are about to drop the `ReservationSlots` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Entries` DROP FOREIGN KEY `Entries_reservationSlotId_fkey`;

-- DropIndex
DROP INDEX `Visitors_reservationSlotId_fkey` ON `Entries`;

-- AlterTable
ALTER TABLE `Entries` DROP COLUMN `reservationSlotId`;

-- DropTable
DROP TABLE `ReservationSlots`;
