var n=5;
for(i=1;i<=n;i++)
{
	for(j=1;j<=n;j++)
	{
		if(i==1 || i== n || j==1 ||j==n){
		document.write("* ");
		}
		else{
		document.write("&nbsp; &nbsp;");
		}
	}
	document.write("<br>");
}
