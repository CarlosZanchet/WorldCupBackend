-- CreateTable
CREATE TABLE "requests" (
    "id" TEXT NOT NULL,
    "id_user_request" TEXT NOT NULL,
    "id_bolao" TEXT NOT NULL,
    "id_administrator" TEXT NOT NULL,

    CONSTRAINT "requests_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "requests" ADD CONSTRAINT "requests_id_user_request_fkey" FOREIGN KEY ("id_user_request") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "requests" ADD CONSTRAINT "requests_id_bolao_fkey" FOREIGN KEY ("id_bolao") REFERENCES "bolao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
