function fibonacci(num) {
// your code here
	let sum=0;
	if(num <0 || num > 50)
	{
		return null;
	}
	else if(num==0)
	{
		return 0;
	}
	else if (num==1) {
		return 1;
	}
	let prev1=0;
	let prev2=1;
	else
	{
	for(let i=2;i<=num;i++)
		{
			sum=prev1+prev2;
			prev1=prev2;
			prev2=current;
		}
		return prev2;
	}
	
}

module.exports = fibonacci;
