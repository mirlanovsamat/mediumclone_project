import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'mediumclone', 
    entities: [__dirname + '/**/*.entity{.ts, .js}'],
    synchronize: false,
    migrations: [__dirname + '/migration/**/*{.ts, .js}'],
    cli: {
        migrationsDir: 'src/migration',
    },
}

export default config;