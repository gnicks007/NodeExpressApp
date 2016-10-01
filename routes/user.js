
/*
 * GET users listing.
 */
var count=0; //just to see if I can use closure to count the number of times the button is clicked. this works!

exports.userfunc = function(req, res){
  count+=1;
  res.send("Inside user file, function "+ count);
};

exports.func1 = function(req, res){
    res.send("Inside user file, function func1");
};

exports.func2 = function(req, res){
    res.send("Inside user file, function func2");
};
