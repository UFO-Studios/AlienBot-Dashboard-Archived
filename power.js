const pm2 = require("pm2");

const start = () => {
  pm2.start(
    {
      script: "./AlienBot-2.0/index.js",
      name: "index",
    },
    function (err, apps) {
      if (err) {
        console.error(err);
        return pm2.disconnect();
      }
    }
  );
};

const reboot = () => {
  pm2.restart('index', (err, proc) => {
    // Disconnects from PM2
    pm2.disconnect()
  });
};

const kill = () => {
  pm2.killDeamon('index')
  console.log("Killed")
}


module.exports = {
  start, reboot, kill
}