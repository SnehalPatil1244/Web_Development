let items = [340 ,220 ,450 ,230 ,340];
let i = 0;
for(let val of items)
{
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log(items[i]);
    i++;
}