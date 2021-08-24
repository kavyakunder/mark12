const sideInputs=document.querySelectorAll(".side-input");
const calculate=document.querySelector("#calculate");
const output3=document.querySelector("#output3");

// function

function calculateSquare(a,b)
{
  const square=(a*a+b*b);
  return square;
}



function calculateHypotenuse()
{
  const calcSquare=calculateSquare(Number(sideInputs[0].value),Number(sideInputs[1].value));
  const finalResult=Math.sqrt(calcSquare);

  const hypo=finalResult.toFixed(2);
    output3.innerText="The hypotenuse of the required triangle is "+hypo +" cm.";
  // const hypo=sqrt(a*a+b*b);
  // console.log(hypo);
  // return hypo;
}

// function calculateHypotenuse(){
//   console.log(Number(sideInputs[0].value));
// };

calculate.addEventListener("click",calculateHypotenuse);
