var  = require("../models/");

// List of all s
exports._list = async function (req, res) {
  try {
    thes = await .find();
    res.send(thes);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// for a specific .
exports._detail = async function (req, res) {
  console.log("detail"  + req.params.id) 
    try { 
        result = await .findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
};

// Handle  create on POST.
exports._create_post = async function (req, res) {
  let document = new ();
  // We are looking for a body, since POST does not have query parameters.
  // Even though bodies can be in many different formats, we will be picky
  // and require that it be a json object
  document._brand = req.body._brand;
  document.size = req.body.size;
  document.price = req.body.price;
  console.log(req.body);
  try {
    let result = await document.save();
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// Handle  delete form on DELETE.
exports._delete =async function (req, res) {
  console.log("delete "  + req.params.id) 
    try { 
        result = await .findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
};

// Handle  update form on PUT.
exports._update_put =async function (req, res) {
  console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await .findById( req.params.id) 
        // Do updates of properties 
        if(req.body.costume_type)  
               toUpdate._brand = req.body._brand; 
        if(req.body.size) toUpdate.size = req.body.size; 
        if(req.body.price) toUpdate.price = req.body.price; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
};

// VIEWS
// Handle a show all view
exports._view_all_Page = async function(req, res) { 
  try{ 
      thes = await .find(); 
      res.render('', { title: ' Search Results', results: thes }); 
  } 
  catch(err){ 
      res.status(500); 
      res.send(`{"error": ${err}}`); 
  }   
}; 

// Handle a show one view with id specified by query
exports.costume_view_one_Page = async function(req, res) {
console.log("single view for id " + req.query.id)
try{
result = await .findById( req.query.id)
res.render('',
{ title: ' Detail', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports._create_Page = function(req, res) {
console.log("create view")
try{
res.render('create', { title: ' Create'});
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};

// Handle a delete one view with id from query
exports.costume_delete_Page = async function(req, res) {
console.log("Delete view for id " + req.query.id)
try{
result = await Costume.findById(req.query.id)
res.render('delete', { title: ' Delete', toShow:
result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};

// Handle building the view for updating a costume.
// query provides the id
exports.costume_update_Page = async function(req, res) {
console.log("update view for item "+req.query.id)
try{
let result = await Costume.findById(req.query.id)
res.render('update', { title: ' Update', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};

exports._view_one_Page = async function(req, res) { 
  console.log("single view for id "  + req.query.id) 
  try{ 
      result = await .findById( req.query.id) 
      res.render('detail',  
{ title: ' Detail', toShow: result }); 
  } 
  catch(err){ 
      res.status(500) 
      res.send(`{'error': '${err}'}`); 
  } 
}; 

// Handle building the view for creating a costume. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports._create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('create', { title: ' Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a costume. 
// query provides the id 
exports._update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await .findById(req.query.id) 
        res.render('update', { title: ' Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports._delete_Page = async function(req, res) { 
  console.log("Delete view for id "  + req.query.id) 
  try{ 
      result = await .findById(req.query.id) 
      res.render('delete', { title: ' Delete', toShow: 
result }); 
  } 
  catch(err){ 
      res.status(500) 
      res.send(`{'error': '${err}'}`); 
  } 
}; 