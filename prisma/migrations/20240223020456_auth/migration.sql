/*
  Warnings:

  - You are about to drop the `rolesUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "rolesUser" DROP CONSTRAINT "rolesUser_rolesId_fkey";

-- DropForeignKey
ALTER TABLE "rolesUser" DROP CONSTRAINT "rolesUser_userId_fkey";

-- DropTable
DROP TABLE "rolesUser";

-- CreateTable
CREATE TABLE "_rolesTouser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_rolesTouser_AB_unique" ON "_rolesTouser"("A", "B");

-- CreateIndex
CREATE INDEX "_rolesTouser_B_index" ON "_rolesTouser"("B");

-- AddForeignKey
ALTER TABLE "_rolesTouser" ADD CONSTRAINT "_rolesTouser_A_fkey" FOREIGN KEY ("A") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_rolesTouser" ADD CONSTRAINT "_rolesTouser_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
