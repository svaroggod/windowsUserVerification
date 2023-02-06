const {Router} = require('express');
const router = Router();
const os = require('os');
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {
    let userName = req.body.visitor;
    res.render('index', {
        title: 'Проверить Пользователя',
    });
});

router.post('/', (req, res) => {
    let userName = req.body.visitor;
    os.userInfo().username === userName ? res.redirect('/trueAnswer') : res.redirect('/falseAnswer');
    res.redirect('/trueAnswer');
})

module.exports = router;