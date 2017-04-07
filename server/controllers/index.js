module.exports.DisplayHome = (req, res)  => {
    res.render('content/index', { 
        title: 'Home',
        username: req.user ? req.user.username : '' });
}

module.exports.DisplayCreat = (req, res)  => {
    res.render('content/creat-survey', { 
        title: 'Creat',
        username: req.user ? req.user.username : '' });
}

module.exports.ProcessCreat = (req, res)  => {
    res.render('content/creat-questions', { 
        title: 'Creat',
        surveyName: req.body.surveyName,
        username: req.user ? req.user.username : '' });
}