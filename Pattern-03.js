var n=5;
for(i=1;i<=n;i++)
{
	for(j=1;j<=i;j++)
	{
		if((i+j)%2==0){
		document.write("1 ");
		}
		else
		{
		document.write("0 ");	
		}
	}
	document.write("<br>");
}
