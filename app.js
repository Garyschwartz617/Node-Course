const express = require('express');

const app = express();

app.set('view engine', 'ejs')
// app.set('set', 'myviews')

app.listen(3000);

app.get('/',(req,res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
     
    // res.send('<p> home page </p>');
    // res.sendFile('./views/index.html',{root: __dirname })
    res.render('index', {title : 'Home', blogs })
})
app.get('/about',(req,res) => {
    // res.send('<p> about page </p>');
    // res.sendFile('./views/about.html',{root: __dirname })
    res.render('about', {title : 'About'})

})
app.get('/blogs/create',(req,res) => {
    res.render('create', {title : 'Create a new blog'})
})
// app.get('/about-us', (req,res) => {
//     res.redirect('/about')
// })

app.use((req, res) => {
    res.status(404).render('404', {title : '404'})
})