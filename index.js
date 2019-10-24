// import server
const server = require('./api/server');

// config
const port = process.env.PORT || 5000;

// listener
server.listen(port, () => console.log(`Server listening on port ${port}`));