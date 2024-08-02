/*
  Warnings:

  - A unique constraint covering the columns `[category_id,month]` on the table `assignments` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE INDEX "assignments_category_id_month_idx" ON "assignments"("category_id", "month");

-- CreateIndex
CREATE UNIQUE INDEX "assignments_category_id_month_key" ON "assignments"("category_id", "month");
