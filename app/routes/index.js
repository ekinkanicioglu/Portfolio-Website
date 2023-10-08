var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');

/* GET home page. */
//link to controllers
router.get('/', indexController.home);

router.get('/about', function (req, res, next) {
    res.render('about',indexController.about,{
        content: about.content
    }); // Pass the content to the view
});
router.get('/projects', indexController.projects);

router.get('/services', indexController.services);

router.get('/contact', indexController.contact);

module.exports = router;