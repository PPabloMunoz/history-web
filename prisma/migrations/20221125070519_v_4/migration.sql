/*
  Warnings:

  - You are about to drop the `block1_2` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "block1_2";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "firstBlock" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "definition" TEXT NOT NULL
);
