const question = document.getElementById('question');
const choices= Array.from(document.getElementsByClassName('op-text'));
let currentquestion={};
let acceptingans=true;
let score=0;
let questioncount=0;
let Questionpoints=10;
const loader=document.getElementById("loader");
const game=document.getElementById("quiz");
const questioncountertext=document.getElementById('questioncounter');
const ScoreText=document.getElementById('score')
let availableques=[];


let questions=[];

fetch("/static/js/question.json")
.then(res=>{
  return res.json();
})
.then(loadedquestion =>{
  questions=loadedquestion;
  startGame();
})
.catch(err =>{
  console.error(err);
});
/*fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=hard&type=multiple")
.then(res=>{
  return res.json();
})
.then(loadedquestion =>{
  console.log(loadedquestion.results);
  loadedquestion.results.map(loadedquestion =>{
    const formatques={
      question : loadedquestion.question
    };
const answerchoices=[...loadedquestion.incorrect_answers];
formatques.answer= Math.floor(Math.random()*3)+1;
answerchoices.splice(formatques.answer -1 ,
  0,
  loadedquestion.correct_answer
  );
  

  answerchoices.forEach((choices,index)=>{
formatques["choices"+ (index+1)] = choice;
  });

  return formatques;

});

  startGame();
})
.catch(err =>{
  console.error(err);
});*/


const correctbonus=10;
startGame = () => {
  availableques = [...questions];
  let MAX_QUESTIONS=availableques.length;
  getnewques(MAX_QUESTIONS);
   game.classList.remove("hidden");
loader.classList.add("hidden");
};
getnewques= (MAX_QUESTIONS) =>{
  if(availableques.length==0 || questioncount >= MAX_QUESTIONS){
    localStorage.setItem('mostRecentScore', score);
    return window.location.assign('/end.html');
  }
  questioncount++;
  questioncountertext.innerText=questioncount+'/'+ 6;
const quesindex= Math.floor(Math.random() *availableques.length);
currentquestion=availableques[quesindex];
question.innerText=currentquestion.question;

choices.forEach(choice => {
  const number =choice.dataset["number"];
  choice.innerText= currentquestion["choice"+ number];
});

availableques.splice(quesindex,1);
acceptingans=true;
};
choices.forEach(choice => {
  choice.addEventListener("click",e =>{
    if(!acceptingans) return;
    acceptingans=false;
    const selectedchoice=e.target;
    const selectans= selectedchoice.dataset['number'];
    
    const cta= selectans == currentquestion.Answer ? 'correct' :'incorrect';
    if(cta=='correct'){
      ScoreText.innerText=(score+=Questionpoints);
    }
    
    selectedchoice.parentElement.classList.add(cta);
    
    setTimeout(() => {
selectedchoice.parentElement.classList.remove(cta);
    getnewques();
    },1000);

  });
});

