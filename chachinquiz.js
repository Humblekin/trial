function result(){
  const answer1=document.querySelector('input[name="q1"]:Checked').value;
  const answer2=document.querySelector('input[name="q2"]:Checked').value;
  const answer3=document.querySelector('input[name="q3"]:Checked').value;
  const answer4=document.querySelector('input[name="q4"]:Checked').value;
  const answer5=document.querySelector('input[name="q5"]:Checked').value;
  const answer6=document.querySelector('input[name="q6"]:Checked').value;
  const answer7=document.querySelector('input[name="q7"]:Checked').value;
  const answer8=document.querySelector('input[name="q8"]:Checked').value;
  const answer9=document.querySelector('input[name="q9"]:Checked').value;
  const answer10=document.querySelector('input[name="q10"]:checked').value;


let score=0;

if(answer1==="bob1"){
  score++;
}
if(answer2==="non2"){
  score++;
}
if(answer3==="week"){
  score++;
}
if(answer4==="cha4"){
  score++;
}
if(answer5==="pep5"){
  score++;
}
if(answer6==="fal6"){
  score++;
}
if(answer7==="tru7"){
  score++;
}
if(answer8==="fal8"){
  score++;
}
if(answer9==="tru9"){
  score++;
}
if(answer10==="fal10"){
  score++;
}
console.log(score);
document.getElementById('disp').innerHTML=score;
document.querySelector('#displayer').style.display="block";
document.querySelector('#main-box').style.display="none";
document.querySelector('h4').style.color="red";
}