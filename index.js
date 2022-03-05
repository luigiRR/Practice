const Odds = require('./Odds.json');
const Markets = require('./FileFromMarketGames.json');
const Matchs = require('./MatchGame.json');

let odd_data = Odds.data ;
let markets_data = Markets.data ;
let match_data = Matchs.data ;

let match_id = 585306 ;
let market_id = 2;
let selection_id = 2;
let game = 'csgo' ;
let fix = odd_data.filter(e=>e.market_id == market_id && e.status == 'OP');


let test = markets_data.filter(e=>e.id == market_id && e.videogame == 'csgo');


console.log(test)
//console.log(fix);