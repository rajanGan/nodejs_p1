"use strict";

/* p1-app */

// Load App config
const app_config = require("./app_config." + (process.env.NODE_ENV || "dev"));


const print_msg = function () {
    console.log("This is a message from the p1-app package");
    console.log(app_config);
};

print_msg();
