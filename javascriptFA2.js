//sorry ma'am, i couldn't figure it out on time :(

function addNum() 
{
   	var x = parseInt(document.getElementById("num1").value);
        var y = parseInt(document.getElementById("num2").value);
        var ans = x + y;
  	document.getElementById("result").innerHTML = "The sum of " + x + " and " + y + " is " + ans;
}
      
function minusNum(num1, num2) 
{
      	var x = parseInt(document.getElementById("num1").value);
        var y = parseInt(document.getElementById("num2").value);
        var ans = x - y;
  	document.getElementById("result").innerHTML = "The difference of " + x + " and " + y + " is " + ans;
}
      
function timesNum(num1, num2) 
{
      	var x = parseInt(document.getElementById("num1").value);
        var y = parseInt(document.getElementById("num2").value);
        var ans = x * y;
  	document.getElementById("result").innerHTML = "The product of " + x + " and " + y + " is " + ans;
}
      	
function divideNum(num1, num2) 
{
      	var x = parseInt(document.getElementById("num1").value);
        var y = parseInt(document.getElementById("num2").value);
        var ans = x / y;
  	document.getElementById("result").innerHTML = "The quotient of " + x + " and " + y + " is " + ans;
}
      
function remNum(num1, num2) 
{
      	var x = parseInt(document.getElementById("num1").value);
        var y = parseInt(document.getElementById("num2").value);
        var ans = y % x;
  	document.getElementById("result").innerHTML = "The remainder of " + x + " and " + y + " is " + ans;
}
      
