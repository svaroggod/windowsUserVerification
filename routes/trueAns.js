const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('trueAns', {
        title: 'Пользователь найден',
    });
});


module.exports = router;    