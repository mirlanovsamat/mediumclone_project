import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTags1653234699435 implements MigrationInterface {
    name = 'CreateTags1653234699435'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Tags" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_61aa7408a426fea5dd8416f5a12" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Tags"`);
    }

}
