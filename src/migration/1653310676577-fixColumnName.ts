import {MigrationInterface, QueryRunner} from "typeorm";

export class fixColumnName1653310676577 implements MigrationInterface {
    name = 'fixColumnName1653310676577'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Articles" RENAME COLUMN "descriptioin" TO "description"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Articles" RENAME COLUMN "description" TO "descriptioin"`);
    }

}
