/*
  Warnings:

  - Added the required column `url_image` to the `bolao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usersId` to the `bolao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bolao" ADD COLUMN     "url_image" TEXT NOT NULL,
ADD COLUMN     "usersId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "bolao" ADD CONSTRAINT "bolao_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
