/*
  Warnings:

  - You are about to drop the column `userId` on the `roles` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "roles" DROP CONSTRAINT "roles_userId_fkey";

-- AlterTable
ALTER TABLE "roles" DROP COLUMN "userId";

-- CreateTable
CREATE TABLE "rolesUser" (
    "userId" TEXT NOT NULL,
    "rolesId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "rolesUser_pkey" PRIMARY KEY ("userId","rolesId")
);

-- AddForeignKey
ALTER TABLE "rolesUser" ADD CONSTRAINT "rolesUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rolesUser" ADD CONSTRAINT "rolesUser_rolesId_fkey" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
