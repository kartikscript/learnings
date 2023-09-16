// let country="india";
// let continent="ASIA";
// let populAtion="100000";
// console.log(country);
// console.log(continent);
// console.log(populAtion);
// console.log('hello world');

// console.log(2**4);
// let x='100';
// console.log(x);

// x*=50;
// console.log(x);

// x/=100;
// console.log(x);

// let isIsland='true';
// console.log(isIsland);
//  let language;

//  console.log(isIsland,populAtion,language);

//  console.log(populAtion/2,populAtion+1);
//  const populationFinland="10000"
// console.log(populAtion<populationFinland);

// const massMark=78;
// const heightMark=1.69;

// const bmiMark=massMark/heightMark**2;

// const massJohn=92;
// const heightJohn=1.95;

// const bmiJohn=massJohn/heightJohn**2;

// console.log(bmiJohn,bmiMark,bmiJohn<bmiMark,);

// if(bmiJohn>bmiMark){
//   console.log(`john's bmi(${bmiJohn}) is higher than mark's bmi(${bmiMark})`)
// }else{
//   console.log(`mark's bmi(${bmiMark}) is higher than john's bmi(${bmiJohn}) `)
// }

// const populationIndia=31;
// if(populationIndia>33){
//   console.log('poplation is above average')
// }else{
//   const belowPopulation=(33-populationIndia)/2;
//   console.log(`population is ${belowPopulation} below average`)
// }

// console.log('9' - '5','19' - '13' + '17','19' - '13' + 17,'123' < 57,5 + 6 + '4' + 9 - 4 - 2);

// const numNeighbours=Number(prompt('how many neighbour country does your country have'));
// console.log(numNeighbours);

// if(numNeighbours===1){
//   console.log('your country has 1 border')
// }else if(numNeighbours>1){
//   console.log('your country has more than 1 border');
// }else{
//   console.log('no borders')
// }

// const scoreDolphin=(97+112+101)/3;
// const scoreKoalas=(109+95+129)/3;
// console.log(scoreDolphin,scoreKoalas, scoreDolphin>scoreKoalas);

// if(scoreDolphin>=100&&scoreDolphin>scoreKoalas){
//   console.log('team dolphin is the winner');
// }else if(scoreKoalas>=100&&scoreKoalas>scoreDolphin){
//   console.log('team koalas is the winner');
// }else if(scoreDolphin>=100&&scoreKoalas>=100&&scoreDolphin===scoreKoalas){
//   console.log('draw');
// }else{
//   console.log('no one wins')
// }

// const day='wednesday';

// if(day==='monday'){
//   console.log('wow');
// }else if (day==='tuesday'||day==='wednesday'){
//   console.log('gazzb');
// }else{
//   console.log('mazak h kya');
// }

// switch(day){
//   case 'monday':
//     console.log('nice');
//     break;
//     case'tuesday':
//     case'wednesday':
//     console.log('boom');
//     break;
//     default:
//       console.log('mazak');

// }
// const language='english';
// switch(language){
//   case 'chinese':
//   case'mandarin':
//   console.log('most number of speakers');
//   break;
//   case'spanish':
//   console.log('2nd numbered speaker')
//   break;
//   case'english':
//   console.log('3rd numbered speaker');
//   break;
//   default:
//     console.log('none bruh');
// }

// const number='222';
// const population= number>=33 ? 'above average': `${33-number} below average`;

// console.log(`your country population is ${population}`);

// const bill= 400 ;
// const tipHigh=0.2*bill;
// const tipLow=0.15 * bill;
// const tip=bill<=300 && bill>=50? tipLow: tipHigh;

// console.log(`the bill was${bill}, the tip was${tip},and total value is ${bill+tip}`);

// function describeCountry(country,population,capitalCity){

//   const info=`${country} has ${population}million people and its capitalcity is ${capitalCity}`;
//   return info;
// }
// const india=describeCountry('India',125,'delhi');
// console.log(india);

// function describeCountry(country,population,capitalCity){

//   const info=`${country} has ${population}million people and its capitalcity is ${capitalCity}`;
//   return info;
// }
// const india=describeCountry('India',125,'delhi');
// console.log(india);

// function percentageOfWorld1(population){
//  const countryPopulation=` your country is${population*100/7900}% of worlds population`;
// return countryPopulation;
// }
// console.log(percentageOfWorld1(125));

// const data1=percentageOfWorld1(125);
// console.log(data1);

// const percentageOfWorld2=function (population){
//   return `your country is ${population*100/7900}% of worlds population`;
// }
// console.log(percentageOfWorld2(100));

// const percentageOfWorld3=population=>{
//   return`your country is ${population*100/7900}% of worlds population`;
// }

// console.log(percentageOfWorld3(200))

