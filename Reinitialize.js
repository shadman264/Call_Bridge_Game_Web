function reinitialize(){
	// *********************************** DECK.JS ER SHOKOL VARIABLE

lastWinner=1;
curTurn=1;
clickFlag=0;
vanishFlag=0;
leadCards=[114,214,314,414];
trumpedSuits=[];
pile_flag = 0;
pass_flag = 0;
empty_flag = 0;




//shuffling cards here
shuffle(deck);

//distributing cards
distribute();

//sorting cards of 4 players
sortThem();

//distributing suits among players
distributeSuits(player1Cards,player1Suits);
distributeSuits(player2Cards,player2Suits);
distributeSuits(player3Cards,player3Suits);
distributeSuits(player4Cards,player4Suits);

//populate all cards array
populateAllCards(allCards);


// ********************** CALLBRIDGE.JS ER SHOKOL VARIABLE ******************************
//These variable are for move_card_suit function
move_card_suit_top_flag = 0;
//These variable are for move_card_single function
move_card_single_top_flag = 43;
//These variable are for move_player_1st_card function
move_player_1st_card_top_flag = 39;
move_player_1st_card_left_flag = 41.5;
card_distribute_counter = 1;
time_flag = 0;
inputFlag = -1;
player1Call=3;
player2Call=4;
//player3Call=0;
player4Call=2;
remaining_call1=0;
remaining_call2=0;
remaining_call3=0;
remaining_call4=0;
negetive_call1 =0;
negetive_call2 =0;
negetive_call3 =0;
negetive_call4 =0;

first_time_flag = 0;




//************************************* GAME.JS ER SHOKOL VARIABLE **********************************
player1_card_play_flag = 0;
player2_card_play_flag = 0;
player4_card_play_flag = 0;
chudi=0;












//************************************SHADMAN'S WORK***********************************************

//INITIALIZE CARD_SUIT POSITION

//card_suit
document.getElementById("card_suit").style.top = "0%";
document.getElementById("card_suit").style.left =  "41.0156%";




//card_single
document.getElementById("card_single").style.top = "43%";
document.getElementById("card_single").style.left =  "41.5%";

document.getElementById("player1_card_single").style.opacity = "0";
document.getElementById("player1_card_single").style.top =  "39%";
document.getElementById("player1_card_single").style.left =  "41.5%";

document.getElementById("player2_card_single").style.opacity = "0";
document.getElementById("player2_card_single").style.top =  "39%";
document.getElementById("player2_card_single").style.left =  "41.5%";

document.getElementById("player3_card_single").style.opacity = "0";
document.getElementById("player3_card_single").style.top =  "39%";
document.getElementById("player3_card_single").style.left =  "41.5%";

document.getElementById("player4_card_single").style.opacity = "0";
document.getElementById("player4_card_single").style.top =  "39%";
document.getElementById("player4_card_single").style.left =  "41.5%";






//fixed_card
document.getElementById("player1_fixed_card").style.opacity = "0";
document.getElementById("player1_fixed_card").style.top =  "18%";
document.getElementById("player1_fixed_card").style.left =  "24%";

document.getElementById("player2_fixed_card").style.opacity = "0";
document.getElementById("player2_fixed_card").style.top =  "18%";
document.getElementById("player2_fixed_card").style.left =  "59%";

document.getElementById("player3_fixed_card").style.transitionDuration = "0s";
document.getElementById("player3_fixed_card").style.opacity = "0";
document.getElementById("player3_fixed_card").style.top =  "60%";
document.getElementById("player3_fixed_card").style.left =  "24%";
document.getElementById("player3_fixed_card").style.webkitTransform = "scale(1)";


document.getElementById("player4_fixed_card").style.opacity = "0";
document.getElementById("player4_fixed_card").style.top =  "60%";
document.getElementById("player4_fixed_card").style.left =  "59%";




//call_token
var temp_left;

document.getElementById(player3Call).style.webkitTransform = "scale(1)";


if(player3Call<6){
	temp_left = 27.8 + player3Call*5.8;
	document.getElementById(player3Call).style.top = "35%";
}
else if(player3Call>=6 && player3Call<11){
	temp_left = 30.7 + (player3Call%6)*5.8;
	document.getElementById(player3Call).style.top = "42%";
}
else if(player3Call>=11 && player3Call<13){
	temp_left = 39.5 + (player3Call%11)*5.8;
	document.getElementById(player3Call).style.top = "49%";
}
else{
	temp_left = 42.4;
	document.getElementById(player3Call).style.top = "56%";
}

document.getElementById(player3Call).style.left = temp_left+"%";
document.getElementById(player3Call).style.transitionDuration = "0s";




//CARDS CLASS
var elems = document.getElementsByClassName('cards');
for(var i = 0; i < elems.length; i++) {
    elems[i].style.opacity = '0';
    elems[i].style.top = '60%';
    elems[i].style.left = '24%';
    elems[i].style.transitionDuration = "0s";
    elems[i].style.webkitTransform = "rotate(0deg)";
}










reinitialize_animate = setTimeout(reinitialize,1000);
if(reinitialize_flag ==1){
	clearTimeout(reinitialize_animate);
	display_start();
	reinitialize_flag = 0;

}
else{
	reinitialize_flag = 1;
}
}