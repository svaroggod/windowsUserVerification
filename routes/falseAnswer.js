const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('falseAnswer', {
        title: 'Пользователь не найден',
    });
});

module.exports = router;