/*
  Warnings:

  - You are about to drop the `block1` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "block1";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "block1_2" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "definition" TEXT NOT NULL
);
