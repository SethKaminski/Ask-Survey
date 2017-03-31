let express = require('express');
let router = express.Router();

let passport = require('passport');
let UserModel = require('../models/users');
let User = UserModel.User;

let indexController = require('../controllers/index');

//check if authenticated
function requireAuth(req, res, next) {
  if(!req.isAuthenticated()) {
    return res.redirect('auth/login');
  }
  next();
}

/* GET home page. */
router.get('/', (req, res, next) => {
  indexController.DisplayHome(req, res);
});

/* GET about page. */
router.get('/about', (req, res, next) => {
  indexController.DisplayAbout(req, res);
});

/* GET Projects page. */
router.get('/projects', (req, res, next) => {
  indexController.DisplayProjects(req, res);
});

/* GET Services page. */
router.get('/services', (req, res, next) => {
  indexController.DisplayServices(req, res);
});

/* GET Contact page. */
router.get('/contact', (req, res, next) => {
  indexController.DisplayContact(req, res);
});

module.exports = router;