const express = require('express');
const router = require('./router');

const app = express();

const PORT = 3000;

app.use(express.json());

Object.entries(router).forEach(([route, router]) => app.use(route, router))

app.get('/doc', (req, res) => {
    res.json(require('./apiDoc'));
})

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
