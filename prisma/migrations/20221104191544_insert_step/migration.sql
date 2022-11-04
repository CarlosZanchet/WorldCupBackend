-- CreateTable
CREATE TABLE "steps" (
    "id" TEXT NOT NULL,
    "step" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL,

    CONSTRAINT "steps_pkey" PRIMARY KEY ("id")
);
