module.exports.DisplayHome = (req, res)  => {
    res.render('content/index', { 
        title: 'Home',
        username: req.user ? req.user.username : '' });
}

module.exports.DisplayAbout = (req, res) => {
    res.render('content/about', { 
        title: 'About',
        username: req.user ? req.user.username : '' });
}

module.exports.DisplayProjects = (req, res) => {
    res.render('content/projects', { 
        title: 'Projects',
        username: req.user ? req.user.username : '' });
}

module.exports.DisplayServices = (req, res) => {
    res.render('content/services', { 
        title: 'Services',
        username: req.user ? req.user.username : '' });
}

module.exports.DisplayContact = (req, res) => {
    res.render('content/contact', { 
        title: 'Contact',
        username: req.user ? req.user.username : '' });
}