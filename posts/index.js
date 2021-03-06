const express = require("express");
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts/create', async (req, res) => {
    const { title } = req.body;

    if (!title || title === '') {
        return res.send({});
    }

    const id = randomBytes(4).toString('hex');

    posts[id] = {
        id,
        title
    };

    await axios.post('http://event-bus-srv:4005/events', {
        type: 'PostCreated',
        data: {
            id,
            title
        }
    });

    console.table(posts);
    res.status(201).send(posts[id]);
});

app.post('/events', (req, res) => {
    console.log('received event: ', req.body.type);
    res.send({});
});

app.listen(4000, () => {
    console.log('Api Version: 0.0.1')
    console.log('Listening on 4000');
});