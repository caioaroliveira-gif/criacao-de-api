import 'dotenv/config'
// @ts-expect-error The project does not currently include declarations for `pg`.
import pg from 'pg'

const {Pool} = pg

export const pool = new Pool()

pool.on("error", (error) => {
    console.error(
        "Conexão iddle encontrada", error
    );

    process.exit(1)
})