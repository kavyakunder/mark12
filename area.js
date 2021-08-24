const areaInputs=document.querySelectorAll(".area-input");
const calculate=document.querySelector("#calculate");
const output4=document.querySelector("#output4");

// function

function calculateArea(a,b)
{
  const area=(a*b);
  return area;
}



function calculateTheArea()
{
  const calcSquare=calculateArea(Number(areaInputs[0].value),Number(areaInputs[1].value));
  const area1=(1/2*(calcSquare));

  const finalArea=area1.toFixed(2);
    output4.innerText="The hypotenuse of the required triangle is "+finalArea +"sq.cm";
  // const hypo=sqrt(a*a+b*b);
  // console.log(hypo);
  // return hypo;
}

// function calculateHypotenuse(){
//   console.log(Number(sideInputs[0].value));
// };

calculate.addEventListener("click",calculateTheArea);
