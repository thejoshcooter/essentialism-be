// config db
const db = require('../../data/dbConfig');

// export helper functions
module.exports = {
    add,
    find,
    findFilter
}   

// helper functions

function find() {
    return db('users')
}

function add(payload) {
    return db('users')
        .insert(payload)
}

function findFilter(filter) {
    return db('users')
        .where(filter)
        .first()
}