const express = require('express');
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/blog')

const app = express();

const dbURi = 'mongodb+srv://garystar:Garystar617@cluster0.mste1.mongodb.net/node-tuts?retryWrites=true&w=majority'
mongoose.connect(dbURi, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))

app.set('view engine', 'ejs')
// app.set('set', 'myviews')

;

app.use(express.static('public'))
app.use(morgan('dev'))

// app.get('/add-blog',(req,res) =>{
//     const blog = new Blog({
//         title: 'new blog',
//         snippet: 'about my new blog',
//         body: ' more about th blo'
//     })
//     blog.save()
//         .then((result) =>{
//             res.send(result)
//         })
//         .catch((err) =>{
//             console.log(err)
//         })
// })

// app.get('/all-blogs',(req,res) =>{
//     Blog.find()
//         .then((result) =>{
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// })

// app.get('/single-blog',(req,res) =>{
//     Blog.findById('61878db6f5b7afbf950c561d')
//         .then((result) =>{
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err)
//         })

// })


// app.use((req,res,next) => {
//     console.log('new request made:');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// })

app.use((req,res,next) => {
    console.log('next middlewear');
    next();
})

app.get('/',(req,res) => {
    res.redirect('/blogs')
    // const blogs = [
    //     {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //   ];
     
    // // res.send('<p> home page </p>');
    // // res.sendFile('./views/index.html',{root: __dirname })
    // res.render('index', {title : 'Home', blogs })
})
app.get('/about',(req,res) => {
    // res.send('<p> about page </p>');
    // res.sendFile('./views/about.html',{root: __dirname })
    res.render('about', {title : 'About'})

})

app.get('/blogs', (req,res) =>{
    Blog.find().sort({createdAt: -1})
        .then((result) =>{
            res.render('index', {title: 'All Blogs', blogs: result})
        })
        .catch((err) =>{
            console.log(err)
        })
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