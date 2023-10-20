const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json())
app.use(cors())

app.use('/api/groupchat', require('./routes/Group'))
app.use('/api/user', require('./routes/User'))
// app.use('/api/groupchat', require('./routes/Group'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})