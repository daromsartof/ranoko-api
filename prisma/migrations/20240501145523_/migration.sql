-- CreateTable
CREATE TABLE `caisse` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `amount` INTEGER NULL DEFAULT 0,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `user_id` INTEGER NULL,

    UNIQUE INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `username` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `role` VARCHAR(200) NOT NULL DEFAULT '["USER"]',
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `caisse_id` INTEGER NOT NULL,
    `slug` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `username`(`username`),
    UNIQUE INDEX `caisse_id`(`caisse_id`),
    UNIQUE INDEX `slug`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transaction_history` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `caisse_id` INTEGER NOT NULL,
    `responsable_id` INTEGER NULL,
    `debit` INTEGER NOT NULL,
    `credit` INTEGER NOT NULL,
    `last_amout` INTEGER NOT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `caisse_id`(`caisse_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rano_nalaiko` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `number` INTEGER NOT NULL DEFAULT 1,
    `user_id` INTEGER NOT NULL,
    `responsable_id` INTEGER NULL,

    INDEX `rano_nalaiko_ibfk_1`(`user_id`),
    INDEX `responsable_id`(`responsable_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `last_updated` (
    `table_name` VARCHAR(255) NOT NULL,
    `last_update` TIMESTAMP(0) NOT NULL,

    PRIMARY KEY (`table_name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `boit_ndrakitra` (
    `id` INTEGER NOT NULL,
    `amount_total` INTEGER NOT NULL,
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `caisse` ADD CONSTRAINT `caisse_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `caisse` FOREIGN KEY (`caisse_id`) REFERENCES `caisse`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `transaction_history` ADD CONSTRAINT `transaction_history_ibfk_1` FOREIGN KEY (`caisse_id`) REFERENCES `caisse`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `rano_nalaiko` ADD CONSTRAINT `rano_nalaiko_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `rano_nalaiko` ADD CONSTRAINT `rano_nalaiko_ibfk_2` FOREIGN KEY (`responsable_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
