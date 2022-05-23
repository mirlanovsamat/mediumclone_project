import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateArticles1653308859079 implements MigrationInterface {
    name = 'CreateArticles1653308859079'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Articles" ("id" SERIAL NOT NULL, "slug" character varying NOT NULL, "title" character varying NOT NULL, "descriptioin" character varying NOT NULL DEFAULT '', "body" character varying NOT NULL DEFAULT '', "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "tagList" text NOT NULL, "favoritesCount" integer NOT NULL DEFAULT '0', CONSTRAINT "PK_855d4c8e93574fddefaab9225c6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Articles"`);
    }

}
