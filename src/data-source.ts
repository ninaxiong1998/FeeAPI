import { join } from "path"
import "reflect-metadata"
import { DataSource } from "typeorm"
import { Fee } from "./entity/Fee"
import { Patient } from "./entity/Patient"
import { Nation } from "./entity/Nation"

export const AppDataSource = new DataSource({
    type: "mariadb",
    host: process.env.DB_HOST || "127.0.0.1",
    port: (process.env.DB_PORT as unknown) as number || 3306,
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "hix1234",
    database: process.env.DB_NAME || "feeapi",
    synchronize: true,
    logging: false,
    entities: [Fee, Patient, Nation],
    migrations: [],
    subscribers: [],
})
