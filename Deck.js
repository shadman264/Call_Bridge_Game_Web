//populating allCards array
function populateAllCards(allCards) {
	for(var i=0;i<4;i++) {
		for(var j=2;j<=14;j++) {
			allCards[i][j-2] = 100*(i+1) +j ;
		}
	}
}
//shuffling function
function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

//card distribution function
function distribute() {
	var i;
	var j;
	for(i=0,j=0;i<52;i+=4) {
		player1Cards[j]=deck[i];
		player2Cards[j]=deck[i+1];
		player3Cards[j]=deck[i+2];
		player4Cards[j]=deck[i+3];
		j++;
	}
}

//sorting cards of 4 players function
function sortThem() {
	player1Cards.sort();
	player2Cards.sort();
	player3Cards.sort();
	player4Cards.sort();
}

//function for distributing suits
function distributeSuits(playerCards,playerSuits) {
	for(var i=0;i<13;i++) {
		if(playerCards[i].toString()[0]=="1") {
			playerSuits[0].push(playerCards[i]);
		}
		else if(playerCards[i].toString()[0]=="2") {
			playerSuits[1].push(playerCards[i]);
		}
		else if(playerCards[i].toString()[0]=="3") {
			playerSuits[2].push(playerCards[i]);	
		}
		else {
			playerSuits[3].push(playerCards[i]);
		}
	}
}

function myMax(ara) {
	if(ara.length!=0) {
		var tempMax=ara[0];
		for(var i=1;i<ara.length;i++) {
			if(ara[i]>tempMax) {
				tempMax=ara[i];
			}
		}
		return tempMax;
	}
	return -1;
}
function myMin(ara) {
	if(ara.length!=0) {
		var tempMin=ara[0];
		for(var i=1;i<ara.length;i++) {
			if(ara[i]<tempMin) {
				tempMin=ara[i];
			}
		}
		return tempMin;
	}
	return -1;
}

//winning card finding function
function winning_card(boardCards) {
            var spadeFlag=0;
            var winner=[];
            for(var i=0;i<boardCards.length;i++) {
                if (boardCards[i].toString()[0]=="4") {
                    spadeFlag=1;
                    break;
                }
            }
            if (spadeFlag!=0) {
                return myMax(boardCards);
            }
            else{
                var key_number=boardCards[0].toString()[0];
                for (var i=0;i<boardCards.length;i++) {
                    if (boardCards[i].toString()[0]==key_number)
                        winner.push(boardCards[i]);
                }
                return myMax(winner);
            }

}


//removing a card from players suit function

function removeCard(playerSuits,suitIndex,tempMax) {
	var index;
	for(var i=0;i<playerSuits[suitIndex].length;i++) {
		if(playerSuits[suitIndex][i]==tempMax) {
			index=i;
			break;
		}
	}
	playerSuits[suitIndex].splice(index,1);
	for(var i=0;i<allCards[suitIndex].length;i++) {
		if(allCards[suitIndex][i]==tempMax) {
			index=i;
			break;
		}
	}
	allCards[suitIndex].splice(index,1);
	for(var i=0;i<4;i++) {
		leadCards[i]=myMax(allCards[i]);
	}

}

//function for playing hand1 cards
function hand1(playerSuits) {
		var tempMax;
		//bazare kono trump na thakle
		if(playerSuits[3].length==allCards[3].length) {
			var flag=0;;
			for(var i=0;i<playerSuits.length;i++){
				if(playerSuits[i].indexOf(leadCards[i])>=0) {
					var index = playerSuits[i].indexOf(leadCards[i]);
					tempMax=playerSuits[i][index];
					flag=1;
					break;
				}
			}
			if(flag==0) {
				var myCards = returnMyCardsWithoutSpade(playerSuits);
				if (myCards.length!=0) {
					tempMax = lowestPower(myCards);
				}
				else{
					tempMax = myMin(playerSuits[3]);
				}
			}



		}
		//bazare trump thakle
		else{
			var flag=0;
			for(var i=0;i<playerSuits.length-1;i++){
				if((playerSuits[i].indexOf(leadCards[i])>=0) && (trumpedSuits.indexOf(i)<0) 
					&& (allCards[i].length - playerSuits[i].length) >= 4 ) {
					var index = playerSuits[i].indexOf(leadCards[i]);
					tempMax=playerSuits[i][index];
					flag=1;
					break;
				}
			}
			if(flag==0) {
				if(playerSuits[3].indexOf(leadCards[3])>=0) {
						var index = playerSuits[3].indexOf(leadCards[3]);
						tempMax=playerSuits[3][index];
						flag=1;

				}
			}
			if(flag==0) {
				var myCards = returnMyCardsWithoutSpade(playerSuits);
				if (myCards.length!=0) {
					tempMax = lowestPower(myCards);
				}
				else{
					tempMax = myMin(playerSuits[3]);
				}

			}

		}









		removeCard(playerSuits,tempMax.toString()[0]-'1',tempMax);
		boardCards.push(tempMax);
		return tempMax;
}

