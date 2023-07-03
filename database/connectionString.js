const pgp = require('pg-promise')();

const DATABASE_URL = process.env.DATABASE_URL || "postgres://faniejohnsons98:0HsFiL7bkMGV@ep-soft-forest-671324.us-east-2.aws.neon.tech/neondb?sslmode=require"
const config ={  
    connectionString : DATABASE_URL
}
if(process.env.NODE_ENV == 'production'){
    config.ssl ={
        rejectUnauthorized: false
    }
}


const db = pgp(config);
module.exports = db;
