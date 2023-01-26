const express = require('express');
const router = express.Router();
const userManager = require('./REST/user.manager.js');

router.post('/login', async (req, res) => {
    try {
        const token = await UserManager.login(req.body.email, req.body.password);
        res.status(200).send({ token });
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;
