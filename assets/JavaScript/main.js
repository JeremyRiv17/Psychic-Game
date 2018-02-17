var Letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var Wins =[0]
var Losses=[0]
var Guesses=[0]
var Maxleft=[10]
var Chosen=[]
Pick = Math.floor(Math.random() * Letters.length);
Answer=Letters[Pick]
console.log(Answer)
document.addEventListener('keypress',(event) => {
var Keyword= String.fromCharCode(event.keyCode);
console.log(Keyword)
document.getElementById('Chosen').innerHTML=("You Have chosen:"+Chosen)
if (Keyword != Answer){
    Guesses++;
    Maxleft--;
    document.getElementById('Guess').innerHTML=("Guesses Left:"+Maxleft)
    console.log(Guesses,Losses)
    Chosen.push(Keyword)
}
if(Keyword===Answer) {
    Wins++;
    for (i = 0; i < Letters.length; i++) { 
    Pick=Math.floor(Math.random() * Letters.length);
    Answer=Letters[Pick]}
    document.getElementById('Win').innerHTML=("Wins:"+Wins)
    console.log(Answer)
    console.log(Wins)
}
if (Maxleft<=0){
    Maxleft=10;
    Losses++;
    document.getElementById('Lose').innerHTML=("Losses:"+Losses)
}
});