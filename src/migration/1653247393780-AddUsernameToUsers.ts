import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUsernameToUsers1653247393780 implements MigrationInterface {
    name = 'AddUsernameToUsers1653247393780'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" ADD "username" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "username"`);
    }

}
