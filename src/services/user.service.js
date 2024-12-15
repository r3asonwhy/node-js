const users = require('../data/users');

const getAllUsers = () => {
    return users;
};

const getUserById = (id) => {
    return users.find((user) => user.id === id);
};

module.exports = { getAllUsers, getUserById };
