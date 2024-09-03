var Unit=parseInt(prompt("Enter Units:"));
var charge=0;
if(Unit>0){
	if(Unit<=100)
	{
		charge=0;
		document.write("Free");
	}
	else if(Unit>100 && Unit<=250)
	{
		let a=Unit-100;
		let b=(a*2)+25; //300
		document.write("Total Amount Is :"+b);
	}
	else if(Unit>250 && Unit<=450)
	{
		let a=Unit-250;
		let b=(a*4)+300+75;
		document.write("Total Amount Is :"+b);		
	}
	else
	{
	let a=Unit-450;
	let b=(a*6)+1100+100;
	document.write("Total Amount Is :"+b);
    }
}
else{
document.write("Enter Valid Data....");
}
