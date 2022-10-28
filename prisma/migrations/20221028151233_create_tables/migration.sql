-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bolao" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" VARCHAR NOT NULL,

    CONSTRAINT "bolao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bolao_users" (
    "id" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "id_bolao" TEXT NOT NULL,

    CONSTRAINT "bolao_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "games" (
    "id" TEXT NOT NULL,
    "id_user" TEXT,
    "date" TIMESTAMP(6) NOT NULL,
    "stadium" VARCHAR,
    "group_team" VARCHAR NOT NULL,
    "home_score" BIGINT,
    "outside_score" BIGINT,
    "id_home_team" TEXT,
    "id_outside_team" TEXT,

    CONSTRAINT "games_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "teams" (
    "id" TEXT NOT NULL,
    "name" VARCHAR NOT NULL,
    "group_team" VARCHAR NOT NULL,
    "urlflag" TEXT NOT NULL,

    CONSTRAINT "teams_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- AddForeignKey
ALTER TABLE "bolao_users" ADD CONSTRAINT "fk_id_bolao" FOREIGN KEY ("id_bolao") REFERENCES "bolao"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "bolao_users" ADD CONSTRAINT "fk_id_user" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "games" ADD CONSTRAINT "fk_id_home_team" FOREIGN KEY ("id_home_team") REFERENCES "teams"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "games" ADD CONSTRAINT "fk_id_outside_team" FOREIGN KEY ("id_outside_team") REFERENCES "teams"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "games" ADD CONSTRAINT "fk_id_user" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
