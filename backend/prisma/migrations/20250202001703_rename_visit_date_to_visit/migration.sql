/*
  Warnings:

  - You are about to drop the column `checkinTime` on the `Entries` table. All the data in the column will be lost.
  - You are about to drop the column `visitDate` on the `Entries` table. All the data in the column will be lost.
  - Added the required column `visitDay` to the `Entries` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Entries` DROP COLUMN `checkinTime`,
    DROP COLUMN `visitDate`,
    ADD COLUMN `checkInTime` TIME NULL,
    ADD COLUMN `visitDay` DATE NOT NULL;
