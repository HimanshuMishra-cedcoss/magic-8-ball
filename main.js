debugger;
function uname()
{
var u=document.getElementById('username').value;
console.log(u);
if(u!=='')
 {
 	document.getElementById('user').innerHTML=u;
 }
 else
 {  
 	console.log(u)
 	var nm="but enter your name to get accurate results.";
 	document.getElementById('namemissing').innerHTML=nm;
 }
}
function generateNumber(maxNum)
{
	return Math.round(Math.random()*maxNum);
}

function answer()
{	
	var qu=document.getElementById('ques').value;
	console.log(qu);
	if(qu=='')
 	{
 	var p="You Can Predict Again"
 	document.getElementById('ansText').innerHTML=p;
 	}
 	else{
	let randomNum = generateNumber(7);
	//alert(randomNum);
	let ans= ['It is certain.',
	 'It is decidedly so.',
	 'Without a doubt.',
	 'Better not tell you now.',
	 'Very doubtful',
	 'Outlook not so good.',
	 'My reply is no.',
	 'Cannot predict now.']
	// console.log(ans);
	if(randomNum==0)
	{
		document.getElementById('ansText').innerHTML=ans[0];
	}
	if(randomNum==1)
	{
		document.getElementById('ansText').innerHTML=ans[1];
	}
	if(randomNum==2)
	{
		document.getElementById('ansText').innerHTML=ans[2];
	}
	if(randomNum==3)
	{
		document.getElementById('ansText').innerHTML=ans[3];
	}
	if(randomNum==4)
	{
		document.getElementById('ansText').innerHTML=ans[4];
	}
	if(randomNum==5)
	{
		document.getElementById('ansText').innerHTML=ans[5];
	}
	if(randomNum==6)
	{
		document.getElementById('ansText').innerHTML=ans[6];
	}
	if(randomNum==7)
	{
		document.getElementById('ansText').innerHTML=ans[7];
	}
	if(randomNum==8)
	{
		document.getElementById('ansText').innerHTML=ans[8];
	}
	}
}
function rightd()
{
	var box=document.getElementById("rightdiv");
	box.style.display="block";
	// console.log("hello");
}
