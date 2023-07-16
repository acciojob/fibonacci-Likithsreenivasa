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
	else{
		prev1=0;
		prev2=1;
		let sum=0;
		for(let i=0;i<num;i++)
			{
				sum=prev1+prev2;
				prev1=prev2;
				prev2=sum;
			}
	}
	return sum;
	
}

module.exports = fibonacci;
