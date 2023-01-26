const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserDAO = require('./DAO/userDAO');
const PasswordDAO = require('./DAO/passwordDAO');
const TokenDAO = require('./DAO/tokenDAO');

class UserManager {
    register(user) {
        return new Promise(async (resolve, reject) => {
            try {
                // Hash the password
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(user.password, salt);
                // Save the user to the database
                const { name, email } = user;
                const savedUser = await UserDAO.save(name, email);
                // Save the hashed password to the password table
                await PasswordDAO.save(savedUser.id, hashedPassword);
                resolve(savedUser);
            } catch (error) {
                reject(error);
            }
        });
    }
    async login(email, password) {
        const user = await UserDAO.findByEmail(email);
        if (!user) throw new Error('Invalid email or password.');
        const isValidPassword = await PasswordDAO.compare(password, user.password);
        if (!isValidPassword) throw new Error('Invalid email or password.');

        const token = jwt.sign({ id: user.id }, 'secret');
        await TokenDAO.save(user.id, token);

        return token;
    }
}

module.exports = UserManager;