var player1_card_play_flag = 0;
var player2_card_play_flag = 0;
var player4_card_play_flag = 0;
var animate;
var chudi=0;
function player1(){
	
	var temp;
		if(inputFlag==1){
		chudi=1;
		temp=cardSelector(curTurn,player1Suits);
		curTurn++;

		player1_play_card(temp);
		//cardShowOnBoard(temp,"rotate(-36deg)","29%","34%");

	
		

	}	
}

function player2(){
	
	var temp;
		if(inputFlag==2) {
		chudi=1;
		temp=cardSelector(curTurn,player2Suits);
		curTurn++;

		player2_play_card(temp);
		//cardShowOnBoard(temp,"rotate(36deg)","29%","47%");		
		

		
	}
		
}	

function player3(){
		if(inputFlag==3){
		clickFlag=0;
		var temp = curClick;
		removeCard(player3Suits,curClick.toString()[0]-'1', curClick);
		// given suit ta jodi amar kache na thake then trumpedsuit e add kore dei
		if(boardCards.length!=0){
			if(boardCards[0].toString()[0]!=curClick.toString()[0]) {
				trumpedSuitFunc(trumpedSuits,curClick.toString()[0]-'1');
			}
		}
		boardCards.push((temp));
		curTurn++;		

		if(lastWinner==4) {
			var temp2=winning_card(boardCards);
			lastWinner = winPlayer(temp2);			
			curTurn=1;			
			emptyBoard(winning_card(boardCards));
			inputFlag=lastWinner;			
		}
		else{
			inputFlag=4;
		}

	}
	clickFlag=0;
}

function player4(){
	
	var temp;
		if (inputFlag==4) {
		chudi=1;
		temp=cardSelector(curTurn,player4Suits);
		curTurn++;

		player4_play_card(temp);
		//cardShowOnBoard(temp,"rotate(-36deg)","49%","47%");		
		
	}			
}
function cardSelector(curTurn,playerSuits) {
		var temp;
		if(curTurn==1) {
			temp=(hand1(playerSuits));
		}
		else if(curTurn==2) {
			temp=(hand2(playerSuits));
		}
		else if(curTurn==3) {
			temp=(hand3(playerSuits));
		}
		else  {
			temp=(hand4(playerSuits));
		}
		return temp;
}
function cardShowOnBoard(temp,rotate,top,left){
		document.getElementById(temp).style.opacity = "1";
		document.getElementById((temp)).style.setProperty("-webkit-transition", "all 0.7s ease-out");
		document.getElementById((temp)).style.webkitTransform = rotate;
		document.getElementById((temp)).style.setProperty("top", top);
		document.getElementById((temp)).style.setProperty("left", left);

}

function play(){
	if(vanishFlag==0 && chudi==0) {
		if(inputFlag==1 && player1_card_play_flag==0) {
			player1();
		}
		else if(inputFlag==2 && player2_card_play_flag==0){
			player2();
		}
		else if(inputFlag==3 && clickFlag==1) {
			player3();
		}
		else if(inputFlag==4 && player4_card_play_flag==0) {
			player4();
		}
	}
}





