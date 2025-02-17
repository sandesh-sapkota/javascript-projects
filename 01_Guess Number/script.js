let field= document.querySelector('#field')
let submit=document.querySelector('.submit')
let start=document.querySelector('.start')
let result=document.querySelector('.result')
let guesses=document.querySelector('.guesses')


let randomNumber;
let guessCount;
let gameInProgress= false;
let guessesArray=[];

function startGame(){
    randomNumber= Math.floor(Math.random()*101);
    guessCount=0;
    guessesArray=[];
    result.textContent=``;
    guesses.textContent=``;
    field.value='';
    gameInProgress=true;
    field.disabled=false;
    submit.disabled=false;
    start.disabled=true;
    console.log(randomNumber);

}

start.addEventListener('click',(e)=>{
    e.preventDefault();
    startGame();
})


function submitGuess(){
    if(!gameInProgress){
        result.textContent='Please start the game first!';
        return;
    }

    let guess= parseInt(field.value);
    if (isNaN(guess)) {
        result.textContent = 'Please enter a valid number.';
        return;
    }

    guessCount++;
    guessesArray.push(guess);

    if(guess === randomNumber){
        result.textContent=`Congratulation! You guessed it right!`;
        gameInProgress=false;
        field.disabled=true;
    submit.disabled=true;
    start.disabled=false;
    } 
    else if(guess<randomNumber){
        result.textContent=`Too low! Try again.`;
    }
    else{
        result.textContent=`Too high! Try again`;
    }

    guesses.textContent=`Your guesses: ${guessesArray.join(',')}`;

    if(guessCount>=10){
        gameInProgress=false;
        result.textContent=`You have used all your attempts! The correct number was ${randomNumber}`;
        field.disabled=true;
        submit.disabled=true;
        start.disabled=false;
    }
    field.value='';
}


submit.addEventListener('click',(e)=>{
    e.preventDefault();
    submitGuess();
})
