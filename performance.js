var usage = require('usage');

const getUsage = () => {

var pid = process.pid // you can use any valid PID instead
usage.lookup(pid, function(err, result) {

});
}

//result
//{
//	memory: 100065280, // in no of bytes
//	memoryInfo: {
//		rss: 15966208, // resident size memory in bytes
//		vsize: 3127906304 // virtual memory size in bytes
//	},
//	cpu: 10.6 // in percentage
//}

module.exports = {
    getUsage
}