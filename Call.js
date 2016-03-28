function showAllPlayerBalloon(player3Call){
	//NOW ALL PLAYER's BALLOONS ARE GOING TO BE DISPLAYED

	//player1 balloon display
	player1Call= callGenerator(player1Suits);
	ShowAllBalloon(44,19,1,player1Call);

	//player2 balloon display
	player2Call= callGenerator(player2Suits);
	ShowAllBalloon(44,90,2,player2Call);

	//player3 balloon Display
	ShowAllBalloon(85,19,3,player3Call);

	//player4 balloon display
	player4Call= callGenerator(player4Suits);
	ShowAllBalloon(85,90,4,player4Call);

}
function ShowAllBalloon(top,StartOfleft,playerID,playerCall){
	//FIRST ROW OF 7 BALLONS DISPLAY
	for(var i=0;i<playerCall;i++){
		if(i==7){
			break;
		}
		show_balloon('MyImage/CallDisplay/chip.png', top,StartOfleft-3*i,playerID*1000+playerCall-i,3);
		
	}

	//SECOND ROW OF OTHER BALLONS
	if(playerCall-7>0){
		for(var i=0;i<(playerCall%7);i++){
			show_balloon('MyImage/CallDisplay/chip.png', top+6.3,StartOfleft-3*i,(playerID*1000+(playerCall%7))-i,3);
			
		}
	}

}

function callGenerator(playerSuits) {
	// eikhane shob call er summation rakha hoppe
	var sum =0;
	var trumpSum=0;

	for(var i=3;i>=0;i--) {
		// spade bade shokol card er jonno ek rokom chinta vabna
		if(i!=3) {
			// normally ace ebong king er jonno summation
			sum += leadsNormal(playerSuits[i],i);

			//trump er jonno summation korlam
			if(playerSuits[i].length<=2 && playerSuits[3].length-trumpSum + 1 >0){
				trumpSum++;
			}
			if(i==0) {
				if(playerSuits[3].length-trumpSum>3) {
					trumpSum+=(playerSuits[3].length-trumpSum)%3;
				}
			}

		}

		// spade er jonno vinno chinta vabna 
		else{
			trumpSum+=serialLeadsSpade(3,playerSuits[3]); 
			
		}

	}

	return sum + trumpSum;
}
function serialLeadsSpade(suitIndex,ara) {
	var sum=0;
	var leader =myMax(ara);
	for (var i=0;i<ara.length;i++) {
		if(ara.length>414-leader && ara.indexOf(leader)>=0) {
			sum++;
			leader--;
		}
		else{

			
			break;
			
		}
	}
	return sum;


}
function leadsNormal(ara,suitIndex) {
	var sum=0;
	var leader = (suitIndex+1)*100 + 14;
	if(ara.indexOf(leader)>=0){
		sum++;
	}
	if(ara.length<=4 && ara.length>=2 && ara.indexOf(leader-1)>=0){
		sum++;
	}
	return sum;
}