let mongoose = require('mongoose');
let surveytype1 = require('../models/surveytype1');
let answertype1 = require('../models/answertype1');

let survey = require('../models/survey');


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
    surveytype1.find((err, surveys) => {
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
    let newType1 = new surveytype1({
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

    surveytype1.create(newType1, (err) => {
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

    surveytype1.findById(id, (err, survey) => {
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

module.exports.ProcessSurvey = (req, res)  => {
    let id = req.params.id;

  

    answertype1.findById(id, (err, answer) => {
        if (err) {
            console.error(err);
            res.end(error);
        } else if (answer == null) {
            let newType1 = new answertype1({
                "_id": id,
                "q1answer": ['0','0','0','0'],
                "q2answer": ['0','0','0','0'],
                "q3answer": ['0','0','0','0'],
                "q4answer": ['0','0','0','0'],
                "q5answer": ['0','0','0','0']
            });

            newType1.q1answer[req.body.q1 -1] = 1;
            newType1.q3answer[req.body.q2 -1] = 1;
            newType1.q4answer[req.body.q3 -1] = 1;
            newType1.q5answer[req.body.q4 -1] = 1;
            newType1.q2answer[req.body.q5 -1] = 1;

            answertype1.create(newType1, (err) => {
                if (err) {
                    console.error(err);
                    res.end(error);
                } else {
                    res.redirect('/')
                }
            });
        } else {
            answer.q1answer[req.body.q1 -1]++;
            answer.q3answer[req.body.q2 -1]++;
            answer.q4answer[req.body.q3 -1]++;
            answer.q5answer[req.body.q4 -1]++;
            answer.q2answer[req.body.q5 -1]++;

            answertype1.update({_id: id}, answer, (err) => {
                if (err) {
                    console.error(err);
                    res.end(error);
                } else {
                   res.redirect('/');
                }
            });
        }
    });
}

module.exports.DisplayCreatSurvey = (req, res)  => {
    let sess = req.session;
    sess.survey = new survey({
        "user_id": String,
        "user_name": String,
        "name": String,
        "questions": [] 
    });

    res.render('content/creatsurvey', { 
        title: 'Test',
        survey: "",
        username: req.user ? req.user.username : '' });
}

module.exports.ProcessCreatSurvey = (req, res)  => {
    let sess = req.session;

    if (sess.survey == null){
        res.redirect('/creatsurvey');
    } else {
        console.log(sess.survey);
        if (sess.survey.questions === null){
            sess.survey.questions = [{}];
        }

        if (req.body.submitbutton == "Multiple Choice"){
            sess.survey.questions.push({
                "type":  "mc",
                question: "",
                Options: ["", "", "", ""]
            });
        }
    }

    res.render('content/creatsurvey', { 
        title: 'Test',
        survey: sess.survey,
        username: req.user ? req.user.username : '' });
}