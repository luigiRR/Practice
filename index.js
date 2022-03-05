const Odds = require('./Odds.json');
const Markets = require('./FileFromMarketGames.json');
const Matchs = require('./MatchGame.json');

let odd_data = Odds.data ;
let markets_data = Markets.data ;
let match_data = Matchs.data ;

let match_id = 585306 ;
let market_id = 2;
let id = 2;
let selection_id = 2;
let game = 'csgo' ;
let market_res=[]; 

//let fix = markets_data.filter(e=>e.id = id && (el.selections.find(a=>a.id==e.selection_id)));

let fix = odd_data.filter(e=>e.market_id == market_id && e.status == 'OP');

fix.forEach(e=>{
    let marketgame= markets_data.find(el=>el.id==e.market_id && (el.selections.find(a=>a.id==e.selection_id)));
    market_res.push({
        name: marketgame.name,
        selection1: marketgame.selections.find(a=>a.id==e.selection_id),
        quota: e.odd_quota,
        origin: e.odd_origin
    });
});

//let test = markets_data.filter(e=>e.id == market_id && e.videogame == 'csgo');
console.log(market_res);