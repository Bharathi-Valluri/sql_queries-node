const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432
})

client.connect(function (err) {
  if (err) throw err
  console.log('Connected!')
  // var sql =
  //   'CREATE TABLE customers (id SERIAL PRIMARY KEY,name VARCHAR(255), address VARCHAR(255))'
  // client.query(sql, function (err, result) {
  //   if (err) throw err
  //   console.log('Table created')
  // })
})
module.exports = { client }
// module.exports = client
