
/*

 function doit()
{
	//alert("hi");
	//alert(cal(document.getElementById("name2").value));
	alert (reading(cal(document.getElementById("name2").value)));
}
*/

//var b,i,j,p,input(9,3),c,value(8,3),ok(10000,1),nok(10000,1),times(3),t,n,m,s,row,col,okcount,nokcount,val,output(8,3),y,ratednames(8,3),ratedtimes(8,3),ratedvalue(8,3),txt;
okcount=0;
nokcount=0;


/////////////////////////////////-----FUNCTION CALCULATION--------/////////////////////////////

function cala(a)
{

	cal=0;
	i=0;
	if(a.length >0) {

		for (j = 0; j < a.length; j++) {

			b=a.substr(j,1);
			b = b.toLowerCase();
			//alert(b);
			//b=mid(a,j,1)
			//document.write b
				//Select Case Lcase(b)
				switch (b) {
					case "a":
					case "i":
					case "j":
					case "q":
					case "y":
					case "1":
								i=i+1;
								break;
					case "b":
					case "k":
					case "r":
					case "2":
								i=i+2;
								break;
					case "c":
					case "g":
					case "l":
					case "s":
					case "3":
								i=i+3;
								break;
					case "d":
					case "m":
					case "t":
					case "4":
								i=i+4;
								break;
					case "e":
					case "h":
					case "n":
					case "x":
					case "5":
								i=i+5;

								break;
					case "u":
					case "v":
					case "w":
					case "6":
								i=i+6;
								break;
					case "o":
					case "z":
					case "7":
								i=i+7;
								break;
					case "f":
					case "p":
					case "8":
								i=i+8;
								break;
					case "9":
								i=i+9
								break;
				//End Select
				}
			}
		//Next	
		//alert(i);
			
			p=0;
			if (i>80) {
				i=i.toString();
				
					for (j=0; j < i.length; j++) {
					//b=mid(i,j,1)
					b=i.substr(j,1);
					//alert(b);
					p=p+parseInt(b);
				}
			i=p;
			}
			

		
	//end if 
	}
return i;
	//document.write " ==> ",i,"<br>"
//End Function
}

////////////////////////////--------FUNCTION CALCULATION  END----------//////////////////////////

/////////////////////////---------------FUNCTION GOOD--------------------/////////////////
/////////////////////this function returns 2 if number is favourable. if number is not favourable it returns 1
function gooda(i)
{
good="";
if (i>0) {
	switch (i) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 17:
			case 19:
			case 20:
			case 21:
			case 27:
			case 33:
			case 36:
			case 41:
			case 45:
			case 46:
			case 55:
			case 57:
			case 60:
			case 66:
			case 67:
			case 69:
			case 70:
			case 74:
			case 78:
			case 80:
			
				good="GOOD";
				break;
				//document.write "good<br>"&i
			case 39:
			case 54:
			case 30:
				good="AVERAGE";
				break;
			default:

				good="BAD";
				break;
				//document.write "<br>not good"&i


				}
}
return good;
//document.write "<br>value of good  "&good&" "&i
}
/////////////////////////--------------- END FUNCTION GOOD--------------------/////////////////


