const express = require('express');

const app = express()

const port = 3000

app.use('/',express.static('public'));

const budget = {

    myBudget : [

        {
            title:'Restaurant',
            budget: 50,
            color: '#FF5733'
        },
        {
            title:'Groceries',
            budget: 100,
            color: '#DDDF39'
        },
        {
            title:'Rent',
            budget: 400,
            color: '#84DF39'
        },
        {
            title:'Travel',
            budget: 500,
            color: '#39E0C2'
        },
        {
            title:'Utilities',
            budget: 300,
            color: '#3F7DEA'
        },
        {
            title:'Shopping',
            budget: 300,
            color: '#C354F0'
        },
        {
            title:'Others',
            budget: 100,
            color: '#000000'
        }
    ]

}

app.get('/budget',(req, res) => {
    res.json(budget);
});

app.get('/hello', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log('Example app listening at http://localhost:3000');
});