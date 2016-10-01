
/*
 * GET home page.
 */


exports.index = function(req, res){
//  res.render('index', { title: 'Express' });
    res.render('index'); // does render automatically look in the views folder to find the filename with the
                         // template engine termination?
};


exports.func3 = function(req, res){
    res.send("Inside index file, function func3");
};