let Marks = [ 67, 67, 67, 45, 34];
let sum = 0;
for (let val of Marks)
{
    sum = sum + val;
}
let avg = sum / Marks.length;
console.log(`avg marks of the class = ${avg}`);