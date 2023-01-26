const db = require('some-db-library');

const UserDAO = {
    save: (user) => {
        return db.query('INSERT INTO users SET ?', user);
    },
    update: (user) => {
        return db.query('UPDATE users SET ? WHERE id = ?', [user, user.id]);
    },
    get: (userId) => {
        return db.query('SELECT * FROM users WHERE id = ?', [userId]);
    }
};

module.exports = UserDAO;
