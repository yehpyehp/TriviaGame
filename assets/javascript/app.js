var wronganswer = 0;
var correctAnswers = 0;
var unanswered = 0;


var value = ""
var answer = ["water","0x","flamecharge","chesto","houndoom","nevermiss","immune","snorlax"];

$(document).ready(function(){


function restart(){
	location.reload();
}
function displayScore() {
    $("#submitdiv").hide();
    $("#startdiv").hide();
    $(".triviacontent").hide();
    $("#restartdiv").show();
     var value = $('#question1 input:radio:checked').val();
        // for(var i =0; i<answer.length;i++){

         	
            if (value == undefined) {
                unanswered++;
               
            } 
            else if (value == answer[0]) {
                    correctAnswers++;
            } 
            else {
            	wronganswer++;
            } 
     var value = $('#question2 input:radio:checked').val();
        // for(var i =0; i<answer.length;i++){

         	
            if (value == undefined) {
                unanswered++;
               
            } 
            else if (value == answer[1]) {
                    correctAnswers++;
            } 
            else {
            	wronganswer++;
            } 
     var value = $('#question3 input:radio:checked').val();
        // for(var i =0; i<answer.length;i++){

         	
            if (value == undefined) {
                unanswered++;
               
            } 
            else if (value == answer[2]) {
                    correctAnswers++;
            } 
            else {
            	wronganswer++;
            } 
     var value = $('#question4 input:radio:checked').val();
        // for(var i =0; i<answer.length;i++){

         	
            if (value == undefined) {
                unanswered++;
               
            } 
            else if (value == answer[3]) {
                    correctAnswers++;
            } 
            else {
            	wronganswer++;
            } 
     var value = $('#question5 input:radio:checked').val();
        // for(var i =0; i<answer.length;i++){

         	
            if (value == undefined) {
                unanswered++;
               
            } 
            else if (value == answer[4]) {
                    correctAnswers++;
            } 
            else {
            	wronganswer++;
            } 
     var value = $('#question6 input:radio:checked').val();
        // for(var i =0; i<answer.length;i++){

         	
            if (value == undefined) {
                unanswered++;
               
            } 
            else if (value == answer[5]) {
                    correctAnswers++;
            } 
            else {
            	wronganswer++;
            } 
     var value = $('#question7 input:radio:checked').val();
        // for(var i =0; i<answer.length;i++){

         	
            if (value == undefined) {
                unanswered++;
               
            } 
            else if (value == answer[6]) {
                    correctAnswers++;
            } 
            else {
            	wronganswer++;
            } 

     var value = $('#question8 input:radio:checked').val();
        // for(var i =0; i<answer.length;i++){

         	
            if (value == undefined) {
                unanswered++;
               
            } 
            else if (value == answer[7]) {
                    correctAnswers++;
            } 
            else {
            	wronganswer++;
            }        
        // }          
    $("#unanswered").html("Unanswered Questions: "+ unanswered);
    console.log(unanswered);
    $("#correct").html("Correct Answers: "+ correctAnswers);
    console.log(correctAnswers);
    $("#wrong").html("Wrong Answers: "+ wronganswer);
    console.log(wronganswer);
}


function gamestart(){
	$("#submitdiv").show();
	$(".triviacontent").show();
	$("#startdiv").hide();
var count=60;

var counter=setInterval(timer, 1000); 

function timer(){
  count=count-1;
  $("#timeremain").html("You have "+count+" seconds left!");
  if (count <= 0){
     clearInterval(counter);
     
     displayScore();
  }

  
}
       
   
};


$('#start').on('click', function() {
    gamestart();
    
});
$('#submit').on('click', function() {
    displayScore();
    
});
$('#restart').on('click', function() {
    restart();
    
});
$(".triviacontent").hide();
$("#restartdiv").hide();
$("#submitdiv").hide();
});