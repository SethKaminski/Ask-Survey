// modules required for routing
let express = require('express');
let router = express.Router();
let userController = require('../controllers/user');

/* GET /login - render the login view */
router.get('/login', (req, res, next) => {
    userController.DisplayLogin(req, res);
  }
  // POST /login - process the login page
).post('/login', userController.ProcessLogin());

// GET /register - render the register page
router.get('/register', (req, res, next) =>{
    userController.DisplayRegister(req, res);
  }
// POST /register - process the registration view
).post('/register', (req, res, next) => {
    userController.ProcessRegister(req, res);
  }
);

// GET /logout - logout the user and redirect to the home page
router.get('/logout', (req, res, next)=>{
    userController.ProcessLogout(req, res);
  }
);

module.exports = router;