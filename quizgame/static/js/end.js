const username=document.getElementById('username');
const saveScoreBtn=document.getElementById('saveScoreBtn');
const mostRecentScore=localStorage.getItem('mostRecentScore');
const finalscore=document.getElementById('finalscore');
finalscore.innerText = mostRecentScore;
const score_in=document.getElementById('score_id').setAttribute( 'value',mostRecentScore);
const highscores=JSON.parse( localStorage.getItem("highscores")) || [];
/*function redirectToURL(btnId){if(btnId=="homebutton")
window.location.replace("home.html");
}*/
username.addEventListener('keyup', () =>{
	saveScoreBtn.disabled =! username.value;
});
var URL="/";
savehighScore = e => {
e.preventDefault();
var score = {
	score: mostRecentScore,
	name: username.value
};
window.onload=function(){("Score is saved");}
/*$.post(URL,score);*/
highscores.push(score);
highscores.sort((a,b) => b.score - a.score);
highscores.splice(5);

localStorage.setItem(highscores, JSON.stringify(highscores));
};