//function for playing hand2 cards
function hand2(playerSuits) {
	return hand3(playerSuits);
}


//function for playing hand3 cards
function hand3(playerSuits){
	var suitIndex = boardCards[0].toString()[0] -'1';	
	var tempMax;
	// jodi amar kache oi suit er card thake
	if(playerSuits[suitIndex].length!=0) {
		// jodi trump er khelai hoi
		if(suitIndex==3){
			// amar card ta board er shobar theke boro means akhn o trump hoi nai ebong eitai oi suit er lead card
			if( (myMax(playerSuits[suitIndex]) > myMax(boardCards)) && (playerSuits[suitIndex].indexOf(leadCards[suitIndex]) >=0)) {

				tempMax = myMax(playerSuits[suitIndex]);	
			}
			else {
				tempMax=myMin(playerSuits[suitIndex]);
			}

		}

		// ami charao onnanno manusher kache jodi trump na thake
		else if(playerSuits[3].length==allCards[3].length) {

			// amar card ta board er shobar theke boro means akhn o trump hoi nai ebong eitai oi suit er lead card
			if((myMax(playerSuits[suitIndex]) > myMax(boardCards)) && (playerSuits[suitIndex].indexOf(leadCards[suitIndex]) >=0)) {

				tempMax = myMax(playerSuits[suitIndex]);	
			}
			else {
				tempMax=myMin(playerSuits[suitIndex]);
			}
		}
		// bazar trump e vorpur
		else{
			if((myMax(playerSuits[suitIndex]) > myMax(boardCards)) && (playerSuits[suitIndex].indexOf(leadCards[suitIndex]) >=0) 
				&& (trumpedSuits.indexOf(suitIndex)<0) && (allCards[suitIndex].length-playerSuits[suitIndex].length>=4-boardCards.length)){
				tempMax = myMax(playerSuits[suitIndex]);
			}
			else{
				tempMax = myMin(playerSuits[suitIndex]);
			}


		}

	}


	// oi card nai magar trump ase
	else if(playerSuits[3].length!=0) {
		var temp=[];

		// over trump korar joggota ache kina check korchi
		var boardMax = myMax(boardCards);
		for(var i=0;i<playerSuits[3].length;i++){
			if(playerSuits[3][i]>boardMax){
				temp.push(playerSuits[3][i]);
			}
		}
		//overtrump er joggota ache
		if(temp.length!=0) {
			tempMax = myMin(temp);
		}

		//overtrump er joggota nei
		else{

			// amar hater shob card except spade hudai ekta array te rakhlam

			var myCards=returnMyCardsWithoutSpade(playerSuits);

			// spade na amn ekti baje card chure dilam
			if(myCards.length!=0) {
				tempMax= lowestPower(myCards);

			}

			// amar hater shb e ojoggo trump tar majhe shob theke ojoggo tike chure dilam
			else{
				tempMax=myMin(playerSuits[3]);
			}
		
		}

		trumpedSuitFunc(trumpedSuits,suitIndex);
	}
	// oi card o nai trump o nai bal
	else{
		var myCards=returnMyCards(playerSuits);
		// shei array theke shobtheke kom power er card ta khuje anlam
		tempMax= lowestPower(myCards);
		trumpedSuitFunc(trumpedSuits,suitIndex);
	}

	removeCard(playerSuits,tempMax.toString()[0]-'1',tempMax);
	boardCards.push(tempMax);
	return tempMax;

}

//function for playing hand4Cards


