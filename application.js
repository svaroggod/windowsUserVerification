const {urlencoded} = require('express');
const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');
const indexRoutes = require('./routes/index');
const trueAnswerRoutes = require('./routes/trueAnswer');
const falseAnswerRouters = require('./routes/falseAnswer');

const app = express();


const hbs = expressHbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});


app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.urlencoded({extended: false}));
app.use('/', indexRoutes);
app.use('/trueAnswer', trueAnswerRoutes);
app.use('/falseAnswer', falseAnswerRouters);


const PORT = process.env.PORT || 8000;

app.listen(8000, () => {
    console.log(`Server is running on port ${PORT}`);
});