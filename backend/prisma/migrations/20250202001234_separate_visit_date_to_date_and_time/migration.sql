/*
  Warnings:

  - Added the required column `visitTime` to the `Entries` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Entries` ADD COLUMN `visitTime` TIME NOT NULL,
    MODIFY `birthDay` DATE NOT NULL,
    MODIFY `visitDate` DATE NOT NULL,
    MODIFY `checkinTime` TIME NULL;
