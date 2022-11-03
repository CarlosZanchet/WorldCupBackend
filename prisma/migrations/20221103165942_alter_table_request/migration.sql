-- AddForeignKey
ALTER TABLE "requests" ADD CONSTRAINT "requests_id_user_request_fkey" FOREIGN KEY ("id_user_request") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
