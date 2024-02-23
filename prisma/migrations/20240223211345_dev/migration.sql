-- DropForeignKey
ALTER TABLE "characteristics" DROP CONSTRAINT "characteristics_typeId_fkey";

-- AddForeignKey
ALTER TABLE "characteristics" ADD CONSTRAINT "characteristics_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "types"("id") ON DELETE CASCADE ON UPDATE CASCADE;
