/*
  Warnings:

  - You are about to drop the column `usersId` on the `bolao` table. All the data in the column will be lost.
  - Added the required column `users_id` to the `bolao` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "bolao" DROP CONSTRAINT "bolao_usersId_fkey";

-- AlterTable
ALTER TABLE "bolao" DROP COLUMN "usersId",
ADD COLUMN     "users_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "bolao" ADD CONSTRAINT "bolao_users_id_fkey" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
