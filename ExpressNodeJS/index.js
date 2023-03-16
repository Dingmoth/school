const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.set('views', './views');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/courses', (request, result) =>{
    result.render('pages/courses');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

app.post('/courses', (req, res) => {
    console.log(req.body);

    req.send('ok');
});