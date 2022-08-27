const pm2 = require("pm2");

const start = () => {
  pm2.start(
    {
      script: "api.js",
      name: "api",
    },
    function (err, apps) {
      if (err) {
        console.error(err);
        return pm2.disconnect();
      }
    }
  );
};

module.exports = {
  start,
},