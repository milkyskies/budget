/*
  Warnings:

  - Added the required column `system_type` to the `entries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `budget_id` to the `external_parties` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "EntrySystemType" AS ENUM ('NORMAL', 'INITIAL_BALANCE');

-- AlterTable
ALTER TABLE "entries" ADD COLUMN     "system_type" "EntrySystemType" NOT NULL;

-- AlterTable
ALTER TABLE "external_parties" ADD COLUMN     "budget_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "external_parties" ADD CONSTRAINT "external_parties_budget_id_fkey" FOREIGN KEY ("budget_id") REFERENCES "budgets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
