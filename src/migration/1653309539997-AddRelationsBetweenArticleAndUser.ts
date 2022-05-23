import {MigrationInterface, QueryRunner} from "typeorm";

export class AddRelationsBetweenArticleAndUser1653309539997 implements MigrationInterface {
    name = 'AddRelationsBetweenArticleAndUser1653309539997'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Articles" ADD "authorId" integer`);
        await queryRunner.query(`ALTER TABLE "Articles" ADD CONSTRAINT "FK_c19a94404ba4b53d2ccb7e6e725" FOREIGN KEY ("authorId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Articles" DROP CONSTRAINT "FK_c19a94404ba4b53d2ccb7e6e725"`);
        await queryRunner.query(`ALTER TABLE "Articles" DROP COLUMN "authorId"`);
    }

}
