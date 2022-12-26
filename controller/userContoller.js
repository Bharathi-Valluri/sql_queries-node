const format = require('pg-format')
const { client } = require('../db')

const insertData = async (req, res) => {
  const { name, address } = req.body
  try {
    const resp = await client.query(
      'INSERT INTO customers (name, address) VALUES ($1, $2)',
      [name, address]
    )
    console.log(`Added a customer with the name ${name}`)
    res.send(resp)
  } catch (error) {
    console.log(error)
  }
}
const retrieveData = async (req, res) => {
  try {
    const resp = await client.query('SELECT * FROM customers')
    console.log(resp.rows)
    res.send(resp)
  } catch (error) {
    console.log(error)
  }
}
const modifyData = async (req, res) => {
  const { id, name } = req.body
  try {
    const resp = await client.query(
      'UPDATE customers SET name = $1 WHERE id = $2',
      [name, id]
    )
    console.log(`Updated the customer name to ${name}`)
    res.send(resp)
  } catch (error) {
    console.log(error)
  }
}
const deleteData = async (req, res) => {
  const { id } = req.body
  try {
    const resp = await client.query(`DELETE  FROM customers  WHERE id = ${id}`)
    console.log(`Deleted the customer name to ${id}`)
    res.send(resp)
  } catch (error) {
    console.log(error)
  }
}
const bulkInsertion = async (req, res) => {
  try {
    const values = req.body
    let array = []
    values.map(item => {
      let data = [(name = item.name), (address = item.address)]
      console.log('data', data)
      array.push(data)
    })

    const sql = `INSERT INTO customers(name,address) VALUES %L returning id`
    const formatedQuery = format(sql, array)
    console.log(formatedQuery)

    console.log('array values', array)
    await client.query(formatedQuery, (err, resp) => {
      // console.log(resp)
      res.send(resp)
    })
  } catch (error) {
    console.log('unable to insert record into db')

    console.log(error.message)

    res.status(400).json({
      message: 'unable to insert record into db'
    })
  }
}
const bulkUpdation = async (req, res) => {
  try {
    const values = req.body
    var arrayOfValues = []
    values.map(res => {
      var data = [(name = res.name), (id = res.id)]
      arrayOfValues.push(data)
    })
    arrayOfValues.forEach(element => {
      console.log(element[0], element[1])
      const sqlQuery = `update customers set name='${element[0]}' where id='${element[1]}'`
      client.query(sqlQuery, (err, resp) => {
        if (err) throw err
        console.log(resp)
      })
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      response: null,
      message: 'Failed to update!...'
    })
  }
}

module.exports = {
  insertData,
  retrieveData,
  modifyData,
  deleteData,
  bulkInsertion,
  bulkUpdation
}
