const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('You got through!'))

app.listen(12000, () => console.log('Example app listening on port 120000!'));
