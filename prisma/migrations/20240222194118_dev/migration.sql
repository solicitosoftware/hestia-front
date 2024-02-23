/*
  Warnings:

  - A unique constraint covering the columns `[name,description,typeId]` on the table `characteristics` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "characteristics_name_description_typeId_key" ON "characteristics"("name", "description", "typeId");
