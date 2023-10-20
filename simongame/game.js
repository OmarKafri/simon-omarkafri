var buttonColors=["green","red","blue","yellow"];
var gamePattern=[];

nextSequence();






function nextSequence(){
   var randomNumber=Math.floor(Math.random()*4);

   var randomChosenColor=buttonColors[randomNumber];
   $("#"+randomChosenColor).fadeIn(200).fadeOut(200).fadeIn(200);
   var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
   audio.play();


    gamePattern.push(randomChosenColor);

}