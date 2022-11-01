/*
  Warnings:

  - You are about to drop the column `users_id` on the `bolao` table. All the data in the column will be lost.
  - Added the required column `id_user` to the `bolao` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "bolao" DROP CONSTRAINT "bolao_users_id_fkey";

-- AlterTable
ALTER TABLE "bolao" DROP COLUMN "users_id",
ADD COLUMN     "id_user" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "bolao" ADD CONSTRAINT "bolao_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
