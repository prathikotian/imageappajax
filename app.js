const { ppid } = require('process')

const  express = require('express'),
        app = express(),
        PORT = process.env.PORT || 3000

app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
})