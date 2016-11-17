function player1(){
	
	var temp;
		if(inputFlag==1){
			if(ultimate==1){
				clickFlag=0;
				var temp = curClick;
				removeCard(player1Suits,curClick.toString()[0]-'1', curClick);
				// given suit ta jodi amar kache na thake then trumpedsuit e add kore dei
				if(boardCards.length!=0){
					if(boardCards[0].toString()[0]!=curClick.toString()[0]) {
						trumpedSuitFunc(trumpedSuits,curClick.toString()[0]-'1',temp);
					}
					
				}
				boardCards.push((temp));
				curTurn++;		

				if(lastWinner==3) {
					var temp2=winning_card(boardCards);
					lastWinner = winPlayer(temp2);			
					curTurn=1;			
					emptyBoard(winning_card(boardCards));
					inputFlag=lastWinner;			
				}
				else{
					inputFlag=3;
				}
			}
			else{
				chudi=1;
				temp=cardSelector(curTurn,player1Suits,player1Call,playerPoints[0]);
				curTurn++;

				player1_play_card(temp);
				//cardShowOnBoard(temp,"rotate(-36deg)","29%","34%");
			}
	}	
}

function player2(){
	
	var temp;
		if(inputFlag==2) {
			if(ultimate==2){
				clickFlag=0;
				var temp = curClick;
				removeCard(player2Suits,curClick.toString()[0]-'1', curClick);
				// given suit ta jodi amar kache na thake then trumpedsuit e add kore dei
				if(boardCards.length!=0){
					if(boardCards[0].toString()[0]!=curClick.toString()[0]) {
						trumpedSuitFunc(trumpedSuits,curClick.toString()[0]-'1',temp);
					}
					
				}
				boardCards.push((temp));
				curTurn++;		

				if(lastWinner==1) {
					var temp2=winning_card(boardCards);
					lastWinner = winPlayer(temp2);			
					curTurn=1;			
					emptyBoard(winning_card(boardCards));
					inputFlag=lastWinner;			
				}
				else{
					inputFlag=1;
				}
			}
			else{
				chudi=1;
				temp=cardSelector(curTurn,player2Suits,player2Call,playerPoints[1]);
				curTurn++;

				player2_play_card(temp);

				//cardShowOnBoard(temp,"rotate(36deg)","29%","47%");
			}		
		

		
	}
		
}	