function hand4(playerSuits) {
	var suitIndex = boardCards[0].toString()[0] -'1';

	// if I have a card of that suit is the ultimate case number 1

	if(playerSuits[suitIndex].length!=0){
		var boardMax = myMax(boardCards);
		var myLeads=[];

		// boardmax card er theke boro amar kache oi suit er j card gula ache shegula my leads e handailam
		for(var i=0;i<playerSuits[suitIndex].length;i++) {
			if(playerSuits[suitIndex][i]>boardMax) {
				myLeads.push(playerSuits[suitIndex][i]);
			}
		}
		var tempMax;


		if(myLeads.length!=0) {

			// jodi oi suit er lead card amar kache thake tahole tar modhdhe minimum jeta sheta return korchi
			tempMax = myMin(myLeads);
		}
		else{
			// jodi na thake lead card then oi suit er shorobonimno card ti return korchi
			tempMax = myMin(playerSuits[suitIndex]);		
		}	
		// card ti amar jhuli theke remove kore dichchi
		removeCard(playerSuits,suitIndex,tempMax);
		// card ti ke board card e handie dichchi
		boardCards.push(tempMax);

		// card ti return korchi
		return tempMax;
	}

	// oi suit card nai kintu trump ache :D

	else if(playerSuits[3].length!=0) {
		var tempMax;
		var temp=[];

		// over trump korar joggota ache kina check korchi
		var boardMax = myMax(boardCards);
		for(var i=0;i<playerSuits[3].length;i++){
			if(playerSuits[3][i]>boardMax){
				temp.push(playerSuits[3][i]);
			}
		}
		//overtrump er joggota ache
		if(temp.length!=0) {
			tempMax = myMin(temp);
		}

		//overtrump er joggota nei
		else{

			// amar hater shob card except spade hudai ekta array te rakhlam

			var myCards=returnMyCardsWithoutSpade(playerSuits);

			// spade na amn ekti baje card chure dilam
			if(myCards.length!=0) {
				tempMax= lowestPower(myCards);

			}

			// amar hater shb e ojoggo trump tar majhe shob theke ojoggo tike chure dilam
			else{
				tempMax=myMin(playerSuits[3]);
			}

		}

		// sheti remove kore dilam
		removeCard(playerSuits,tempMax.toString()[0]-'1',tempMax);

		// board card e handailam
		boardCards.push(tempMax);

		// suit ta j amar kache nai ta janie dei
		trumpedSuitFunc(trumpedSuits,suitIndex);
		// return korlam
		return tempMax;


	}

	// oi suit er card o nai abar trump o nai, tar mane amar kache only dui suit er card ache maximum
	else {
		var tempMax;

		//amar hater shob card ekti array te rakhlam
		var myCards=returnMyCards(playerSuits);

		// shei array theke shobtheke kom power er card ta khuje anlam
		tempMax= lowestPower(myCards);

		// card ti remove korlam
		removeCard(playerSuits,tempMax.toString()[0]-'1',tempMax);

		// board card e handlailam
		boardCards.push(tempMax);

		// amar kache j oi suit nei ta computer ke janalam
		trumpedSuitFunc(trumpedSuits,suitIndex);

		// return korlam
		return tempMax;
	}


}

// return all my cards
function returnMyCards(playerSuits) {
	var myCards=[];

		// amar hater shob card hudai ekta array te rakhlam
	for(var i=0;i<playerSuits.length;i++) {
		for(var j=0;j<playerSuits[i].length;j++) {
			myCards.push(playerSuits[i][j]);
		}
	}
	return myCards;
}

// return all my cards except the spades

function returnMyCardsWithoutSpade(playerSuits) {
	var myCards=[];

		// amar hater shob card hudai ekta array te rakhlam
	for(var i=0;i<playerSuits.length-1;i++) {
		for(var j=0;j<playerSuits[i].length;j++) {
			myCards.push(playerSuits[i][j]);
		}
	}
	return myCards;
}


//kono ekta array er shob theke kom power er card return er function
function lowestPower(myCards) {
		var tempMax = myCards[0];
		var tempPower = myCards[0] % 100 ;
		for(var i=1;i<myCards.length;i++) {
			if(myCards[i]%100<tempPower) {
				tempPower = myCards[i]%100;
				tempMax = myCards[i];
			}

		}
		return tempMax;

}

// kono ekta suit karo kache na thakle shei suit er index trumped suit e handailam

function trumpedSuitFunc(trumpedSuits,suitIndex) {
	if(trumpedSuits.length==0) {
		trumpedSuits.push(suitIndex);
	}
	else{
		if(trumpedSuits.indexOf(suitIndex)<0) {
			trumpedSuits.push(suitIndex);
		}
	}
}

function winPlayer(winCard) {
	for(var i=0;i<13;i++) {
		if(player1Cards[i]==winCard) {
			return 1;
		}
		else if(player2Cards[i]==winCard) {
			return 2;
		}
		else if(player3Cards[i]==winCard) {
			return 3;
		}
		else if(player4Cards[i]==winCard) {
			return 4;
		}

	}
}

//clearing winning card from the top left corner just showing for 1 second
/*function clearWinningCard(winning_card) {
		//document.getElementById(winning_card).style.opacity = "0";
		vanishFlag=0;
		clearTimeout(lame);
}*/

