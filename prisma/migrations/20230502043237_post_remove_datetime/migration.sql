/*
  Warnings:

  - You are about to drop the column `createdOn` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `updatedOn` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "createdOn",
DROP COLUMN "updatedOn";
