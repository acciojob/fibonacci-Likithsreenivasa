function fibonacci(num) {
// your code here
	if (num === 0) {
    return 0;
  } 
	else if (num === 1) {
    return 1;
  } 
	else {
    var a = 0;
    var b = 1;
    var result;

    for (var i = 2; i <= num; i++) {
      result = a + b;
      a = b;
      b = result;
    }

    return result;
  }
	
}

module.exports = fibonacci;
