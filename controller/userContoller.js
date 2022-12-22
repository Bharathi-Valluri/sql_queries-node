const { response } = require('express')
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
module.exports = { insertData, retrieveData, modifyData, deleteData }
