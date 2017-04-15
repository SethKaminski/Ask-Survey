let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index');

let userController = require('../controllers/user');

/* GET home page. */
router.get('/', (req, res, next) => {
  indexController.DisplayHome(req, res);
});

/* GET about page. */
router.get('/about', (req, res, next) => {
  indexController.DisplayAbout(req, res);
});

/* GET Surveys page. */
router.get('/surveys', (req, res, next) => {
    indexController.DisplaySurveys(req, res);
  }
);

router.get('/do/:id', (req, res, next) => {
    indexController.DisplaySurvey(req, res);
  }
);

router.post('/do/:id', (req, res, next) => {
    indexController.ProcessSurvey(req, res);
  }
);

router.get('/answer/:id', (req, res, next) => {
    indexController.DisplayAnswer(req, res);
  }
);

router.get('/createsurvey', userController.RequireAuth,  (req, res, next) => {
    indexController.DisplayCreateSurvey(req, res);
  }
);

router.post('/createsurvey', userController.RequireAuth, (req, res, next) => {
    indexController.ProcessCreateSurvey(req, res);
  }
);

module.exports = router;