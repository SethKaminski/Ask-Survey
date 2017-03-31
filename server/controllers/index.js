module.exports.DisplayHome = (req, res)  => {
    res.render('content/index', { 
        title: 'Home',
        username: req.user ? req.user.username : '' });
}