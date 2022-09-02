var xValues = [50,60,70,80,90,100,110,120,130,140,150];
var yValues = [7,8,8,9,9,9,10,11,14,14,15];

new Chart("ram", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: "rgba(0,0,0,1.0)",
      borderColor: "rgba(0,0,0,0.1)",
      data: yValues
    }]
  },
  options:{}
});
//how to we make them autoMagically settable? well its easy, we just change the data then.... idk ok... how? we need it to get the latest valu (i can do that), then push all the values back  ok what values? pm2 has ram/cpu usage metrics ohh, i see, but we arent using pm2 rn tho but ill import those later no i meant in penguin's server, but getting the values from there is easy too... if its whati i think it is but were not going to be using it for long i mean 3-4 months still long, we can change it later then ooooooooooooooooooooor use pm2 in penguin's server not really possible  : why? it needs manage sys perms.  oh damn, cant we put it in a npm script? nope, but can we jsut focus on putting the carts in the boxes? okay cool