const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.PORT_DB,
    database: process.env.DATABASE
});

module.exports = pool;


// const { Client } = require('pg')

// const connectionData = {
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     host: process.env.HOST,
//     port: process.env.PORT_DB,
//     database: process.env.DATABASE
// };

// const client = new Client(connectionData);

// const connectDB = async (query) => {
//     await client.connect()
//     return await client.query(query)
//         .then(response => {
//             client.end();
//             return response.rows;
//         })
//         .catch(err => {
//             client.end()
//             console.log(err);
//         })
// }

// module.exports = {
//     connectDB
// }