// empty board function and showing the winning card in the top left corner and eventually after 1 secong vanishing the card
function emptyBoard(winning_card){
		if(boardCards.length==4) {
			var x = boardCards.pop();
			var x2= boardCards.pop();
			var x3= boardCards.pop();
			var x4= boardCards.pop();
			
			//balchal = setTimeout(function(){vanishFunc(x,x2,x3,x4,winning_card);},1000);
			animate2 = setTimeout(function(){make_pile_to_winner(lastWinner,x,x2,x3,x4,winning_card);},1500);
			document.getElementById(x).style.opacity = "0.2";
			document.getElementById(x2).style.opacity = "0.2";
			document.getElementById(x3).style.opacity = "0.2";
			document.getElementById(x4).style.opacity = "0.2";
			document.getElementById(winning_card).style.opacity = "1";
			vanishFlag=1;
			pile_flag = 0;
			

			
			
		}
}

// vanishing cards graphically and showing winning card graphically
/*function vanishFunc(x,x2,x3,x4,winning_card){
		document.getElementById(x).style.opacity = "0";
		document.getElementById(x2).style.opacity = "0";
		document.getElementById(x3).style.opacity = "0";
		document.getElementById(x4).style.opacity = "0";

		// showing the winning card in the corner		
		document.getElementById(winning_card).style.opacity = "1";
		document.getElementById(winning_card).style.setProperty("-webkit-transition", "all 0.7s ease-out");
		document.getElementById(winning_card).style.webkitTransform = "rotate(0deg)";
		document.getElementById(winning_card).style.setProperty("top", "9%");
		document.getElementById(winning_card).style.setProperty("left", "4%");

		//giving 1 second time to show the winning card and then clear the board
		lame = setTimeout(function(){clearWinningCard(winning_card);},1000);
		
		clearTimeout(balchal);

}*/




function make_pile_to_winner(winner_player,hand_index1,hand_index2,hand_index3,hand_index4,winning_card){
	//THIS METHOD WILL MOVE ALL FOUR BOARD CARD TOGETHER AND MAKE PILE
	


	//FOR PLAYER1

	//STARTING POSITION
	//top: 33%;   left:  34.5%;	
	//DESIRED POSITION
	//top: 43%;  left:  41.5%;	angle:   0deg;


	//FOR PLAYER TWO

	//STARTING POSITION
	//top: 33%;  left:  45.5%;
	//DESIRED POSITION
	//top: 43%;  left:  41.54%;	angle:   0deg;


	//FOR PLAYER THREE

	//STARTING POSITION
	//top: 49%;  left:  34.5%;
	//DESIRED POSITION
	//top: 43%;  left:  41.58%;	angle:   0deg;


	//FOR PLAYER FOUR

	//STARTING POSITION
	//top: 33%;  left:  45.5%;
	//DESIRED POSITION
	//top: 43%;  left:  41.62%;	angle:   0deg;



	//var card1 = player1Cards[hand_index1];
	//var card2 = player2Cards[hand_index2];
	//var card3 = player3Cards[hand_index3];
	//var card4 = player4Cards[hand_index4];


	//NOW ALL FOUR CARD WILL BE MOVED TO THE CENTER AS PILE

	document.getElementById(hand_index1).style.opacity = "1";
	document.getElementById(hand_index2).style.opacity = "1";
	document.getElementById(hand_index3).style.opacity = "1";
	document.getElementById(hand_index4).style.opacity = "1";
	clearTimeout(animate2);

	
	vanishFlag = 0;


	if(pile_flag==0){
		document.getElementById(hand_index1).style.setProperty("-webkit-transition", "all 0.2s ease-in-out");
		document.getElementById(hand_index1).style.setProperty("top", "43%");
		document.getElementById(hand_index1).style.setProperty("left", "41.5%");
		document.getElementById(hand_index1).style.webkitTransform = "rotate(0deg)";
		clearTimeout(animate2);
		animate2 = setTimeout(function(){make_pile_to_winner(winner_player,hand_index1,hand_index2,hand_index3,hand_index4,winning_card)},180); 
		pile_flag = 1;
	}


	else if(pile_flag==1){
		document.getElementById(hand_index2).style.setProperty("-webkit-transition", "all 0.2s ease-in-out");
		document.getElementById(hand_index2).style.setProperty("top", "43%");
		document.getElementById(hand_index2).style.setProperty("left", "41.54%");
		document.getElementById(hand_index2).style.webkitTransform = "rotate(0deg)";
		clearTimeout(animate2);
		animate2 = setTimeout(function(){make_pile_to_winner(winner_player,hand_index1,hand_index2,hand_index3,hand_index4,winning_card)},180); 
		pile_flag = 2;
	}

	else if(pile_flag==2){
		document.getElementById(hand_index4).style.setProperty("-webkit-transition", "all 0.2s ease-in-out");
		document.getElementById(hand_index4).style.setProperty("top", "43%");
		document.getElementById(hand_index4).style.setProperty("left", "41.58%");
		document.getElementById(hand_index4).style.webkitTransform = "rotate(0deg)";
		clearTimeout(animate2);
		animate2 = setTimeout(function(){make_pile_to_winner(winner_player,hand_index1,hand_index2,hand_index3,hand_index4,winning_card)},180); 
		pile_flag = 3;
	}


	else if(pile_flag==3){
		document.getElementById(hand_index3).style.setProperty("-webkit-transition", "all 0.2s ease-in-out");
		document.getElementById(hand_index3).style.setProperty("top", "43%");
		document.getElementById(hand_index3).style.setProperty("left", "41.62%");
		document.getElementById(hand_index3).style.webkitTransform = "rotate(0deg)";
		clearTimeout(animate2);
		animate2 = setTimeout(function(){make_pile_to_winner(winner_player,hand_index1,hand_index2,hand_index3,hand_index4,winning_card)},280); 
		pile_flag = 4;

	}

	else if(pile_flag==4){
		clearTimeout(animate2);
		animate2 = setTimeout(function(){make_pile_to_winner(winner_player,hand_index1,hand_index2,hand_index3,hand_index4,winning_card)},300); 
		pile_flag = 5;
	}

	//NOW MOVE THE PILE TO THE WINNER AND VANISH IT

	else if(pile_flag==5){
		clearTimeout(animate2);
		pile_flag = 0;
		pass_flag = 0;
		document.getElementById(hand_index1).style.setProperty("opacity", "0");
		document.getElementById(hand_index2).style.setProperty("opacity", "0");
		document.getElementById(hand_index3).style.setProperty("opacity", "0");
		document.getElementById(hand_index4).style.setProperty("opacity", "0");



	


		vanish_balloon(lastWinner);
		
		

		pass_pile_to_winner(winner_player,hand_index1,hand_index2,hand_index3,hand_index4,winning_card);
	}




}






