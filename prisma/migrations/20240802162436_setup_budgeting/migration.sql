/*
  Warnings:

  - You are about to drop the column `assigned_amount` on the `categories` table. All the data in the column will be lost.
  - The `system_type` column on the `entries` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `type` on the `accounts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `type` on the `entries` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "entry_type" AS ENUM ('EXPENSE', 'INCOME', 'TRANSFER');

-- CreateEnum
CREATE TYPE "entry_system_type" AS ENUM ('NORMAL', 'INITIAL_BALANCE');

-- CreateEnum
CREATE TYPE "account_type" AS ENUM ('CASH', 'CHECKING', 'SAVINGS', 'CREDIT_CARD');

-- AlterTable
ALTER TABLE "accounts" DROP COLUMN "type",
ADD COLUMN     "type" "account_type" NOT NULL DEFAULT 'CHECKING';

-- AlterTable
ALTER TABLE "categories" DROP COLUMN "assigned_amount";

-- AlterTable
ALTER TABLE "entries" DROP COLUMN "type",
ADD COLUMN     "type" "entry_type" NOT NULL,
DROP COLUMN "system_type",
ADD COLUMN     "system_type" "entry_system_type" NOT NULL DEFAULT 'NORMAL';

-- DropEnum
DROP TYPE "AccountType";

-- DropEnum
DROP TYPE "EntrySystemType";

-- DropEnum
DROP TYPE "EntryType";

-- CreateTable
CREATE TABLE "assignments" (
    "id" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "month" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "assignments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "assignments" ADD CONSTRAINT "assignments_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
