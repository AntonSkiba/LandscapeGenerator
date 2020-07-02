const express = require('express');
const bodyParser = require('body-parser');

let port = process.env.PORT;
if (port == null || port == '') {
    port = 3000;
}

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, function() {
    console.log(`server started on port=${port}`);
});