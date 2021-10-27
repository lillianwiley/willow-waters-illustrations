/**
 * SERVER SETUP
 */
//This is where we set up the express server
// Use Express
var express = require("express");
// Use body-parser
var bodyParser = require("body-parser");

// Create new instance of the express server
var app = express();

// Define the JSON parser as a default way 
// to consume and produce data through the 
// exposed APIs
app.use(bodyParser.json());

// Create link to Angular build directory
// The `ng build` command will save the result
// under the `dist` folder.
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Initialize the server, set port number and listen
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

/*  
 *  CONNECTIONS TO EXTERNAL SERVICES (Stripe, Auth0, AWS etc...)
 *  


/*  
 *  DATABASE CONNECTION
 *  TODO: ADD DB AND CONNECT TO IT HERE
 */


/*  ENDPOINTS
 *   "/api/status"
 *   GET: Get server status
 *   TODO: ADD ENDPOINTS
 */
app.get("/api/status", function (req, res) {
    res.status(200).json({ status: "UP" });

});