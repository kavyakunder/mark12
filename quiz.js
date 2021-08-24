// alert("helllo");
const quizForm=document.querySelector(".quiz-form");
const submitBtn=document.querySelector("#submit-btn")
const output2=document.querySelector("#output2");


const correctAns=["90°","right angled","centroid","concurrent","triangle","one-right-angle"];


function calculateScore()
{
let score=0;
let i=0;
const formResults=new FormData(quizForm);
// console.log(formResults);
for (let entry of formResults.values())
{

  if(entry===correctAns[i])
  {
    score=score+1;
  }
  i=i+1;
  // console.log(entry)
}
console.log(score);
output2.innerText="Your score is "+score;

}
submitBtn.addEventListener("click",calculateScore);
