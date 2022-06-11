const express = require("express");
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const { restart } = require("nodemon");
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts', (req, res) => {

    const id = randomBytes(4).toString('hex');

    const { title } = req.body;

    posts[id] = {
        id, title
    };

    console.log(`add new post -> ${title}`);
    res.status(201).send(posts[id]);

});

app.listen(4000, () => {
    console.log('Listening on 4000');
});