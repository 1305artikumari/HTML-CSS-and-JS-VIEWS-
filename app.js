const express= require('express');
const bodyParser = require('body-parser');
const app=express();

const path = require('path')


const adminRoutes = require('./routes/admin')
const shopRoutes=require('./routes/shop')
const contactusRoutes =require('./routes/contact')
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(contactusRoutes);

app.get('/success', (req, res) => {
    console.log('Accessing /success route');
    res.status(200).sendFile(path.join(__dirname, 'views', 'success.html'));
});


app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

// Handle GET requests for '/success'
// app.get('/success', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'success.html'));
// });




app.listen(3000)
