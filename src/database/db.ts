import pg from "pg";

const { Pool } = pg;
const config = {
    connectionString: process.env.DB_URL
};

const connection = new Pool(config);
export default connection;
