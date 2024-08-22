import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const myServer = express();
const portUsed = 5000;

const upload = multer({ dest: 'public/images/' });

myServer.use(bodyParser.urlencoded({ extended: true }));
myServer.use(express.static('public'));

let posts = [];

myServer.get('/',(req,res)=>{
    res.render('welcome.ejs')
})

myServer.get('/sign',(req,res)=>{
    res.render('register.ejs')
})

myServer.get('/home', (req, res) => {
    res.render('index.ejs', { posts: posts.map(post => ({
        ...post,
        shortContent: post.content.substring(0, 250)
    })) });
});

myServer.get('/post/:id', (req, res) => {
    const post = posts.find(p => p.id === req.params.id);
    res.render('post.ejs', { post });
});

myServer.get('/create', (req, res) => {
    res.render('create.ejs');
});

myServer.post('/create', upload.single('image'), (req, res) => {
    const { title, content } = req.body;
    const image = req.file ? `/images/${req.file.filename}` : '';
    const newPost = {
        id: Date.now().toString(),
        title,
        content,
        image
    };
    posts.push(newPost);
    res.redirect('/home');
});

myServer.get('/contact',(req,res)=>{
    res.render('contact.ejs')
})

myServer.get('/admin', (req, res) => {
    res.render('admin.ejs', { posts });
});

myServer.post('/admin/edit/:id', upload.single('image'), (req, res) => {
    const post = posts.find(p => p.id === req.params.id);
    post.title = req.body.title;
    post.content = req.body.content.substring(0, 150);
    if (req.file) {
        if (post.image) {
            fs.unlinkSync(path.join(__dirname, 'public', post.image));
        }
        post.image = `/images/${req.file.filename}`;
    }
    res.redirect('/admin');
});


myServer.post('/admin/delete/:id', (req, res) => {
    posts = posts.filter(p => p.id !== req.params.id);
    res.redirect('/admin');
});

myServer.listen(portUsed, () => {
    console.log(`The server is currently running at port ${portUsed}`);
});
