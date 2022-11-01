/*
  Warnings:

  - You are about to alter the column `home_score` on the `games` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `outside_score` on the `games` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "games" ALTER COLUMN "home_score" SET DATA TYPE INTEGER,
ALTER COLUMN "outside_score" SET DATA TYPE INTEGER;
