/* http://cwestblog.com/2013/02/26/javascript-string-prototype-matchall/ */

String.prototype.matchAll = function(regexp) {
  var matches = [];
  this.replace(regexp, function() {
    var arr = ([]).slice.call(arguments, 0);
    var extras = arr.splice(-2);
    arr.index = extras[0];
    arr.input = extras[1];
    matches.push(arr);
  });
  return matches.length ? matches : null;
};

Example 1:

regex = /\w+/g

console.log(regex.exec("abc def 123"))

console.log("abc def 123".matchAll(regex));


Example 2:

console.log("abc dEf 123".replace(/([a-z]+)\s+(\d+)/i,function(){console.log(arguments)}));

console.log("abc dEf 123".replace(/([a-z]+)\s+(\d+)/i,"$2 $1"));
