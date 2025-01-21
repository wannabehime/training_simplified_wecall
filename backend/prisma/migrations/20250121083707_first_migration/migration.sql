-- CreateTable
CREATE TABLE `Visitors` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `familyName` VARCHAR(191) NOT NULL,
    `personalName` VARCHAR(191) NOT NULL,
    `familyNameKana` VARCHAR(191) NOT NULL,
    `personalNameKana` VARCHAR(191) NOT NULL,
    `gender` ENUM('man', 'woman', 'other') NOT NULL,
    `birthDate` DATETIME(3) NOT NULL,
    `prefecture` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `isAccompanied` BOOLEAN NOT NULL,
    `checkinTime` DATETIME(3) NULL,
    `reservationSlotId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ReservationSlots` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `reservationDate` DATETIME(3) NOT NULL,
    `reservationTime` DATETIME(3) NOT NULL,
    `maxSlot` INTEGER NOT NULL,
    `reservedSlot` INTEGER NOT NULL,
    `reservableSlot` INTEGER NOT NULL,
    `isReservable` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Visitors` ADD CONSTRAINT `Visitors_reservationSlotId_fkey` FOREIGN KEY (`reservationSlotId`) REFERENCES `ReservationSlots`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
