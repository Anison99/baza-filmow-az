const db = require('some-db-library');
const bcrypt = require('bcrypt');

const PasswordDAO = {
    save: (userId, password) => {
        const hashedPassword = bcrypt.hashSync(password, 10);
        return db.query('INSERT INTO passwords SET ?', { user_id: userId, password: hashedPassword });
    },
    update: (userId, password) => {
        const hashedPassword = bcrypt.hashSync(password, 10);
        return db.query('UPDATE passwords SET password = ? WHERE user_id = ?', [hashedPassword, userId]);
    },
    compare: (password, hashedPassword) => {
        return bcrypt.compareSync(password, hashedPassword);
    }
};

module.exports = PasswordDAO;
