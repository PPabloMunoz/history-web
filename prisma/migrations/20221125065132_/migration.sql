/*
  Warnings:

  - The primary key for the `block1_2` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_block1_2" (
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT 1,
    "name" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "definition" TEXT NOT NULL
);
INSERT INTO "new_block1_2" ("definition", "id", "name", "year") SELECT "definition", "id", "name", "year" FROM "block1_2";
DROP TABLE "block1_2";
ALTER TABLE "new_block1_2" RENAME TO "block1_2";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
