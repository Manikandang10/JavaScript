var n=7;
for(i=1;i<=n;i++)
{
	for(j=i;j<n;j++)
	{
	document.write("&nbsp;");
	}
	for(k=1;k<=i;k++)
	{
	document.write("* ");
	}
	document.write("<br>");
}
for(i=1;i<=n;i++)
{
	for(j=1;j<=i;j++)
	{
	document.write("&nbsp;");
	}
	for(k=1;k<=n-i;k++)
	{
	document.write("* ");
	}
	document.write("<br>");
}
