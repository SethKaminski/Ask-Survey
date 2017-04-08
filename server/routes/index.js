let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index');

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
router.get('/creat', (req, res, next) => {
    indexController.DisplayCreat(req, res);
  }
);

router.post("/creat", (req, res, next) => {
    indexController.ProcessCreat(req, res);
  }
);

router.post("/type-1", (req, res, next) => {
    indexController.ProcessType1(req, res);
  }
);

/* GET creat page. */
router.get('/do/:id', (req, res, next) => {
    indexController.DisplaySurvey(req, res);
  }
);

module.exports = router;