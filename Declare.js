// *********************************** DECK.JS ER SHOKOL VARIABLE
var deck = [102,103,104,105,106,107,108,109,110,111,112,113,114,202,203,204,205,206,207,208,209,210,211,212,213,214
,302,303,304,305,306,307,308,309,310,311,312,313,314,402,403,404,405,406,407,408,409,410,411,412,413,414];
var player1Cards=[];
var player2Cards=[];
var player3Cards=[];
var player4Cards=[];
var player1Suits=[[],[],[],[]];
var player2Suits=[[],[],[],[]];
var player3Suits=[[],[],[],[]];
var player4Suits=[[],[],[],[]];
var boardCards=[];
var balchal;
var lame;
var lastWinner=1;
var curTurn=1;
var curClick;
var clickFlag=0;
var vanishFlag=0;
var allCards=[[],[],[],[]];
var leadCards=[114,214,314,414];
var trumpedSuits=[];
var pile_flag = 0;
var pass_flag = 0;
var empty_flag = 0;
var animate2;







// ********************** CALLBRIDGE.JS ER SHOKOL VARIABLE ******************************
//These variable are for move_card_suit function
var animate_move_card_suit;
var move_card_suit_top_flag = 0;
//These variable are for move_card_single function
var animate_move_card_single;
var move_card_single_top_flag = 43;
//These variable are for move_player_1st_card function
var animate_move_player_1st_card;
var move_player_1st_card_top_flag = 39;
var move_player_1st_card_left_flag = 41.5;
var card_distribute_counter = 1;
var time_flag = 0;
var animate;
var inputFlag = -1;
var player1Call=3;
var player2Call=4;
var player3Call=0;
var player4Call=2;
var remaining_call1=0;
var remaining_call2=0;
var remaining_call3=0;
var remaining_call4=0;
var negetive_call1 =0;
var negetive_call2 =0;
var negetive_call3 =0;
var negetive_call4 =0;

var cusion_point_display_animate;
var first_time_flag = 0;




//************************************* GAME.JS ER SHOKOL VARIABLE **********************************
var player1_card_play_flag = 0;
var player2_card_play_flag = 0;
var player4_card_play_flag = 0;
var animate;
var chudi=0;





// *********************************** CALL.JS ER SHOKOL VARIABLE ************************************





//************************************ REINITIALIZE.JS ER SOKOL VARIABLE ******************************

var reinitialize_animate;
var reinitialize_flag = 0;




