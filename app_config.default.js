/* Global Configuration  */

let app_config = {};

app_config.env = process.env.NODE_ENV || "dev";
app_config.hostname = process.env.HOSTNAME || "localhost";
app_config.port = 9898;

/* DB config  */
app_config.db = {};
app_config.db.url = "dummy";
app_config.db.user = "testuser";
app_config.db.pwd = "testpwd";

module.exports = app_config;
