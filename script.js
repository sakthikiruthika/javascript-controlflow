const number=Math.random()*10;
const floor=Math.floor(number);
console.log(floor);

//if else
if(floor%2==0&&floor!=0)
{
    console.log("even");
}
else if(floor==0)
{
    console.log("zero");
}
else{
    console.log("odd");
}
 
//forloop
let i;
for(i=0;i<=10;i++)
{
    console.log(i); 
}

//while loop
let s=1;
while(s<10)
{
    console.log(s);
    s++;
}

//switch
k=floor;
switch(k)
{
case 5:
        console.log("buzz");   
        break;
case 0:
        console.log("zero");
        break;
default:
        console.log("fizz");
        break;
} 

//continue
for(let j=0;j<10;j++)
{
    if(j==5)
    {
    continue;
    }
    console.log(j);
}

//function
function name()
{
    console.log("iam keerthi");
}
name()
// function
function members(fname,lname)
{
    Name=fname+lname;
    console.log(Name);
}
members("sakthi  ","kiruthika")

