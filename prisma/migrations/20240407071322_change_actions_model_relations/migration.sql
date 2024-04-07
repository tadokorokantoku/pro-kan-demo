/*
  Warnings:

  - You are about to drop the column `taskId` on the `Action` table. All the data in the column will be lost.
  - Added the required column `actionId` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Action" DROP CONSTRAINT "Action_taskId_fkey";

-- AlterTable
ALTER TABLE "Action" DROP COLUMN "taskId";

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "actionId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "Action"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
