/*function myfunction()
{
    console.log("Hello");
    console.log("world");
}
myfunction();*/

/*function sum(x,y)
{
    s = x + y;
    console.log("Before Return");
    return s;
}
let val = sum(3 , 4);
console.log(val);*/

//Arrow Function
/*let a = 3;
let b = 4;
 const Arrowsum = (a,b)=>
{
    return(a + b);

};*/

/*function countvowel(str)
{
    let count = 0;
    for(const char of str)
    {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
        {
            count++;
        }
    }
    console.log(count);
}*/

/*let arr = ["pune", "Delhi", "Mumbai"];
arr.forEach((val ,idx)=>
{
    console.log(val.toUpperCase(),idx);
});*/

/*let num = [2,4,5,6,,7,8];
let newarr = num.map((val)=>
{
    return val * 2;
});*/

let num = [2,4,5,6,,7,8];
let newarr = num.filter((val)=>
{
    return val % 2 === 0;
});