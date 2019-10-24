// config usersModel
const db = require('../../data/dbConfig');

// export helper functions
module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    findValues,
    removeValues
};

// helper functions
function find() {
    return db('users')
        .select('id', 'first_name', 'last_name', 'email')
}

function findById(id) {
    return db('users')
        .where({ id })
        .select('id', 'first_name', 'last_name', 'email')
        .first()
}

function add(payload) {
    return db('users')
        .insert(payload)
}

function update(id, payload) {
    return db('users')
        .where({ id })
        .update(payload)
}

function remove(id) {
    return db('users')
        .where('id', '2')
        .del()
}


function findValues(id) {
    return db('users as u')
        .select('u.id as userId', 'v.name')
        .join('users_values as j', 'j.user_id', '=', 'u.id')
        .join('values as v', 'v.id', '=', 'j.value_id')
        .where('userId', id)
        
}

function removeValues(id, valueId) {
    return db('users_values')
        .where({ user_id: id, value_id: valueId })
        .del()
}