function player1_play_card(card_id){
	//THIS METHOD WILL MOVE FIRST PLAYER'S CARD TO THE PLAY FLOOR
	//AT FIRST IT WILL MOVE ONE CARD OUT
	//THEN IT WILL MOVE TO THE CENTER PLAY FLOOR

	//STARTING POSITION
	//top: 18%; left:  23%;
	//DESIRED POSITION
	//top: 33%;   left:  34.5%;

	
	
	document.getElementById("card_single").style.top = "18%";
	document.getElementById("card_single").style.left = "23%";
	document.getElementById("card_single").style.opacity = "0";
	document.getElementById("card_single").style.zIndex = "999";
	document.getElementById("card_single").style.transform = "scale(1)";
	document.getElementById(card_id).style.top = "18%";
	document.getElementById(card_id).style.left = "25%";
	document.getElementById(card_id).style.opacity = "0";
	document.getElementById(card_id).style.zIndex = "998";
	document.getElementById(card_id).style.transform = "rotateY(-90deg)";
	document.getElementById(card_id).style.transform = "scale(1.05)";
	
	if(player1_card_play_flag==0){
		animate = setTimeout(function(){player1_play_card(card_id)},1000);
		player1_card_play_flag = 1;	
	}
	else if(player1_card_play_flag==1){
		document.getElementById("card_single").style.opacity = "0";
		document.getElementById("card_single").style.setProperty("-webkit-transition", "all 0.3s ease-in-out");
		document.getElementById("card_single").style.setProperty("left", "25%");
		document.getElementById("card_single").style.webkitTransform = "scale(1.05)";
		document.getElementById("card_single").style.webkitTransform = "rotateY(90deg)";
		

		clearTimeout(animate);
		animate = setTimeout(function(){player1_play_card(card_id)},280);
		player1_card_play_flag = 2;
	}

	else if(player1_card_play_flag==2){
		document.getElementById(card_id).style.opacity = "1";
		document.getElementById("card_single").style.opacity = "0";
		document.getElementById(card_id).style.setProperty("-webkit-transition", "all 0.3s ease-in-out");
		document.getElementById(card_id).style.webkitTransform = "rotateY(0deg)";
		document.getElementById(card_id).style.webkitTransform = "scale(1.05)";
		
		//document.getElementById("card_single").style.webkitTransform = "rotate(120deg)";
		clearTimeout(animate);
		animate = setTimeout(function(){player1_play_card(card_id)},500);
		player1_card_play_flag = 3;

	}

	else if(player1_card_play_flag==3){
		document.getElementById(card_id).style.opacity = "1";
		document.getElementById("card_single").style.opacity = "0";
		document.getElementById(card_id).style.setProperty("-webkit-transition", "all 0.6s ease-in-out");
		document.getElementById(card_id).style.setProperty("top", "33%");
		document.getElementById(card_id).style.setProperty("left", "34.5%");
		document.getElementById(card_id).style.webkitTransform = "scale(1)";
		document.getElementById(card_id).style.webkitTransform = "rotate(-45deg)";
		player1_card_play_flag = 0;
		chudi=0;
		if(lastWinner==3) {
			lastWinner = winPlayer(winning_card(boardCards));			
			curTurn=1;
			
			emptyBoard(winning_card(boardCards));
			inputFlag=lastWinner;			
		}
		else{
			inputFlag=3;
		}

		clearTimeout(animate);
		
	}
}


function player2_play_card(card_id){
	//THIS METHOD WILL MOVE SECOND PLAYER'S CARD TO THE PLAY FLOOR
	//AT FIRST IT WILL MOVE ONE CARD OUT
	//THEN IT WILL MOVE TO THE CENTER PLAY FLOOR

	//FOR PLAYER TWO

	//STARTING POSITION
	//top: 18%; left:  60%;
	//DESIRED POSITION
	//top: 33%;  left:  45.5%;

	
	
	document.getElementById("card_single").style.top = "18%";
	document.getElementById("card_single").style.left = "60%";
	document.getElementById("card_single").style.opacity = "0";
	document.getElementById("card_single").style.transform = "scale(1)";
	document.getElementById("card_single").style.transform = "rotateY(0deg)";
	//document.getElementById("card_single").style.zIndex = "999";
	document.getElementById(card_id).style.top = "18%";
	document.getElementById(card_id).style.left = "58%";
	document.getElementById(card_id).style.opacity = "0";
	//document.getElementById(card_id).style.zIndex = "998";
	document.getElementById(card_id).style.transform = "rotateY(-90deg)";
	document.getElementById(card_id).style.transform = "scale(1.05)";
	
	if(player2_card_play_flag==0){
		animate = setTimeout(function(){player2_play_card(card_id)},1000);
		player2_card_play_flag = 1;	
	}
	else if(player2_card_play_flag==1){
		document.getElementById("card_single").style.opacity = "1";
		document.getElementById("card_single").style.setProperty("-webkit-transition", "all 0.3s ease-in-out");
		document.getElementById("card_single").style.setProperty("left", "58%");
		document.getElementById("card_single").style.webkitTransform = "scale(1.05)";
		document.getElementById("card_single").style.webkitTransform = "rotateY(90deg)";
		

		clearTimeout(animate);
		animate = setTimeout(function(){player2_play_card(card_id)},280);
		player2_card_play_flag = 2;
	}

	else if(player2_card_play_flag==2){
		document.getElementById(card_id).style.opacity = "1";
		document.getElementById("card_single").style.opacity = "0";
		document.getElementById(card_id).style.setProperty("-webkit-transition", "all 0.3s ease-in-out");
		document.getElementById(card_id).style.webkitTransform = "rotateY(0deg)";
		document.getElementById(card_id).style.webkitTransform = "scale(1.05)";
		
		//document.getElementById("card_single").style.webkitTransform = "rotate(120deg)";
		clearTimeout(animate);
		animate = setTimeout(function(){player2_play_card(card_id)},500);
		player2_card_play_flag = 3;

	}

	else if(player2_card_play_flag==3){
		document.getElementById(card_id).style.opacity = "1";
		document.getElementById("card_single").style.opacity = "0";
		document.getElementById(card_id).style.setProperty("-webkit-transition", "all 0.6s ease-in-out");
		document.getElementById(card_id).style.setProperty("top", "33%");
		document.getElementById(card_id).style.setProperty("left", "45.5%");
		document.getElementById(card_id).style.webkitTransform = "scale(1)";
		document.getElementById(card_id).style.webkitTransform = "rotate(45deg)";
		player2_card_play_flag = 0;
		chudi=0;
		if(lastWinner==1) {
			lastWinner = winPlayer(winning_card(boardCards));			
			curTurn=1;			
			emptyBoard(winning_card(boardCards));
			inputFlag=lastWinner;
		}
		else{
			inputFlag=1;
		}

		clearTimeout(animate);
		
	}
}

