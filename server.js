const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const bodyParser = require('body-parser')

app.use(express.static(__dirname + '/public/build'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    'extended': 'true'
}))

//Усі адреси регулюються з index.html
app.get('*', function (req, res) {
	res.sendFile(__dirname + '/public/build/index.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
