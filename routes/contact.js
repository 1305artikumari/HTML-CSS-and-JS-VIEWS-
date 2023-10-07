const express = require('express')

const path = require('path')

const router = express.Router();
const rootDir = require('../util/path')

router.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact.html'))
});

// Handle POST requests when the contact form is submitted
router.post('/contactus', (req, res, next) => {
    // Process the form data here (you can save it to a database or perform other actions)

    // Redirect to the success page
    res.redirect('/success');
});


// router.get('/success',(req,res,next)=>{
//     res.sendFile(path.join(rootDir,'views','success.html'))
// });



module.exports = router