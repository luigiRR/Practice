const Odds = require('./Odds.json');
const Markets = require('./FileFromMarketGames.json');
const Matchs = require('./MatchGame.json');

let odd_data = Odds.data ;
let markets_data = Markets.data ;
let match_data = Matchs.data ;

let match_id = 585306 ;
let market_id = 2;
let game = 'csgo' ;
let fix = odd_data.filter(e=>e.match.id == match_id && e.status == 'OP' && market_id == e.market_id);

//let dix = markets_data.filter(fix.id == market_id)


console.log(fix);