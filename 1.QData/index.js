const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
mongoose.connect('mongodb+srv://lohtester:MLjU7nEYl3Ek50NH@cluster0.knkingd.mongodb.net/tester').then((value) => {
    console.info('Connected to MongoDB');
}).catch((e) => {
    console.error('Connection error', e.message);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/', async (req, res) => {
    res.send('Hello World!')
})
