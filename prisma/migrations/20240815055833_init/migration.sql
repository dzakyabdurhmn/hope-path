/*
  Warnings:

  - You are about to drop the `Debt` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Rehabilitation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Task` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserTask` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Debt";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Rehabilitation";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Task";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "UserTask";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "debt" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" REAL NOT NULL,
    "type" TEXT NOT NULL,
    "note" TEXT,
    CONSTRAINT "debt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "rehabilitation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "provinsi" TEXT,
    "name" TEXT,
    "type" TEXT
);

-- CreateTable
CREATE TABLE "task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "points" INTEGER NOT NULL,
    "body" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clerkUserId" TEXT,
    "place" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "usertask" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "taskId" INTEGER NOT NULL,
    "note" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "usertask_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "usertask_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "task" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "debt_userId_idx" ON "debt"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "user_clerkUserId_key" ON "user"("clerkUserId");

-- CreateIndex
CREATE INDEX "usertask_userId_idx" ON "usertask"("userId");

-- CreateIndex
CREATE INDEX "usertask_taskId_idx" ON "usertask"("taskId");
