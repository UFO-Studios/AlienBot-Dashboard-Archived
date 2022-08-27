import { resourceUsage } from "process";

var usage = require('usage');
 
var pid = process.pid // ID for the node process. can be used for any app
usage.lookup(pid, function(_err: any, _result: any) { //declears "err" (any errors) & "result" (the result)
 
});
const result = 
console.log(_result)
//export{}
//gets how much mem/cpu node is using 