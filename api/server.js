// init server
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const server = express();

// global use
server.use(express.json());
server.use(helmet());
server.use(cors());

// middleware
const restricted = require('../middleware/restricted');

// import routers
const authRouter = require('../api/auth/authRouter');
const usersRouter = require('../api/users/usersRouter');
const valuesRouter = require('../api/values/valuesRouter');

// routers
server.use('/api/auth', authRouter);
server.use('/api/users', restricted, usersRouter);
server.use('/api/values', restricted, valuesRouter);

// fallback
server.use('/', (req, res) => {
    res.status(200).json({ message: "server is alive" });
});

// export server
module.exports = server;