// const describePopulation=function (country,population){
//   const percentage=percentageOfWorld3(population);
//   return `${country}has ${population}million and ${percentage}`;
// }

// console.log(describePopulation('india',125));

// const calcAverage=(num1,num2,num3)=> (num1+num2+num3)/3;

// const teamDolphinScore=calcAverage(44,23,279);
// const teamKoalasScore=calcAverage(65,35,49);

// const checkWinner=function(DolphinScore, KoalasScore){

// if(DolphinScore>=2*KoalasScore){
// return `team dolphin wins(${DolphinScore}vs${KoalasScore})`
// }else if(KoalasScore>=2*DolphinScore){
//   return `team koalas wins (${KoalasScore}vs${DolphinScore})`
// }else{return 'no one wins'}
// }
// console.log(checkWinner(teamDolphinScore,teamKoalasScore));

// const percentages=[percentageOfWorld3(100),percentageOfWorld3(200),percentageOfWorld3(400)];
// console.log(percentages);

// const neighbours=['pak' ,'bangla','napal'];
// console.log(neighbours);
// console.log(neighbours[1]);
// console.log(neighbours.length);
// neighbours.push('china');

// neighbours.unshift('west')
// console.log(neighbours);

// neighbours.shift();
// console.log(neighbours)

// const tipCalc=function(bill){

//   if(bill>50&&bill<300){
//     return 0.15*bill;
//   }else{
//     return 0.2*bill;
//   }
// }
// const tips=[tipCalc(125),tipCalc(555),tipCalc(44)];
// console.log(tips);

// const jonas={
//   firstName:'jonas',
// birthYear:1997,
// friends:['micheal','rony','don'],
// hasDriverLicense:true,

// calcAge:function(){
//   this.age= 2037-this.birthYear;
//   return this.age;
// },
// getSummary:function(){
//   return`${this.firstName} is a ${this.calcAge()} years old and has ${this.hasDriverLicense?'a':'no'} license`
// }}
// console.log(jonas.calcAge());
// console.log(jonas.age)
// console.log(jonas.getSummary());

// const mark={
//   fullName:'mark miller',
//   height:1.69,
//   weight:78,

//   calcBMI:function(){
//     this.bmi=this.weight/this.height**2;
//     return this.bmi;
//   }

// }
// const steve={
//   fullName:'steve smith',
//   height:1.95,
//   weight:92,

//   calcBMI:function(){
//     this.bmi=this.weight/this.height**2;
//     return this.bmi;
//   }

// }
// console.log(mark.calcBMI(),steve.calcBMI());//calling/running the method/funcname
// console.log(steve.bmi )

// console.log(`${mark.bmi>steve.bmi?mark.fullName:steve.fullName} has higher bmi than ${mark.bmi>steve.bmi?steve.fullName:mark.fullName}`)

// const bills=[22,295,176,440,37,105,10,1100,86,52];
// const tips=[];
// const totals=[];

// const calcTip=(bill)=>{
//   if(bill<=300&&bill>=50){
//     return 0.15*bill;
//   }else{
//     return 0.2*bill;
//   }
// }

// for(let i=0;i<bills.length;i++){
//   // console.log(bills[i]);
//   // console.log(calcTip(bills[i]));
//   tips.push(calcTip(bills[i]));
// totals.push(bills[i]+calcTip(bills[i]));
// }
// console.log(tips);
// console.log(totals);

// const calcAverage=function (arr){
//   let sum=0;
//   for(i=0;i<arr.length;i++){
//   sum+=arr[i]
//   }
//   return sum/arr.length
// }
// console.log(calcAverage([2,6,2]));
// console.log(calcAverage(totals));

// const game = {
//   team1: 'Bayern Munich',
// team2: 'Borrussia Dortmund',
// players: [
// [
// 'Neuer',
// 'Pavard',
// 'Martinez',
// 'Alaba',
// 'Davies',
// 'Kimmich',
// 'Goretzka',
// 'Coman',
// 'Muller',
// 'Gnarby',
// 'Lewandowski',
// ],
// [
// 'Burki',
// 'Schulz',
// 'Hummels',
// 'Akanji',
// 'Hakimi',
// 'Weigl',
// 'Witsel',
// 'Hazard',
// 'Brandt',
// 'Sancho',
// 'Gotze',
// ],
// ],
// score: '4:0',
// scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
// 'Hummels'],
// date: 'Nov 9th, 2037',
// odds: {
//   team1: 1.33,
//   x: 3.25,
//   team2: 6.5,
// },
// };
// // const [ggk,...others]=game.players[0];
// // console.log(ggk,others);

// const [player1,player2]=game.players;
// console.log(player1);

