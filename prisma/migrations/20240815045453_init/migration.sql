-- CreateTable
CREATE TABLE "Debt" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" REAL NOT NULL,
    "type" TEXT NOT NULL,
    "note" TEXT,
    CONSTRAINT "Debt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Rehabilitation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "provinsi" TEXT,
    "name" TEXT,
    "type" TEXT
);

-- CreateTable
CREATE TABLE "Task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "points" INTEGER NOT NULL,
    "body" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clerkUserId" TEXT,
    "place" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "UserTask" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "taskId" INTEGER NOT NULL,
    "note" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "UserTask_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserTask_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT
);

-- CreateIndex
CREATE INDEX "Debt_userId_idx" ON "Debt"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkUserId_key" ON "User"("clerkUserId");

-- CreateIndex
CREATE INDEX "UserTask_userId_idx" ON "UserTask"("userId");

-- CreateIndex
CREATE INDEX "UserTask_taskId_idx" ON "UserTask"("taskId");