function player3(){
		if(inputFlag==3){
			if(ultimate==3){
				clickFlag=0;
				var temp = curClick;
				removeCard(player3Suits,curClick.toString()[0]-'1', curClick);
				// given suit ta jodi amar kache na thake then trumpedsuit e add kore dei
				if(boardCards.length!=0){
					if(boardCards[0].toString()[0]!=curClick.toString()[0]) {
						trumpedSuitFunc(trumpedSuits,curClick.toString()[0]-'1',temp);
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
			else{
				chudi=1;
				temp=cardSelector(curTurn,player3Suits,player3Call,playerPoints[2]);
				curTurn++;

				player3_play_card(temp);
				//cardShowOnBoard(temp,"rotate(36deg)","29%","47%");
			}
		

	}
	//clickFlag=0;
}

function player4(){
	
	var temp;
		if (inputFlag==4) {
			if(ultimate==4){
				clickFlag=0;
				var temp = curClick;
				removeCard(player4Suits,curClick.toString()[0]-'1', curClick);
				// given suit ta jodi amar kache na thake then trumpedsuit e add kore dei
				if(boardCards.length!=0){
					if(boardCards[0].toString()[0]!=curClick.toString()[0]) {
						trumpedSuitFunc(trumpedSuits,curClick.toString()[0]-'1',temp);
					}
					
				}
				boardCards.push((temp));
				curTurn++;		

				if(lastWinner==2) {
					var temp2=winning_card(boardCards);
					lastWinner = winPlayer(temp2);			
					curTurn=1;			
					emptyBoard(winning_card(boardCards));
					inputFlag=lastWinner;			
				}
				else{
					inputFlag=2;
				}
			}
			else{
				chudi=1;
				temp=cardSelector(curTurn,player4Suits,player4Call,playerPoints[3]);
				curTurn++;

				
				player4_play_card(temp);
				//cardShowOnBoard(temp,"rotate(-36deg)","49%","47%");
			}	
		
	}			
}
function cardSelector(curTurn,playerSuits,myCall,myPoint) {
		var temp;
		if(curTurn==1) {
			temp=(hand1(playerSuits,myCall,myPoint));
		}
		else if(curTurn==2) {
			temp=(hand2(playerSuits,myCall,myPoint));
		}
		else if(curTurn==3) {
			temp=(hand3(playerSuits,myCall,myPoint));
		}
		else  {
			temp=(hand4(playerSuits,myCall,myPoint));
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
		if(ultimate==1 && inputFlag==1 && clickFlag==1 && nunuFlag==0) {
			player1();
		}
		else if(ultimate==2 && inputFlag==2 && clickFlag==1 && nunuFlag==0) {
			player2();
		}
		else if(ultimate==3 && inputFlag==3 && clickFlag==1 && nunuFlag==0) {
			player3();
			console.log(player3Call);
		}
		else if(ultimate==4 && inputFlag==4 && clickFlag==1 && nunuFlag==0) {
			player4();
		}
		else if(ultimate!=1 && inputFlag==1 && player1_card_play_flag==0) {
			player1();
		}
		else if(ultimate!=2 && inputFlag==2 && player2_card_play_flag==0){
			player2();
		}
		else if(ultimate!=3 && inputFlag==3 && player3_card_play_flag==0) {
			player3();
			console.log(player3Call);
		}
		else if(ultimate!=4 && inputFlag==4 && player4_card_play_flag==0) {
			player4();
		}
		
		
	}

	//IT WILL ENLIGHTEN THE SLAB OF ACTIVE PLAYER AND DIM OTHERS
	// if(inputFlag==1){
	// 	document.getElementById("player1_slab").style.setProperty("opacity","1");
	// 	document.getElementById("player2_slab").style.setProperty("opacity","0.7");
	// 	document.getElementById("player3_slab").style.setProperty("opacity","0.7");
	// 	document.getElementById("player4_slab").style.setProperty("opacity","0.7");
	// }
	// else if(inputFlag==3){
	// 	// document.getElementById("player2_slab").style.setProperty("opacity","1");
	// 	document.getElementById("player2_slab").style.setProperty("filter","brightness(160%)");
	// 	document.getElementById("player1_slab").style.setProperty("opacity","0.7");
	// 	document.getElementById("player3_slab").style.setProperty("opacity","0.7");
	// 	document.getElementById("player4_slab").style.setProperty("opacity","0.7");
	// }
	// else if(inputFlag==4){
	// 	document.getElementById("player3_slab").style.setProperty("opacity","1");
	// 	document.getElementById("player1_slab").style.setProperty("opacity","0.7");
	// 	document.getElementById("player2_slab").style.setProperty("opacity","0.7");
	// 	document.getElementById("player4_slab").style.setProperty("opacity","0.7");
	// }
	// else if(inputFlag==2){
	// 	document.getElementById("player4_slab").style.setProperty("opacity","1");
	// 	document.getElementById("player1_slab").style.setProperty("opacity","0.7");
	// 	document.getElementById("player2_slab").style.setProperty("opacity","0.7");
	// 	document.getElementById("player3_slab").style.setProperty("opacity","0.7");
	// }

	if(inputFlag==1){
		document.getElementById("player1_slab").style.setProperty("filter","brightness(150%)");
		document.getElementById("player2_slab").style.setProperty("filter","brightness(85%)");
		document.getElementById("player3_slab").style.setProperty("filter","brightness(85%)");
		document.getElementById("player4_slab").style.setProperty("filter","brightness(85%)");
	}
	else if(inputFlag==3){
		// document.getElementById("player2_slab").style.setProperty("opacity","1");
		document.getElementById("player2_slab").style.setProperty("filter","brightness(150%)");
		document.getElementById("player1_slab").style.setProperty("filter","brightness(85%)");
		document.getElementById("player3_slab").style.setProperty("filter","brightness(85%)");
		document.getElementById("player4_slab").style.setProperty("filter","brightness(85%)");
	}
	else if(inputFlag==4){
		document.getElementById("player3_slab").style.setProperty("filter","brightness(150%)");
		document.getElementById("player1_slab").style.setProperty("filter","brightness(85%)");
		document.getElementById("player2_slab").style.setProperty("filter","brightness(85%)");
		document.getElementById("player4_slab").style.setProperty("filter","brightness(85%)");
	}
	else if(inputFlag==2){
		document.getElementById("player4_slab").style.setProperty("filter","brightness(150%)");
		document.getElementById("player1_slab").style.setProperty("filter","brightness(85%)");
		document.getElementById("player2_slab").style.setProperty("filter","brightness(85%)");
		document.getElementById("player3_slab").style.setProperty("filter","brightness(85%)");
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
		document.getElementById("card_single").style.opacity = "1";
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

		//CHECK IF IT IS THE LAST CARD
		if(player1Suits[0].length+player1Suits[1].length+player1Suits[2].length+player1Suits[3].length == 0) {
			document.getElementById("player1_fixed_card").style.setProperty("-webkit-transition", "all 0.3s ease-in-out");
			document.getElementById("player1_fixed_card").style.opacity = "0";
		}

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

		//CHECK IF IT IS THE LAST CARD
		if(player2Suits[0].length+player2Suits[1].length+player2Suits[2].length+player2Suits[3].length == 0) {
			document.getElementById("player2_fixed_card").style.setProperty("-webkit-transition", "all 0.3s ease-in-out");
			document.getElementById("player2_fixed_card").style.opacity = "0";
		}


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
			//inputFlag=1000;
		}
		else{
			inputFlag=1;
			//inputFlag=1000;
		}

		clearTimeout(animate);
		
	}
}

function player3_play_card(card_id){
	//THIS METHOD WILL MOVE THIRD PLAYER'S CARD TO THE PLAY FLOOR
	//AT FIRST IT WILL MOVE ONE CARD OUT
	//THEN IT WILL MOVE TO THE CENTER PLAY FLOOR

	//STARTING POSITION
	//top: 60%; left:  23%;
	//DESIRED POSITION
	//top: 49%;   left:  34.5%;



	

	
	
	document.getElementById("card_single").style.top = "60%";
	document.getElementById("card_single").style.left = "23%";
	document.getElementById("card_single").style.opacity = "0";
	document.getElementById("card_single").style.zIndex = "999";
	document.getElementById("card_single").style.transform = "scale(1)";
	document.getElementById(card_id).style.top = "60%";
	document.getElementById(card_id).style.left = "25%";
	document.getElementById(card_id).style.opacity = "0";
	document.getElementById(card_id).style.zIndex = "998";
	document.getElementById(card_id).style.transform = "rotateY(-90deg)";
	document.getElementById(card_id).style.transform = "scale(1.05)";
	
	if(player3_card_play_flag==0){
		animate = setTimeout(function(){player3_play_card(card_id)},1000);
		player3_card_play_flag = 1;	
	}
	else if(player3_card_play_flag==1){
		document.getElementById("card_single").style.opacity = "1";
		document.getElementById("card_single").style.setProperty("-webkit-transition", "all 0.3s ease-in-out");
		document.getElementById("card_single").style.setProperty("left", "25%");
		document.getElementById("card_single").style.webkitTransform = "scale(1.05)";
		document.getElementById("card_single").style.webkitTransform = "rotateY(90deg)";
		

		clearTimeout(animate);
		animate = setTimeout(function(){player3_play_card(card_id)},280);
		player3_card_play_flag = 2;
	}

	else if(player3_card_play_flag==2){
		document.getElementById(card_id).style.opacity = "1";
		document.getElementById("card_single").style.opacity = "0";
		document.getElementById(card_id).style.setProperty("-webkit-transition", "all 0.3s ease-in-out");
		document.getElementById(card_id).style.webkitTransform = "rotateY(0deg)";
		document.getElementById(card_id).style.webkitTransform = "scale(1.05)";
		
		//document.getElementById("card_single").style.webkitTransform = "rotate(120deg)";
		clearTimeout(animate);
		animate = setTimeout(function(){player3_play_card(card_id)},500);
		player3_card_play_flag = 3;

	}

	else if(player3_card_play_flag==3){

		//CHECK IF IT IS THE LAST CARD
		if(player3Suits[0].length+player3Suits[1].length+player3Suits[2].length+player3Suits[3].length == 0) {
			document.getElementById("player3_fixed_card").style.setProperty("-webkit-transition", "all 0.3s ease-in-out");
			document.getElementById("player3_fixed_card").style.opacity = "0";
		}

		document.getElementById(card_id).style.opacity = "1";
		document.getElementById("card_single").style.opacity = "0";
		document.getElementById(card_id).style.setProperty("-webkit-transition", "all 0.6s ease-in-out");
		document.getElementById(card_id).style.setProperty("top", "49%");
		document.getElementById(card_id).style.setProperty("left", "34.5%");
		document.getElementById(card_id).style.webkitTransform = "scale(1)";
		document.getElementById(card_id).style.webkitTransform = "rotate(45deg)";
		player3_card_play_flag = 0;
		chudi=0;
		if(lastWinner==4) {
			lastWinner = winPlayer(winning_card(boardCards));			
			curTurn=1;
			
			emptyBoard(winning_card(boardCards));
			inputFlag=lastWinner;			
		}
		else{
			inputFlag=4;
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
	//top: 49%;  left:  45.5%;

	

	
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

		//CHECK IF IT IS THE LAST CARD
		if(player4Suits[0].length+player4Suits[1].length+player4Suits[2].length+player4Suits[3].length == 0) {
			document.getElementById("player4_fixed_card").style.setProperty("-webkit-transition", "all 0.3s ease-in-out");
			document.getElementById("player4_fixed_card").style.opacity = "0";
		}

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

var myVar = setInterval(play,200);
