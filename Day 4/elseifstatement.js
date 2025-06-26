let a=5;
let b=10;
let c=15;

if((a>b&&a<c) || (a<b&&a>c))
{
    console.log(+a+" is middle number.");
}
else if((b>a&&b<c) || (b<a&&b>c))
{
    console.log(+b+" is middle number.")
}
else
{
    console.log(+c+" is middle number.");
}