// const [gk,...fieldPlayers]=player1;
// console.log(gk,fieldPlayers);

// const allPlayers=[...player1,...player2];
// console.log(allPlayers);

// const players1Final=[...player1,'conti','messi','romaa'];
// console.log(players1Final);

// // const {team1,x:draw,team2}=game.odds;
//  const {odds:{team1,x:draw,team2}}=game;
// console.log(draw);

// const printGoals=function(...players){
// console.log(`${players.length} goals scored`)
// }
// printGoals(...game.scored);

//   team1<team2&&console.log(`team 1 is likely to win`);

// for(const [i,el] of game.scored.entries())console.log(`goal${i+1}:${el}`);

// let sum=0;
// for(const avg of Object.values(game.odds)){
// sum+=avg;

// }
// sum/=Object.values(game.odds).length;
// console.log(sum);

// for(const [key,score] of Object.entries(game.odds)){
//  if(game[key]) console.log(`Odd of victory ${game[key]} : ${score}`)
// else console.log(`Odd of draw : ${score}`);
// }

// const gameEvents = new Map([
// [17, '⚽ GOAL'],
// [36, '🔁 Substitution'],
// [47, '⚽ GOAL'],
// [61, '🔁 Substitution'],
// [64, '🔶 Yellow card'],
// [69, '🔴 Red card'],
// [70, '🔁 Substitution'],
// [72, '🔁 Substitution'],
// [76, '⚽ GOAL'],
// [80, '⚽ GOAL'],
// [92, '🔶 Yellow card'],
// ]);
// console.log(gameEvents.size)

// const events =[...new Set(gameEvents.values())];
// console.log(events);

// gameEvents.delete(64);
// console.log(gameEvents);

// console.log(`An Event Happend , on average , every ${90/gameEvents.size} minutes`);

// for(const [time,event] of gameEvents){

//   console.log((time<45 &&`[first Half] ${time} : ${event}`)||(time>45 && `[second Half] ${time} : ${event}`))
// }

// const str='TAP Air Portugal Air';
// console.log(str.slice(4,7));
// console.log(str.replaceAll('Air','ro'))

// const capitalizeTheName=function(name){

//   const lowerName=name.toLowerCase();
//   const correctName=lowerName[0].toUpperCase()+lowerName.slice(1);
//  console.log(correctName)
// }
// capitalizeTheName('kaRTiK')

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click',function(){

//   const input= document.querySelector('textarea').value;
//   const wordsBreak=input.split('\n');

//   let tick=0;
//   for(const lowerWord of wordsBreak){
//    const low=lowerWord.toLowerCase().trim();
//   const [f,s]=low.split('_');
//   tick+=1
//   const final=f+s.replace(s[0],s[0].toUpperCase());
//   console.log(final.padEnd(20,' ')+'✅'.repeat(tick));
//   }
// })

// //function returning function...
// const greeter= greet=> name=> console.log(`${greet} ${name}`);

// greeter('hey') ('kartik');

// const greeterHey = greeter('Hello');
// greeterHey('Kartik');

// const tax=function(rate){
//   return function(value){
//     console.log(value+value*rate)
//   }
// };

