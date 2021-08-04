var readlineSync = require('readline-sync')


var username = readlineSync.question("Whats ur name? ");
console.log('Hello ' + username + ' Welcome to Easiest GK Quiz')
/*
highscores = [
  {
    username = '',
    score=''
  }

]
*/
var iniscore = 0;
var currentscore = -1;

while ((currentscore<6)||(currentscore<iniscore ) ){
  currentscore = -1;
  function play(question,answer) {
  
  var useranswer = readlineSync.question(question)
  //useranswer.toUpperCase()
  useranswer = useranswer.toUpperCase()
  if( useranswer == answer ){
    console.log('Yay , Correct')
    iniscore = currentscore;
    currentscore=currentscore+1;
  }
  else {
    iniscore = currentscore;
    console.log('Oops')
  }
  
}



var questions = [
  {
  question :'Which is the largest 2-digit number? \n', answer:'99'
},
{
  question :'Which is the smallest even number? \n', answer:'2'
},
{
  question :'How many bones are there in the human body? \n', answer:'206'
},
{
  question :'Which is the hardest mineral in the world? \n', answer:'DIAMOND'
},
{
  question :'How many states are there in India? \n', answer:'28'
},
{
  question :'Who was the first President of independent India? \n', answer:'RAJENDRA PRASAD'
}

]

/*
iniscore=0
currentscore=-1
while currentscore < iniscore {
  function enterquiz {
  func play{
    xx
    currentscore+1
  }
  qes1, qes2, qes3
  for loop ques{
    play(quesi)
  }
}

}


*/

for( var i=0; i<questions.length ; i++){
  play(questions[i].question, questions[i].answer)
}
console.log("---------QUIZ ENDS-------\n")


currentscore = currentscore+1

console.log(currentscore +'/', questions.length)
if(currentscore != 6){
  console.log("Lets go again")
}
else{
  console.log('Thats It!')
}

} 






