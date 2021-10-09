const express = require('express')
const app = express()

const ip = "localhost"
const port = 8000

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})