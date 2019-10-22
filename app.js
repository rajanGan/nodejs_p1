"use strict";

/* p1-app */

const http = require('http');

// Load App config
//const app_config = require("./app_config." + (process.env.NODE_ENV || "dev"));


const print_msg = function () {
    console.log("This is a message from the p1-app package");
    //console.log(app_config);
};

print_msg();

// Datatype module
//const js_dtype = require("./js_basic/js_dtype");
//js_dtype.print_dtype();
//console.log(js_dtype.v1);

http.createServer( (req,res) => { res.write(JSON.stringify(req.headers)); res.end();  } ).listen(process.env.PORT || 5000);
