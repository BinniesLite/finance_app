/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Wallet` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Wallet_name_key" ON "Wallet"("name");
