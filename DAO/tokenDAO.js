const db = require('some-db-library');

const TokenDAO = {
    save: (userId, token) => {
        return db.query('INSERT INTO tokens (user_id, token) VALUES (?, ?)', [userId, token])
    },
    getByUserId: (userId) => {
        return db.query('SELECT * FROM tokens WHERE user_id = ?', [userId])
    },
    getByToken: (token) => {
        return db.query('SELECT * FROM tokens WHERE token = ?', [token])
    },
    delete: (userId, token) => {
        return db.query('DELETE FROM tokens WHERE user_id = ? AND token = ?', [userId, token])
    }
}

const UserDAO = {
    save: (user) => {
        return db.query('INSERT INTO users(name, email, password) VALUES(?, ?, ?)', [user.name, user.email, user.password])
},
    getByEmail: (email) => {
        return db.query('SELECT * FROM users WHERE email = ?', [email])
    },
    update: (userId, user) => {
        return db.query('UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?', [user.name, user.email, user.password, userId])
    },
    delete: (userId) => {
        return db.query('DELETE FROM users WHERE id = ?', [userId])
    }
}

const PasswordDAO = {
    save: (userId, hash, salt) => {
        return db.query('INSERT INTO passwords(user_id, hash, salt) VALUES(?, ?, ?)', [userId, hash, salt])
},
    getByUserId: (userId) => {
        return db.query('SELECT * FROM passwords WHERE user_id = ?', [userId])
    },
    update: (userId, hash, salt) => {
        return db.query('UPDATE passwords SET hash = ?, salt = ? WHERE user_id = ?', [hash, salt, userId])
    }
}

module.exports = {
    TokenDAO,
    UserDAO,
    PasswordDAO
}
