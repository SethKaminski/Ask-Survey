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

/* GET creat page. */
router.get('/creat', userController.RequireAuth, (req, res, next) => {
    indexController.DisplayCreat(req, res);
  }
);

router.post("/creat",  userController.RequireAuth, (req, res, next) => {
    indexController.ProcessCreat(req, res);
  }
);

router.post("/type-1",  userController.RequireAuth, (req, res, next) => {
    indexController.ProcessType1(req, res);
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

router.get('/creatsurvey', (req, res, next) => {
    indexController.DisplayCreatSurvey(req, res);
  }
);

router.post('/creatsurvey', (req, res, next) => {
    indexController.ProcessCreatSurvey(req, res);
  }
);

module.exports = router;