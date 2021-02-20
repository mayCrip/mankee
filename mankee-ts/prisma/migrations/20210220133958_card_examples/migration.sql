-- CreateTable
CREATE TABLE "CardExample" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "cardId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CardExample" ADD FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;
