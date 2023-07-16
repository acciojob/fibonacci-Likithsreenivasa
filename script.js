function fibonacci(num) {
// your code here
	if(num==0)
	{
		return 0;
	}
	else if(num==1)
	{
		return 1;
	}
	else
	{
		let prev1=0;
		let prev2=1;
		let result=0;
		for(let i=2;i<=n;i++)
			{
			result=prev1+prev2;
				prev1=prev2;
				prev2=result;
			}
		return result;
	}
	
}

module.exports = fibonacci;
