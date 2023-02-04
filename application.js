const {urlencoded} = require('express');
const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');
const indexRoutes = require('./routes/index');
const trueAnsRoutes = require('./routes/trueAns');
const falseAnsRouters = require('./routes/falseAns');

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
app.use('/trueAns', trueAnsRoutes);
app.use('/falseAns', falseAnsRouters);


const PORT = process.env.PORT || 8000;

app.listen(8000, () => {
    console.log(`Server is running on port ${PORT}`);
});