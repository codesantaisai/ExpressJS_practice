const express = require('express');
const path = require('path')
const app = express();
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin')
const shopPage = require('./routes/shop')
app.set('view engine', 'pug');


app.use(bodyParser.urlencoded())

app.use(express.static(path.join(__dirname,'public')))
app.use('/admin',adminRoutes)
app.use('/',shopPage)


app.use((req,res,next)=>{
    res.status(404).render('404',{
        docTitle:'Page not found'
    })
});

app.listen(3000, () => {
    console.log("server running on port 3000");
})