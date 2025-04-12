
/*Calculate Sum Of 1 to 5

let sum = 0;
for(let i = 0; i <= 5; i++)
{
    sum = sum + i;
}
console.log(sum , "sum");
console.log("Loop Has Been Ended");*/

/*while loop

let i = 1;
while(i <= 5)
{
    console.log("i =",i);
    i++;
}*/

/* do-while loop
let i = 1;
do{
    console.log( "i = ", i);
    i++;
   
} while(i <= 5);*/

/*for-of loop
let str = "snehal";
let size =0;
for(let val of str)
{
    console.log(" val = ", val);
    size++;
}
console.log("Size of string is =",size);*/

//for-in loop

let student = {
    name : "snehal",
    age :23,
    cgpa : 8.47,
    ispass : true,
};
for(let key in student)
{
    console.log(key);
}