/*
  Warnings:

  - You are about to alter the column `home_result` on the `results` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `outside_result` on the `results` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "results" ALTER COLUMN "home_result" SET DATA TYPE INTEGER,
ALTER COLUMN "outside_result" SET DATA TYPE INTEGER;
