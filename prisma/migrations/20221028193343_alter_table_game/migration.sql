/*
  Warnings:

  - Made the column `id_user` on table `games` required. This step will fail if there are existing NULL values in that column.
  - Made the column `stadium` on table `games` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "games" ALTER COLUMN "id_user" SET NOT NULL,
ALTER COLUMN "stadium" SET NOT NULL;
