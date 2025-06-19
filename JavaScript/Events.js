let btn1 = document.querySelector("#btn1");
/*btn1.onclick = () =>{
    console.log("Btn1 Was Clicked");
}*/

btn1.addEventListener("click" , () =>
{
    console.log("btn1 was clicked");
});
btn1.addEventListener("click" , (evt) =>
{
    console.log(evt);
});