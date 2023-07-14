/*
  Warnings:

  - You are about to drop the column `payments` on the `Wallet` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Wallet" DROP COLUMN "payments",
ALTER COLUMN "balance" DROP NOT NULL;