function pass_pile_to_winner(winner_player,hand_index1,hand_index2,hand_index3,hand_index4,winning_card){

	//THE PILE WILL MOVE TO THE WINNER PLAYER
	//AND GET VANISHED

	//var card1 = player1Cards[hand_index1];
	//var card2 = player2Cards[hand_index2];
	//var card3 = player3Cards[hand_index3];
	//var card4 = player4Cards[hand_index4];


	if(winner_player==1){
			if(pass_flag==0){
				document.getElementById(hand_index1).style.setProperty("-webkit-transition", "all 0.5s ease-in-out");
				document.getElementById(hand_index1).style.webkitTransform = "scale(0.01)";
				document.getElementById(hand_index1).style.setProperty("top", "25%");
				document.getElementById(hand_index1).style.setProperty("left", "10%");
				document.getElementById(hand_index1).style.setProperty("opacity", "0");
				
				animate2 = setTimeout(function(){pass_pile_to_winner(winner_player,hand_index1,hand_index2,hand_index3,hand_index4,winning_card)},0); 
				pass_flag = 1;
			}
			else if(pass_flag==1){
				

				document.getElementById(hand_index2).style.setProperty("-webkit-transition", "all 0.5s ease-in-out");
				document.getElementById(hand_index2).style.webkitTransform = "scale(0.01)";
				document.getElementById(hand_index2).style.setProperty("top", "25%");
				document.getElementById(hand_index2).style.setProperty("left", "10%");
				document.getElementById(hand_index2).style.setProperty("opacity", "0");

				animate2 = setTimeout(function(){pass_pile_to_winner(winner_player,hand_index1,hand_index2,hand_index3,hand_index4,winning_card)},0); 
				pass_flag = 2;
			}
			else if(pass_flag==2){
				

				document.getElementById(hand_index3).style.setProperty("-webkit-transition", "all 0.5s ease-in-out");
				document.getElementById(hand_index3).style.webkitTransform = "scale(0.01)";
				document.getElementById(hand_index3).style.setProperty("top", "25%");
				document.getElementById(hand_index3).style.setProperty("left", "10%");
				document.getElementById(hand_index3).style.setProperty("opacity", "0");

				clearTimeout(animate2);
				animate2 = setTimeout(function(){pass_pile_to_winner(winner_player,hand_index1,hand_index2,hand_index3,hand_index4,winning_card)},0); 
				pass_flag = 3;
			}
			else if(pass_flag==3){
				

				document.getElementById(hand_index4).style.setProperty("-webkit-transition", "all 0.5s ease-in-out");
				document.getElementById(hand_index4).style.webkitTransform = "scale(0.01)";
				document.getElementById(hand_index4).style.setProperty("top", "25%");
				document.getElementById(hand_index4).style.setProperty("left", "10%");
				document.getElementById(hand_index4).style.setProperty("opacity", "0");

				clearTimeout(animate2);
				animate2 = setTimeout(function(){pass_pile_to_winner(winner_player,hand_index1,hand_index2,hand_index3,hand_index4,winning_card)},0); 
				pass_flag = 4;
			}
			else if(pass_flag==4){
				
				
				clearTimeout(animate2);
				animate2 = setTimeout(function(){pass_pile_to_winner(winner_player,hand_index1,hand_index2,hand_index3,hand_index4,winning_card)},500); 
				pass_flag = 5;
				
			}

			else if(pass_flag==5){
				
				pass_flag = 0;
				if(player3Suits[0].length+player3Suits[1].length+player3Suits[2].length+player3Suits[3].length == 0) {
					

					players_point_calculate();
					
				}
				clearTimeout(animate2);
				vanishFlag=0;

				//chudi = 0;
				//play();
				//lame = setTimeout(function(){clearWinningCard(winning_card);},1000);

				// jodi eitai shesh hand hoi mane player 3 er total card 0 hoye jai taile abar khela shuru
				
				
			}
		}
		
		else if(winner_player==2){
			if(pass_flag==0){
				document.getElementById(hand_index1).style.setProperty("-webkit-transition", "all 0.5s ease-in-out");
				document.getElementById(hand_index1).style.webkitTransform = "scale(0.01)";
				document.getElementById(hand_index1).style.setProperty("top", "25%");
				document.getElementById(hand_index1).style.setProperty("left", "75%");
				document.getElementById(hand_index1).style.setProperty("opacity", "0");
				
				animate2 = setTimeout(function(){pass_pile_to_winner(winner_player,hand_index1,hand_index2,hand_index3,hand_index4,winning_card)},0); 
				pass_flag = 1;
			}
			else if(pass_flag==1){
				

				document.getElementById(hand_index2).style.setProperty("-webkit-transition", "all 0.5s ease-in-out");
				document.getElementById(hand_index2).style.webkitTransform = "scale(0.01)";
				document.getElementById(hand_index2).style.setProperty("top", "25%");
				document.getElementById(hand_index2).style.setProperty("left", "75%");
				document.getElementById(hand_index2).style.setProperty("opacity", "0");

				animate2 = setTimeout(function(){pass_pile_to_winner(winner_player,hand_index1,hand_index2,hand_index3,hand_index4,winning_card)},0); 
				pass_flag = 2;
			}
			else if(pass_flag==2){
				

				document.getElementById(hand_index3).style.setProperty("-webkit-transition", "all 0.5s ease-in-out");
				document.getElementById(hand_index3).style.webkitTransform = "scale(0.01)";
				document.getElementById(hand_index3).style.setProperty("top", "25%");
				document.getElementById(hand_index3).style.setProperty("left", "75%");
				document.getElementById(hand_index3).style.setProperty("opacity", "0");

				clearTimeout(animate2);
				animate2 = setTimeout(function(){pass_pile_to_winner(winner_player,hand_index1,hand_index2,hand_index3,hand_index4,winning_card)},0); 
				pass_flag = 3;
			}
			else if(pass_flag==3){
				

				document.getElementById(hand_index4).style.setProperty("-webkit-transition", "all 0.5s ease-in-out");
				document.getElementById(hand_index4).style.webkitTransform = "scale(0.01)";
				document.getElementById(hand_index4).style.setProperty("top", "25%");
				document.getElementById(hand_index4).style.setProperty("left", "75%");
				document.getElementById(hand_index4).style.setProperty("opacity", "0");

				clearTimeout(animate2);
				animate2 = setTimeout(function(){pass_pile_to_winner(winner_player,hand_index1,hand_index2,hand_index3,hand_index4,winning_card)},0); 
				pass_flag = 4;
			}
			else if(pass_flag==4){
				
				
				clearTimeout(animate2);
				animate2 = setTimeout(function(){pass_pile_to_winner(winner_player,hand_index1,hand_index2,hand_index3,hand_index4,winning_card)},500); 
				pass_flag = 5;
				
			}

			else if(pass_flag==5){
				
				pass_flag = 0;
				if(player3Suits[0].length+player3Suits[1].length+player3Suits[2].length+player3Suits[3].length == 0) {
					players_point_calculate();
					reinitialize();
				}
				clearTimeout(animate2);
				vanishFlag=0;
				//chudi = 0;
				//play();
				//lame = setTimeout(function(){clearWinningCard(winning_card);},1000);
				// jodi eitai shesh hand hoi mane player 3 er total card 0 hoye jai taile abar khela shuru
				

				
			}
		}

		else if(winner_player==4){
			if(pass_flag==0){
				document.getElementById(hand_index1).style.setProperty("-webkit-transition", "all 0.5s ease-in-out");
				document.getElementById(hand_index1).style.webkitTransform = "scale(0.01)";
				document.getElementById(hand_index1).style.setProperty("top", "75%");
				document.getElementById(hand_index1).style.setProperty("left", "75%");
				document.getElementById(hand_index1).style.setProperty("opacity", "0");
				
				animate2 = setTimeout(function(){pass_pile_to_winner(winner_player,hand_index1,hand_index2,hand_index3,hand_index4,winning_card)},0); 
				pass_flag = 1;
			}
			else if(pass_flag==1){
				

				document.getElementById(hand_index2).style.setProperty("-webkit-transition", "all 0.5s ease-in-out");
				document.getElementById(hand_index2).style.webkitTransform = "scale(0.01)";
				document.getElementById(hand_index2).style.setProperty("top", "75%");
				document.getElementById(hand_index2).style.setProperty("left", "75%");
				document.getElementById(hand_index2).style.setProperty("opacity", "0");

				animate2 = setTimeout(function(){pass_pile_to_winner(winner_player,hand_index1,hand_index2,hand_index3,hand_index4,winning_card)},0); 
				pass_flag = 2;
			}
			else if(pass_flag==2){
				

				document.getElementById(hand_index3).style.setProperty("-webkit-transition", "all 0.5s ease-in-out");
				document.getElementById(hand_index3).style.webkitTransform = "scale(0.01)";
				document.getElementById(hand_index3).style.setProperty("top", "75%");
				document.getElementById(hand_index3).style.setProperty("left", "75%");
				document.getElementById(hand_index3).style.setProperty("opacity", "0");

				clearTimeout(animate2);
				animate2 = setTimeout(function(){pass_pile_to_winner(winner_player,hand_index1,hand_index2,hand_index3,hand_index4,winning_card)},0); 
				pass_flag = 3;
			}
			else if(pass_flag==3){
				

				document.getElementById(hand_index4).style.setProperty("-webkit-transition", "all 0.5s ease-in-out");
				document.getElementById(hand_index4).style.webkitTransform = "scale(0.01)";
				document.getElementById(hand_index4).style.setProperty("top", "75%");
				document.getElementById(hand_index4).style.setProperty("left", "75%");
				document.getElementById(hand_index4).style.setProperty("opacity", "0");

				clearTimeout(animate2);
				animate2 = setTimeout(function(){pass_pile_to_winner(winner_player,hand_index1,hand_index2,hand_index3,hand_index4,winning_card)},0); 
				pass_flag = 4;
			}
			else if(pass_flag==4){
				
				
				clearTimeout(animate2);
				animate2 = setTimeout(function(){pass_pile_to_winner(winner_player,hand_index1,hand_index2,hand_index3,hand_index4,winning_card)},500); 
				pass_flag = 5;
				
			}

			else if(pass_flag==5){
				
				pass_flag = 0;
				if(player3Suits[0].length+player3Suits[1].length+player3Suits[2].length+player3Suits[3].length == 0) {

					players_point_calculate();
					
				}
				clearTimeout(animate2);
				vanishFlag=0;
				//chudi = 0;
				//play();
				//lame = setTimeout(function(){clearWinningCard(winning_card);},1000);
// jodi eitai shesh hand hoi mane player 3 er total card 0 hoye jai taile abar khela shuru
				
				
			}
		}

		else if(winner_player==3){
			if(pass_flag==0){
				document.getElementById(hand_index1).style.setProperty("-webkit-transition", "all 0.5s ease-in-out");
				document.getElementById(hand_index1).style.webkitTransform = "scale(0.01)";
				document.getElementById(hand_index1).style.setProperty("top", "75%");
				document.getElementById(hand_index1).style.setProperty("left", "10%");
				document.getElementById(hand_index1).style.setProperty("opacity", "0");
				
				animate2 = setTimeout(function(){pass_pile_to_winner(winner_player,hand_index1,hand_index2,hand_index3,hand_index4,winning_card)},0); 
				pass_flag = 1;
			}
			else if(pass_flag==1){
				

				document.getElementById(hand_index2).style.setProperty("-webkit-transition", "all 0.5s ease-in-out");
				document.getElementById(hand_index2).style.webkitTransform = "scale(0.01)";
				document.getElementById(hand_index2).style.setProperty("top", "75%");
				document.getElementById(hand_index2).style.setProperty("left", "10%");
				document.getElementById(hand_index2).style.setProperty("opacity", "0");

				animate2 = setTimeout(function(){pass_pile_to_winner(winner_player,hand_index1,hand_index2,hand_index3,hand_index4,winning_card)},0); 
				pass_flag = 2;
			}
			else if(pass_flag==2){
				

				document.getElementById(hand_index3).style.setProperty("-webkit-transition", "all 0.5s ease-in-out");
				document.getElementById(hand_index3).style.webkitTransform = "scale(0.01)";
				document.getElementById(hand_index3).style.setProperty("top", "75%");
				document.getElementById(hand_index3).style.setProperty("left", "10%");
				document.getElementById(hand_index3).style.setProperty("opacity", "0");

				clearTimeout(animate2);
				animate2 = setTimeout(function(){pass_pile_to_winner(winner_player,hand_index1,hand_index2,hand_index3,hand_index4,winning_card)},0); 
				pass_flag = 3;
			}
			else if(pass_flag==3){
				

				document.getElementById(hand_index4).style.setProperty("-webkit-transition", "all 0.5s ease-in-out");
				document.getElementById(hand_index4).style.webkitTransform = "scale(0.01)";
				document.getElementById(hand_index4).style.setProperty("top", "75%");
				document.getElementById(hand_index4).style.setProperty("left", "10%");
				document.getElementById(hand_index4).style.setProperty("opacity", "0");

				clearTimeout(animate2);
				animate2 = setTimeout(function(){pass_pile_to_winner(winner_player,hand_index1,hand_index2,hand_index3,hand_index4,winning_card)},0); 
				pass_flag = 4;
			}
			else if(pass_flag==4){
				
				
				clearTimeout(animate2);
				animate2 = setTimeout(function(){pass_pile_to_winner(winner_player,hand_index1,hand_index2,hand_index3,hand_index4,winning_card)},500); 
				pass_flag = 5;
				
			}

			else if(pass_flag==5){
				
				pass_flag = 0;
				if(player3Suits[0].length+player3Suits[1].length+player3Suits[2].length+player3Suits[3].length == 0) {
					
					players_point_calculate();
					
					
				}
				
					
				clearTimeout(animate2);
				vanishFlag=0;	
				
				
				// ek game shesh so reinitialize kortesi
				// jodi eitai shesh hand hoi mane player 3 er total card 0 hoye jai taile abar khela shuru

				//chudi = 0;
				//play();
				//lame = setTimeout(function(){clearWinningCard(winning_card);},1000);
				
			}

			
			
			
			
			

			//document.getElementById(card4).style.setProperty("-webkit-transition", "all 0.3s ease-in-out");
			//document.getElementById(card4).style.webkitTransform = "scale(0)";
			//document.getElementById(card4).style.setProperty("top", "75%");
			//document.getElementById(card4).style.setProperty("left", "10%");
			

			//document.getElementById(card3).style.setProperty("-webkit-transition", "all 0.3s ease-in-out");
			//document.getElementById(card3).style.webkitTransform = "scale(0)";
			//document.getElementById(card3).style.setProperty("top", "75%");
			//document.getElementById(card3).style.setProperty("left", "10%");
			
		}
		// ek game shesh so reinitialize kortesi


}







