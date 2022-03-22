/*
 *         I'm using: https://developer.nrel.gov/docs/solar/solar-resource-v1/
 *         For the logo hosting: https://welberth-marques.imgbb.com/
 */

var express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

// the static we want is the css file
app.use(express.static(__dirname + '/public'));

app.listen(8000, () => {
	console.log("Server opened! Use: http://localhost:8000");
});