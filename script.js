function fibonacci(num) {
// your code here
	let sum=0;
	for (let i = 0; i < num; i++) {
		sum=sum+i;
		num=num-1;
	}
	return sum;
}

module.exports = fibonacci;
