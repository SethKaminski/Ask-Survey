let mongoose = require('mongoose');
let type1 = require('../models/surveytype1');

module.exports.DisplayHome = (req, res)  => {
    res.render('content/index', { 
        title: 'Home',
        username: req.user ? req.user.username : '' });
}

module.exports.DisplayCreat = (req, res)  => {
    res.render('content/survey-type', { 
        title: 'Creat',
        username: req.user ? req.user.username : '' });
}

module.exports.ProcessCreat = (req, res)  => {
    res.render('content/type-1', { 
        title: 'Creat',
        surveyName: req.body.surveyName,
        username: req.user ? req.user.username : '' });
}

module.exports.DisplaySurveys = (req, res)  => {
    type1.find((err, surveys) => {
        if (err) {
            return console.error(err);
        } else {
            res.render('content/surveys', { 
                title: 'Surveys',
                surveyName: req.body.surveyName,
                surveys: surveys,
                username: req.user ? req.user.username : '' });
        }
    });
}

module.exports.ProcessType1 = (req, res)  => {
    let newType1 = new type1({
        "user_id": "String",
        "user_name": "String",
        "name": req.body.surveyName,
        "type": "type1",
        "question1": { 
            "question": req.body.q1,
            "Option1": req.body.q1o1,
            "Option2": req.body.q1o2,
            "Option3": req.body.q1o3,
            "Option4": req.body.q1o4,
            },
        "question2": { 
            "question": req.body.q2,
            "Option1": req.body.q2o1,
            "Option2": req.body.q2o2,
            "Option3": req.body.q2o3,
            "Option4": req.body.q2o4,
            },
        "question3": { 
            "question": req.body.q3,
            "Option1": req.body.q3o1,
            "Option2": req.body.q3o2,
            "Option3": req.body.q3o3,
            "Option4": req.body.q3o4,
            },
        "question4": { 
            "question": req.body.q4,
            "Option1": req.body.q4o1,
            "Option2": req.body.q4o2,
            "Option3": req.body.q4o3,
            "Option4": req.body.q4o4,
            },
        "question5": { 
            "question": req.body.q5,
            "Option1": req.body.q5o1,
            "Option2": req.body.q5o2,
            "Option3": req.body.q5o3,
            "Option4": req.body.q5o4,
            },
    });

    type1.create(newType1, (err) => {
        if (err) {
            console.error(err);
            res.end(error);
        } else {
            res.redirect('/')
        }
    });
}

module.exports.DisplaySurvey = (req, res)  => {
    let id = req.params.id;

    type1.findById(id, (err, survey) => {
        if (err) {
            console.error(err);
            res.end(error);
        } else {
            res.render('content/dotype1', {
                title: 'Survey ' + survey.name,
                survey: survey,
                username: req.user ? req.user.username : '' });
        }
    });
}