const express = require('express');

const app = express();

const port = 8000;

app.set('view engine', 'ejs');

app.use(express.urlencoded());

app.use(express.static('public'));

app.get('/',(req , res) => {
    return res.render('dashboard')
})

app.get('/chart',(req , res) => {
    return res.render('chart')
})

app.get('/buttons',(req , res) => {
    return res.render('buttons')
})

app.get('/dropdowns',(req , res) => {
    return res.render('dropdowns')
})

app.get('/typography',(req , res) => {
    return res.render('typography')
})

app.get('/font-awesome',(req , res) => {
    return res.render('font-awesome')
})

app.get('/form-element',(req , res) => {
    return res.render('form-element')
})

app.get('/tables',(req , res) => {
    return res.render('tables')
})

app.get('/blank-page',(req , res) => {
    return res.render('blank-page')
})

app.get('/error-404',(req , res) => {
    return res.render('error-404')
})

app.get('/login',(req , res) => {
    return res.render('login')
})

app.get('/register',(req , res) => {
    return res.render('register')
})

app.get('/error-500',(req , res) => {
    return res.render('error-500')
})

app.get('/documantation',(req , res) => {
    return res.render('documantation')
})


app.listen(port, (err) => {

    if (err) {
        console.log(err);
    }
    else {
        console.log(`Server Running On Port ${port}`);
        console.log(`http://localhost:${port}`);
    }
});