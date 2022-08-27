//ts has some weird stuff so this wont work in ts
//var usage = require('usage');
import usage from "node-usage" 
 

var pid = process.pid // you can use any valid PID instead
usage.lookup(pid, function(err, result) {
 
});



export{}