// const newTax=tax(0.1);
// newTax(100);
/*
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const quesInput = Number(
      prompt(`${this.question}\n${this.options.join("\n")}\n(write options)`)
    );

    if (
      quesInput &&
      typeof quesInput === "number" &&
      quesInput < this.options.length
    ) {
      this.answers[quesInput]++;
    } else {
      console.log("Enter a valid answer!!");
    }

    // this.displayResult('string')
    this.displayResult();
  },

  displayResult: function (type = "array") {
    if (type === "string") {
      console.log(`Poll results are : ${this.answers.join(", ")}`);
    } else if (type === "array") {
      console.log(this.answers);
    }
  },
};

document
  .querySelector(".btn")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

// poll.displayResult.call({answers:[1,2,3]});

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "violet";
  });
})();

// Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]\

const juliaData = [3, 5, 2, 12, 7];
const kateData = [4, 1, 15, 8, 3];

// console.log(allData)

const checkDogs = function (dogsJulia, dogsKate) {
  juliaData.splice(0, 1);
  juliaData.splice(2, 2);

  const allData = juliaData.concat(kateData);

  for (const [i, val1] of allData.entries()) {
    if (val1 <= 3) {
      console.log(`Dog number ${i + 1} is still a puppy🐶`);
    } else {
      console.log(`Dog number ${i + 1} is an adult, and is ${val1} years old`);
    }
  }
};

checkDogs(juliaData, kateData);

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map((dogAge) =>
    dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4
  );
  console.log(humanAges);

  const filteredAges = humanAges.filter(function (humanAge) {
    return humanAge >= 18;
  });
  console.log(filteredAges);

  // const averageHumanAges=filteredAges.reduce((acc,age)=>acc+age,0)/filteredAges.length;
  const averageHumanAges = filteredAges.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );
  console.log(averageHumanAges);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

//chaining

const calcAverageHumanAge2 = function (ages) {
  const averageAge = ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((humanAge) => humanAge > 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

  console.log(averageAge);
};
calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);

const randomDiceRollsArr = Array.from({ length: 100 }, () =>
  Math.trunc(Math.random() * 6 + 1)
);
console.log(randomDiceRollsArr);

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

dogs.map(
  (curObject) =>
    (curObject.recommendedFoodPortion = Math.trunc(
      curObject.weight ** 0.75 * 28
    ))
);

const dogSarah = dogs.find((obj) => obj.owners.includes("Sarah"));
//  const dogSarahEating= dogSarah.curFood>dogSarah.recommendedFoodPortion ?console.log('it\'s eating too much'):console.log('it\'s eating too little')
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recommendedFoodPortion ? "much" : "little"
  }`
);

const ownersEatTooMuch = dogs
  .filter((obj) => obj.curFood > obj.recommendedFoodPortion)
  .flatMap((obj) => obj.owners);
const ownersEatTooLittle = dogs
  .filter((obj) => obj.curFood < obj.recommendedFoodPortion)
  .flatMap((obj) => obj.owners);

console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat to much`);

console.log(dogs.some((obj) => obj.curFood === obj.recommendedFoodPortion));

console.log(
  dogs.some(
    (obj) =>
      obj.curFood > obj.recommendedFoodPortion * 0.9 &&
      obj.curFood < obj.recommendedFoodPortion * 1.1
  )
);

const okayDogs = dogs.filter(
  (obj) =>
    obj.curFood > obj.recommendedFoodPortion * 0.9 &&
    obj.curFood < obj.recommendedFoodPortion * 1.1 &&
    obj
);

const sortedCurFood = dogs
  .slice()
  .map((obj) => obj.curFood)
  .sort((a, b) => a - b);

console.log(dogs);
console.log(ownersEatTooMuch);
console.log(okayDogs);
console.log(sortedCurFood);

console.log(Math.trunc("23.9"));
console.log(new Date(2023, 9, 12) - new Date(2023, 9, 10));
const whereAmI = function (lat, lon) {
  const getJSON = fetch(`https://geocode.xyz/${lat},${lon}?geoit=json`)
  .then((response) => {
    // if (!response.ok) throw new Error("don't hit many times");
    console.log(response);
    return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.city} , ${data.country}`);
    });
  // .catch((err) => console.error(`something went wrong: ${err}`));
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);

*/

const wait = function (sec) {
  return new Promise((resolve) => {
    setTimeout(resolve, sec * 1000);
  });
};
const imageContainer = document.querySelector(".image-cntainer");

const createImage = function (imgPath) {
  return new Promise(function (res, rej) {
    const image = document.createElement("img");
    image.src = imgPath;

    image.addEventListener("load", function () {
      imageContainer.append(image);
      res(image); //resolved image bcoz of load event which says image load succesful so we then resolve
    });

    image.addEventListener("error", function () {
      rej(new Error("not found"));
    });
  });
};

// let curimg;
// createImage("img-1.jpg")
//   .then((img) => {
//     curimg = img;
//     return wait(2);
//   })
//   .then(() => {
//     curimg.style.display = "none";
//     return createImage("img-2.jpg");
//   })
//   .then((img) => {
//     curimg = img;
//     return wait(2);
//   })
//   .then(() => {
//     curimg.style.display = "none";
//   });

const loadAndPause = async function () {
  try {
    let img = await createImage("img-1.jpg");
    await wait(2);
    img.style.display = "none";
    img = await createImage("img-2.jpg");
    await wait(2);
    img.style.display = "none";
  } catch {
    (err) => console.error(err);
  }
};

const loadAll = async function (arr) {
  const images = arr.map(async function (img) {
    return await createImage(img);
  });
  const imgEl = await Promise.all(images);

  console.log(imgEl);
};
loadAll(["img-1.jpg", "img-2.jpg"]);

const SeriesSum = function (n) {
  return n.reduce((acc, num) => acc + num, 0).toFixed(2);

  // Happy Coding ^_^
};
console.log(SeriesSum([0]));

// "the_stealth-warrior"
const toCamelCase = function (str) {
  const capitalize = str
    .split("-")
    .map((n) => n[0].toUpperCase() + n.slice(1))
    .join("");
  const capitalize2 = capitalize
    .split("_")
    .map((n) => n[0].toUpperCase() + n.slice(1))
    .join("");
  console.log(capitalize2);
};

toCamelCase("the_stealth-warrior");
