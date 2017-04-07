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

/* GET creat page. */
router.get('/creat', (req, res, next) => {
    indexController.DisplayCreat(req, res);
  }
);

router.post("/creat-questions", (req, res, next) => {
    indexController.ProcessCreat(req, res);
  }
);

module.exports = router;