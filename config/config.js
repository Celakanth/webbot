var config = require('./config.json');
var configEnv = config["KEYS"];
Object.keys(configEnv).forEach((key) => {
  process.env[key] = configEnv[key];
});
