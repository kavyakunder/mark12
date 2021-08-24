const inputs=document.querySelectorAll(".angle-input");
const btn=document.querySelector("#btn");
const output1=document.querySelector("#output1");

function calculateSum(angle11,angle22,angle33)
{
  const sumOfAngless=angle11+angle22+angle33;
  // console.log(sumOfAngles);
  return sumOfAngless;
}



function isTriangle()
{
  // console.log("hello ");
  const sumOfAngles=calculateSum(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));

if(sumOfAngles===180)
{
  output1.innerText="Yay..This forms a triangle!";

}
else
{
output1.innerText="Oops..this doesnt form a triangle!";

}

// console.log(sumOfAngles);
}
btn.addEventListener("click",isTriangle)
