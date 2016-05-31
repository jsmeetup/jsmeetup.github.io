// https://en.wikipedia.org/wiki/Change-making_problem#Simple_dynamic_programming

var n = 100;
var coins = [1,5,10,20];

var iterations = 0;

function f(n){
  if (n < 0){
    return Infinity;
    
  } else if (n == 0){
    return 0;
    
  } else {
    var min = n;
    for (let i of coins){
      var min = Math.min(min,1 + f(n - i))
    }
    return min
  }
}

function g(n,i){
  if (n == 0){
    return 0;
  }
  if (n < 0 || i == coins.length){
    return Infinity;
  }

  var y = n;

  for (var j=0; j<=Math.floor(n/coins[i]); j++){
    y = Math.min(y,j + g(n - j*coins[i],i + 1));
  }
  return y;
}

var m = [];

for (var i=0; i<coins.length+1; i++){
  m[i] = new Array(n + 1).fill(0);
}

for (var i=0; i<n+1; i++){
  m[0][i] = i;
}

console.log(m)

for (var c=1; c<coins.length+1; c++){
  for (var r=1; r<n+1; r++){

    // Just use the coin coins[c - 1]

    if (coins[c-1] == r){
      m[c][r] = 1;
    
    // coins[c - 1] cannot be included.
    // We use the previous solution for making r,
    // excluding coins[c - 1].

    } else if (coins[c-1] > r){
      m[c][r] = m[c-1][r];

    // We can use coins[c - 1].
    // We need to decide which one of the following solutions is the best:
    // 1. Using the previous solution for making r (without using coins[c - 1]).
    // 2. Using the previous solution for making r - coins[c - 1] (without using coins[c - 1]) plus this 1 extra coin.
    
    } else {
       m[c][r] = Math.min(m[c-1][r], 1 + m[c][r - coins[c-1]]);
    }
  }
}

console.log(m);
