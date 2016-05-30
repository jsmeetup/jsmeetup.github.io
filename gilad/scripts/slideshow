// http://stackoverflow.com/questions/5251520/how-do-i-escape-some-html-in-javascript
String.prototype.escapeHTML = function(){     
  return this.replace(/&/g, '&amp;')
             .replace(/"/g, '&quot;')
             .replace(/</g, '&lt;')
             .replace(/>/g, '&gt;');
}

var container = document.createElement('div');
document.body.appendChild(container);

var pre = document.createElement('pre');
pre.id = 'code';
pre.style.float = 'left';
pre.style.border = '1px solid blue';
pre.style.width = '400px';
pre.style.height = '800px';
pre.style.padding = '20px'
pre.style.marginLeft = '30px';
pre.style.boxSizing = 'content-box';

container.appendChild(pre);
pre.innerHTML = '<p>code here</p>'.escapeHTML();

var div = document.createElement('div');
div.id = 'html';
div.style.float = 'left';
div.style.width = '400px';
div.style.height = '800px';
div.style.border = '1px solid blue';
div.style.marginLeft = '30px';
div.style.boxSizing = 'border-box';

container.appendChild(div);
div.innerHTML = '<p>html here</p>';

var callback = function(data){
  pre.innerHTML = data.escapeHTML();
  div.innerHTML = data;
};

var slideShow = function(paths){
  
  var count = 1;
  
  paths.forEach(function(path){
    
    setTimeout(function(){

      var oReq = new XMLHttpRequest();

      oReq.open("GET", "http://jsmeetup.github.io/" + path, true);

      oReq.onload = function(obj){
        console.log(obj);
        var data = oReq.response;
        callback(data);
      }

      oReq.send();
    },5000 * count++);
    
  });
  
}
                
//slideShow(['index.html','gilad/index.html']);

