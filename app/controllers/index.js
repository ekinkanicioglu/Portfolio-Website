
module.exports.index = function (req, res, next) {
    res.send('respond with a resource');
}

module.exports.about = function (req, res, next) {
    res.render('about', { title : "About"});
}

module.exports.home = function (req, res, next) {
    res.render('home',
        {
            title:"home"
        }
    );
}
module.exports.projects = function (req, res, next) {
    res.render('projects',
        {
        }
    );
}
module.exports.services = function (req, res, next) {
    res.render('services',
        {
        }
    );
}
module.exports.contact = function (req, res, next) {
    res.render('contact',
        {
        }
    );
}
