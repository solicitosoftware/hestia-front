/*
  Warnings:

  - You are about to drop the column `created_at` on the `bookings` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `bookings` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `districts` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `districts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "bookings" DROP COLUMN "created_at",
DROP COLUMN "updated_at";

-- AlterTable
ALTER TABLE "districts" DROP COLUMN "created_at",
DROP COLUMN "updated_at";
