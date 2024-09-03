var n=5;
for(i=1;i<=n;i++)
{
	for(j=1;j<=n;j++)
	{
		if(i==j || (i+j)==n+1)
		{
		document.write("* ");
		}
		else
		{
		document.write("&nbsp; &nbsp;");	
		}
	}
	document.write("<br>");
}
