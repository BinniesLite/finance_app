-- DropForeignKey
ALTER TABLE "Wallet" DROP CONSTRAINT "Wallet_userId_fkey";

-- AlterTable
ALTER TABLE "Wallet" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Wallet" ADD CONSTRAINT "Wallet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
