var n=5;
for(i=0;i<n;i++)
{
	for(j=1;j<n-i;j++)
	{
	document.write("&nbsp; &nbsp;");		
	}
	for(k=0;k<=i;k++)
	{
	document.write("* ");	
	}
	document.write("<br>");
}
