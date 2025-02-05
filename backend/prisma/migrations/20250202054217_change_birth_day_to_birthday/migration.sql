/*
  Warnings:

  - You are about to drop the column `birthDay` on the `Entries` table. All the data in the column will be lost.
  - Added the required column `birthday` to the `Entries` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Entries` DROP COLUMN `birthDay`,
    ADD COLUMN `birthday` DATE NOT NULL;