function players_point_calculate(){

	var audio = new Audio('beep2.mp3');

	if(anim_flag==0){

		//players' point will be calculated now

		//point calculation of player3

		player3_previous_point = player3_present_point;
		if(player3Call-remaining_call3==-1 || player3Call-remaining_call3==0){
			if(player3Call==0){
				player3_present_point+=5;	
			}
			else if(player3Call==8){
				player3_present_point+=13;
			}
			else{
				player3_present_point += player3Call;	
			}
		}
		else{
			if(player3Call==0){
				player3_present_point-=5;	
			}
			else{
				player3_present_point -= player3Call;	
			}
				
		}
		


		

		//point calculation of player4

		player4_previous_point = player4_present_point;
		if(player4Call-remaining_call4==-1 || player4Call-remaining_call4==0){
			if(player4Call==0){
				player4_present_point+=5;	
			}
			else if(player4Call==8){
				player4_present_point+=13;
			}
			else{
				player4_present_point += player4Call;	
			}
		}
		else{
			if(player4Call==0){
				player4_present_point-=5;	
			}
			else{
				player4_present_point -= player4Call;	
			}
				
		}
	}
	



	//NOW CUSION_POINT_DISPLAY WILL COME TO PLAY


	if(anim_flag==0){
		//player1 cusion_point_display

		//cusion_point_display(player1_present_point,player1_previous_point,1);

		anim = setTimeout(players_point_calculate,100);
		anim_flag = 1;
	}

	else if(anim_flag==1){
		//player2 cusion_point_display

		//cusion_point_display(player2_present_point,player2_previous_point,2);
		anim = setTimeout(players_point_calculate,110);
		anim_flag = 2;

	}


	else if(anim_flag==2){
		//player2 cusion_point_display
		anim = setTimeout(players_point_calculate,120);
		cusion_point_display(player3_present_point,player3_previous_point,3);

		anim_flag = 3;
		//audio.play();
	}


	else if(anim_flag==3){
		//player2 cusion_point_display

		cusion_point_display(player4_present_point,player4_previous_point,4);

		anim_flag = 0;
		clearTimeout(anim);
		reinitialize();
	}
}









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





























