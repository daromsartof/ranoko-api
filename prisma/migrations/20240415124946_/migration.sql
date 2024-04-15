-- CreateTable
CREATE TABLE `bar` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `is_accepted` BOOLEAN NOT NULL,
    `created_at` DATETIME(0) NOT NULL,
    `rano_id` INTEGER NOT NULL,

    INDEX `rano_id`(`rano_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `caisse` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `amount_total` INTEGER NULL,
    `created_at` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `money` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `caisse_id` INTEGER NULL,
    `amount` VARCHAR(50) NULL,
    `created_at` DATETIME(0) NOT NULL,

    INDEX `caisse_id`(`caisse_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rano` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `quantity` INTEGER NOT NULL,
    `created_at` DATE NOT NULL,
    `user_id` INTEGER NOT NULL,

    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(200) NOT NULL,
    `user_name` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `role` VARCHAR(50) NOT NULL,
    `caisse_id` INTEGER NOT NULL,
    `slug` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `user_name`(`user_name`),
    UNIQUE INDEX `slug`(`slug`),
    INDEX `caisse_id`(`caisse_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `bar` ADD CONSTRAINT `rano_id` FOREIGN KEY (`rano_id`) REFERENCES `rano`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `money` ADD CONSTRAINT `money_ibfk_1` FOREIGN KEY (`caisse_id`) REFERENCES `caisse`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `rano` ADD CONSTRAINT `rano_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `caisse` FOREIGN KEY (`caisse_id`) REFERENCES `caisse`(`id`) ON DELETE RESTRICT ON UPDATE NO ACTION;
