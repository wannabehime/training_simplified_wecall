/*
  Warnings:

  - A unique constraint covering the columns `[reservationSlotId]` on the table `Entries` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `reservationSlotId` to the `Entries` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Entries` ADD COLUMN `reservationSlotId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `ReservationSlots` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATE NOT NULL,
    `time` TIME NOT NULL,
    `maxSlot` INTEGER NOT NULL,
    `reservedSlot` INTEGER NOT NULL,
    `reservableSlot` INTEGER NOT NULL,
    `isReservable` BOOLEAN NOT NULL,

    UNIQUE INDEX `ReservationSlots_date_key`(`date`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Entries_reservationSlotId_key` ON `Entries`(`reservationSlotId`);

-- CreateIndex
CREATE INDEX `Entries_reservationSlotId_idx` ON `Entries`(`reservationSlotId`);

-- AddForeignKey
ALTER TABLE `Entries` ADD CONSTRAINT `Entries_reservationSlotId_fkey` FOREIGN KEY (`reservationSlotId`) REFERENCES `ReservationSlots`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