/////////////////////////////------------------------------func reading
function readinga(i)
{
	//alert(i);
reading="";
if(i>0) {

if(i==1) { reading="Readings begin from value 10. "; }
if(i==2) { reading="Readings begin from value 10.  "; }
if(i==3) { reading="Readings begin from value 10.  "; }
if(i==4) { reading="Readings begin from value 10.  "; }
if(i==5) { reading="Readings begin from value 10.  "; }
if(i==6) { reading="Readings begin from value 10.  "; }
if(i==7) { reading="Readings begin from value 10.  "; }
if(i==8) { reading="Readings begin from value 10.  "; }
if(i==9) { reading="Readings begin from value 10.  "; }
if(i==10) { reading="Dridh ichaa shakti, self CONFIDENCE, stability, patience. Definately does what he decides. He rises in his life "; }
if(i==11) { reading="UNRELIABLE, mentally unstable, he betrays. He is uncertain and no one knows not what he may do "; }
if(i==12) { reading="No. of SACRIFICE. Greedy people take their advantage in all respects. Mental tension, worry and pain."; }
if(i==13) { reading="Changable. He starts work with great enthusiasm but soon becomes dormant. He has high speed. If he takes wrong direction then he may become dangerous"; }
if(i==14) { reading="LUCKY person. He wins lottery. he is very emotional. People take benefit of his simplicity. He dislikes solitude. He participates in social activities. This number denotes MOTION "; }
if(i==15) { reading="Number of RAHASHYA. No one can guess what he will do next. Loves Artmusic, spends most of his time in physical labour and dravya kala. All his works are sudden and surprising. He is lucky and brave"; }
if(i==16) { reading="Uncertain life. He has rapid progress and equally rapid downfall due to vaasnaa. He faces series of accidents. he cannot get rid of tensions. He has lot of dreams but they never get fulfilled. "; }
if(i==17) { reading="INVINCIBLE i.e Ajay. Sangharsh and success. He is not moved by any difficulty or obstacle that may come in his way and his aim remains fixed. Obstacles and difficulties on the other hand gives him special encouragement. He is patient, kind hearted, with enduring ability, forgiver. He gains fame by his works. He by his own effort makes his popularity everlasting "; }
if(i==18) { reading="Viraag, opposition, VaManaShya, mutual enemity. He suffers from family disputes, disputes with spouse. Lack of money, mentally tensed. "; }
if(i==19) { reading="AMBITIOUS, Shresth, divya. He is born in a simple family and rises in life. He comes out from limited resources and gains uncomparable popularity, fame and praise. "; }
if(i==20) { reading="It denotes JUSTICE. He cannot tolerate injustice. He is away from partiality and sees everyone on basis of justice and modifies his relations on this basis. His brain always generate new ideas which are never before seen, surprising, with concrete returns. This number denotes SUBHTA"; }
if(i==21) { reading="A number of SUCCESS, FAVOUR, PROGRESS, BEST, DIVYA and BHAVYA and own pride and self respect. He definately gains success in any field . He attains social popularity and fame for his family "; }
if(i==22) { reading="He is very emotional, trustworthy, simple natured. He easily trusts others. If he sees someone slightly sad then he tries to do every thing for him. He trusts others so much that even if the enemy says few good words then he agrees without thinking. He is said to be a SWAPNADARSHI"; }
if(i==23) { reading="This number denotes dependence on others. He does not do any thing by himself or he is unable to find his way out. If a suitable person guides him then he makes progress at a rapid pace. He is definately hard working but he gets only onefourth benefit."; }
if(i==24) { reading="LABHAANK. He is very patient, careful and very selfish . 1st thinks of his own benefit. Can take benefit by taking out oil from sand. He has thirst and attraction to opposite sex"; }
if(i==25) { reading="He has mixed results in his life. He gains success but before that he has to see lot of difficulties and obstacles. He has fertile brain and is hard working. He does not hesitate to accept any work, new thought, new development... This is the secret of his success "; }
if(i==26) { reading="He is always Careful and alert. His penetrating eyes has the power to look into the internal fact of every thing, but still he is cheated by those friends who on whom he trust more than needed, those relatives whom he thinks to be his own, and those people whose problems he had solved. He is sufferer of trusting others. He must not do partnership, he must be careful in all dealings, and before believing on anything he must test it. "; }
if(i==27) { reading="Fully logical person works by his brain, he attains high rank by his brain. This is because his THOUGHTS are NEW. Hence even if he does some old activity yet it seems to be new and different. He must not pay attention to what others suggest and must do things in his own way. "; }
if(i==28) { reading="50% good number and 50% bad. He works very hard but if is not extremely careful then the whole hard work may be lost. In business he must not go into pomp and show. He must stay away from courts and cases. He must be extremely careful even in smallest activity to attain success. "; }
if(i==29) { reading="UNCERTAINTY number. Any work from the begining comes under do or not do, so a fixed decission is not reached. Thus he almost cannot reach the peak of success "; }
if(i==30) { reading="SKILLFUL. He is a symbol of Intelectuality or Skill. He trusts his intelligence and due to correct thinking he soon attains success. If he is asked to choose between accumulating wealth and accumulating knowledge then certainly he will choose knowledge. He is financially simple."; }
if(i==31) { reading="INTROVERT. He fears society and crowd. Desire to be alone. Easily frightened nature. He desire to think alone. He is unsuccessful but he attains extreme success in some specific field so his unsuccess is masked. "; }
if(i==32) { reading="intellectually best. Lazy. He spends less energy on independent thinking. he does things exactly in the same way as others do or others say, so they are unsuccessful in life. If he thinks independently and work as per his own way then he will be successful. "; }
if(i==33) { reading="Prabal AatmaVishvaas. He does whatever he thinks whatever obstacle may come in way. On the basis of unending patience, extreme rigidness , determination and strong life force he rises, and due to his own work he makes himself KIRTIVAAN and DayDeep"; }
if(i==34) { reading="Due to difficulties in begining, he has sankoch and jhijhak ... leading to feeling of AatmaHeenta... this hampers his progress. He cannot be sucessful even if he wishes "; }
if(i==35) { reading="He desires to have support from others at every step. He thinks not to do any thing and the work may also not stop, so he tries absurd methods in which he remains unsuccessful. If he leaves the work on someone then there is loss. Thus he has minimum success."; }
if(i==36) { reading="Extreme self pride. He keeps whatever he says. He definately does whatever he thinks. He gains high post. He completes his works with extreme accuracy and responsibility. He is mentally simple person and adopts right path. "; }
if(i==37) { reading="This number denotes help and partnership. His Bhagyoday is only possible when he takes help or does partnership. His brain is fertile His plans are found to be 100% correct in future. He is strong AatmaVishVaashi and builds his fortune by his own PurSaarth. "; }
if(i==38) { reading="He is a live example of UNSTABILITY or IMPATIENCE or CHANCHAL. He cannot think on a topic for long. He cannot do a work TikKar or JamKar. He can be good agent or salesman"; }
if(i==39) { reading="DHIRTA, JEEVANTta fertile brain. Whatever difficulties or obstacles may come in his way, he does not lose his way and does not miss his aim, hence he is successful. "; }
if(i==40) { reading="INTROVERT. He seems to be NASTIK from outside but he is DharmBhiru, has respect for God, fears sins. He speaks only as much as required. Thus he is self centered introvert. He reaches his aim after getting lot of set backs. He is sad from point of view of social success."; }
if(i==41) { reading="Born in simple family he rises in his life and attains everything he desires. Thus he definately reaches success. He has SAARGRAHINI PRATIBHA i.e power to know the essence of everything, thus he attains success and becomes eligible for NAME, FAME, RESPECT."; }
if(i==42) { reading="Dependent on others. He has potential, aim and wish to move ahead but he does not do anything untill someone provoke or stimulate him and make him aware of his potentials. "; }
if(i==43) { reading="BADHANK =Number of difficulties. Whatever may be the work and whatever arrangements may have been made still difficulties do come. There is very rare chance of completing any work without difficulties. Unsuccessful every time, again and again difficulties and obstacles, usless headache, quarrel, fight, danga-fasad, cases are indicated. Thus this number is ASUBH"; }
if(i==44) { reading="He cannot do any work without support of others and he suffers whenever he takes help from others. He creates problems for himself and is repeatedly cheated and harmed so he must stop depending on others and act on his own so that he may gain success. "; }
if(i==45) { reading="Good character, successful, flexible nature. He is so flexible that he can manage to stay even with enemies. He is loved by all. He attains success at young age itself."; }
if(i==46) { reading="BHAGYA SUCHAK number. Lot of events happen automatically in his life, which prepares his fortune. This number denotes SPECIALITY, each of his activity denotes bhavyata and divyata which make them successful and brings in UN-ENDING FAME"; }
if(i==47) { reading="UNCERTAINITY. No one knows when and what will happen in his life...there is no prior indication. He is like a piece of wood broken from a ship in mid sea and waves move them here and there and makes him sail and sink. He has been seen leading simple and DariDra life, also at best places with Kushalta Se KaryaSanchalan Karte huae."; }
if(i==48) { reading="This number denotes MegaPower. He definately makes his position in society due to his Fertile imagination, Achook Chintan Dristi and Soojh Bhoojh. He rises in his life due to his own PratiBha. He leads a simple life at the lower level of common lifestyle. SAADGI is his aim, but this becomes his MajBuri as he pays least attention to earn, he has been found to be careless from the point of view of earning. "; }
if(i==49) { reading="He easily lose hope from the difficulties of life, this weakness makes him introvert. He starts to speak less, doesnot wish to attend meetings and societies. He keeps only that much relation with people as necessary. He has very less friends "; }
if(i==50) { reading="This number is the scale of productive imagination. He is SahanSheel, emotional, loves imagination. His world of imagintion is extremely elegant and attractive, and he does not wish to come out of imagination. He stays away from the facts of life. Still his life is not stable, cannot get rid of mental tensions, unable to find solution to the difficulties of life. He is a DREAMER and wants to stay a dreamer."; }
if(i==51) { reading="SUCCESS, TOTAL SUCCESS and WINNING. He has very less struggle in his life. During time of struggle his brain works very sharply and accurately and he attains 100% success but he has lot of ENEMIES and he does not care of these enemies and keeps moving ahead. "; }
if(i==52) { reading="ASUBH number. He has LOSS, unsuccess, tensions. There is not even a small moment of total hapiness in his life. He is broken and disheartened by unending series of unsuccess. He somehow stays alive. "; }
if(i==53) { reading="RAHASHYA-PRABHAV. He can digest just any secret and will not reveal unless he himself wishes to do so. No one can makeout from his face that what is there in his mind. He is master of keeping his face expressionless. He can be a good Detective or defence person"; }
if(i==54) { reading="He is KNOWLEDGEABLE, intelligent speaker, keen logic . He has to power to deviate even enemies into his favour by his personality, thoughts and his speech. No opposition can stand in front of his powerful logics. He can give speech on one topic for hours. He enhances his popularity and respect by his selfconfidence"; }
if(i==55) { reading="he is leader, always number 1, quick decission maker, shows path to others, makes good changes in society "; }
if(i==56) { reading="he wants to be a leader but lacks such qualities. his target is useless, hence he has to fail again and again "; }
if(i==57) { reading="Happy mood. Talks happily and others are ealily lured. Gains success in all business or profession. CHARAIVATI is his MOOLMANTRA. He remains active all time, thus he rapidly moves towards success. "; }
if(i==58) { reading="OPEN, PURE, CLEAR and TRANSPARENT behaviour. Whatever is there in his expression is there in his mind. His mind do not have any tricks, suspicion, bad feeling, ill thought etc.. what ever is there is open in front of all, thus he has lot of supporters but opposers are not less , but overall his influence is good. He is SOMYA, NISHKAPAT, SaHriday, He has sweet behaviour towards others. He is a good doctor. Number 67 has all positive parts of this number "; }
if(i==59) { reading="He witness maximum number of ups and downs in his life. Yen-Ken-PrakaRen accumulating wealth is his aim of life. For accumulating wealth he does not hesitate to go to any extent. For him lie, betray, cheating, speculation, tricks are fair and their means to gain wealth which they definately get. Travel is much, water travel, air travel and all sorts of travel is regular. "; }
if(i==60) { reading="Stays Smiling and makes everybody smile. Keeps smiling even in difficulties. 100% success in Medical services, helping the country and correcting the society"; }
if(i==61) { reading="Total self control, speaks less. He faces difficulties in begining and as age increases he comes closer to success and finally achieves it. Successful towards end of life. Likes to travel and meet people. Shaant and Nischal They are counted among the best personalities."; }
if(i==62) { reading="Successful leader of soldiers. If he joins defence then will soon become officer. Dedicated, selfcontrol, intellectual, no hesitation, he works with speed of storm. He has TOTAL SELF CONFIDENCE so he attains success. "; }
if(i==63) { reading="PAROPKARI number. He feels happy on helping others. Helping others is his aim. He desires progress of others. His nature is to engage in religious activities. He has respect in society. He does usless expenditures thus he always suffers from financial crisis."; }
if(i==64) { reading="Doing a JOB is more successful for him than doing his own business. He has unsuccessful married life, misunderstandings with spouse. Thus mental tensions are natural."; }
if(i==65) { reading="His life is full of ACCIDENTS and risks. He does not like peaceful life. Doing something always is his hobby. He becomes tired if he is not busy and there are no ups and downs, because MOTION is his aim and SANGHARSH is his mool mantra "; }
if(i==66) { reading="TOTAL SUCCESS in every field, it may be business or service. He is always successful in his mission. He is always active resulting in progress and always becoming alert about his aim."; }
if(i==67) { reading="His behaviour is pure, soft and sweet . There is no twist in his mind. Whatever is there in heart is on the tongue, thus he becomes successful. He is specially successful in social upliftment and MEDICAL stream. "; }
if(i==68) { reading="He is always worried and tensed. He has lot of ups and downs in his life and much disturbed brain. He is tensed, lacks courage and becomes impatient. Tricks, twists and cheating are his natural qualities."; }
if(i==69) { reading="Number of KIRTI. He accumulates popularity due to his own work. He is praised and is popular in various situations and societies. He leads a life full of LUCK, POPULARITY and RESPECT"; }
if(i==70) { reading="Number of GOOD LUCK. Where ever he goes he attains success and popularity. This number is less successful than 69. His old age is sweet and life is happy "; }
if(i==71) { reading="This number denotes difficulties. Always there is some or the other difficulty that disturbs him. He always has some unknown fear, so he is unable to work freely and does not get success freely "; }
if(i==72) { reading="This number denotes hard work. He attains success after immense hard work. He attains only 20% success reamining 80% is enjoyed by someone else. He does not show signs of no hope and does not get discouraged. His face always expresses refreshed, happy, smile"; }
if(i==73) { reading="SIMPLICITY. Remaining simple becomes his nature. In the begining he does hard work and tries to rise but difficulties supress him to such an extent that he becomes discouraged and starts to believe that his life is simple and will remain simple."; }
if(i==74) { reading="This number denotes BESTNESS and TOTAL SUCCESS in life. Born in simple family and rises in life. He is not afraid of hard work and does not lose hope, opposing situations cannot move him. Difficulties cannot extinguish the fire of his success so they are successful. "; }
if(i==75) { reading="BHOG pradhan number. He believes in ..Rin karo aur ghee piyo.. He is Sansari, Bhautik wadi, Nastik, Mauj shaukin. He does not think on what will happen tomorrow. Accumulating something is not in his nature. He has lot of sufferings in his old age. "; }
if(i==76) { reading="MISFORTUNE. By extreme hard work he tries to bring situation under control but something such happens that the whole work is lost. "; }
if(i==77) { reading="This number denotes AALGAV. Highly selfish. He looks for his own benefit first. Selfishness gradually increases and he starts being selfish in everything and even with relatives, friends and spouse. Due to this nature no one remains his friend or helper "; }
if(i==78) { reading="This number denotes WEALTH. Automatically he gets lot of chances to gain wealth. He gains money in every activity. Those business where others lose money, there too he is successful. Business knowledge is packed in him."; }
if(i==79) { reading="PAROPKARI. He harms himself to help others. helping others is his nature. He is ahead in social activities and leads a respectable life. "; }
if(i==80) { reading="This number denotes Total Success. Very high position. He can be called successful from all four directions - dharm,, arth, kaam, moksha"; }
//alert (reading);



}
// document.write "<br>value of reading  "&reading&" "&i
return reading;
}

////////////////////////////end func reading




function doit()
{
	//alert("hi");

///name:
//if(document.getElementById("name2").value !="") {
a=document.getElementById("input").value;
//msgbox "hello"
cal_value=cala(a);
//document.getElementById("value2").value=cal_value;

cal_oknok=gooda(cal_value);
//document.getElementById("oknok2").value=cal_oknok;

cal_reading=readinga(cal_value);
//document.getElementById("reading2").value=cal_reading;
//}

document.getElementById('output').innerHTML = "Numerical Value : " +cal_value + "<br> We rate this as " + cal_oknok + "<BR> The reading is : "+ cal_reading;
}