function player4_play_card(card_id){
	//THIS METHOD WILL MOVE FOURTH PLAYER'S CARD TO THE PLAY FLOOR
	//AT FIRST IT WILL MOVE ONE CARD OUT
	//THEN IT WILL MOVE TO THE CENTER PLAY FLOOR

	//FOR PLAYER FOUR

	//STARTING POSITION
	//top: 60%; left:  60%;
	//DESIRED POSITION
	//top: 33%;  left:  45.5%;

	

	
	if(player4_card_play_flag==0){
		document.getElementById("card_single").style.top = "60%";
		document.getElementById("card_single").style.left = "60%";
		document.getElementById("card_single").style.opacity = "0";
		document.getElementById("card_single").style.transform = "scale(1)";
		document.getElementById("card_single").style.transform = "rotateY(0deg)";
		//document.getElementById("card_single").style.zIndex = "999";
		document.getElementById(card_id).style.top = "60%";
		document.getElementById(card_id).style.left = "58%";
		document.getElementById(card_id).style.opacity = "0";
		//document.getElementById(card_id).style.zIndex = "998";
		document.getElementById(card_id).style.transform = "rotateY(-90deg)";
		document.getElementById(card_id).style.transform = "scale(1.05)";
		animate = setTimeout(function(){player4_play_card(card_id)},1000);
		player4_card_play_flag = 1;	
	}
	else if(player4_card_play_flag==1){
		document.getElementById("card_single").style.opacity = "1";
		document.getElementById("card_single").style.setProperty("-webkit-transition", "all 0.3s ease-in-out");
		document.getElementById("card_single").style.setProperty("left", "58%");
		document.getElementById("card_single").style.webkitTransform = "scale(1.05)";
		document.getElementById("card_single").style.webkitTransform = "rotateY(90deg)";
		

		clearTimeout(animate);
		animate = setTimeout(function(){player4_play_card(card_id)},280);
		player4_card_play_flag = 2;
	}

	else if(player4_card_play_flag==2){
		document.getElementById(card_id).style.opacity = "1";
		document.getElementById("card_single").style.opacity = "0";
		document.getElementById(card_id).style.setProperty("-webkit-transition", "all 0.3s ease-in-out");
		document.getElementById(card_id).style.webkitTransform = "rotateY(0deg)";
		document.getElementById(card_id).style.webkitTransform = "scale(1.05)";
		
		//document.getElementById("card_single").style.webkitTransform = "rotate(120deg)";
		clearTimeout(animate);
		animate = setTimeout(function(){player4_play_card(card_id)},500);
		player4_card_play_flag = 3;

	}

	else if(player4_card_play_flag==3){
		document.getElementById(card_id).style.opacity = "1";
		document.getElementById("card_single").style.opacity = "0";
		document.getElementById(card_id).style.setProperty("-webkit-transition", "all 0.6s ease-in-out");
		document.getElementById(card_id).style.setProperty("top", "49%");
		document.getElementById(card_id).style.setProperty("left", "45.5%");
		document.getElementById(card_id).style.webkitTransform = "scale(1)";
		document.getElementById(card_id).style.webkitTransform = "rotate(-45deg)";
		
		clearTimeout(animate);
		animate = setTimeout(function(){player4_play_card(card_id)},1000);
		player4_card_play_flag = 4;
	}
	else if(player4_card_play_flag==4){
		clearTimeout(animate);
		player4_card_play_flag = 0;
		chudi=0;
		if(lastWinner==2) {
			lastWinner = winPlayer(winning_card(boardCards));			
			curTurn=1;
			
			emptyBoard(winning_card(boardCards));
			inputFlag=lastWinner;

		}
		else{
			inputFlag=2;
		}
		
	}

}

var myVar = setInterval(play,2000);
