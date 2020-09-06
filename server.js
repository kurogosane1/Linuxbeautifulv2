const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const db = require('./Controller/Connection');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use('/', require('./Routes/Router'));

db.authenticate()
	.then(() => console.log('Database connected ...'))
	.catch((err) => console.log(`Error: ` + err));

app.listen(PORT, (req, res) => {
	console.log(`Server is running on ${PORT}`);
});
