var path = "index.html";

var callback = function(data){
  console.log(data)
};

var oReq = new XMLHttpRequest();

oReq.open("GET", "http://jsmeetup/github.io/" + path, true);

oReq.onload = function(obj){
  console.log(obj);
  var data = oReq.response;
  callback(data);
}

oReq.send();
