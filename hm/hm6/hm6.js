/*
   #bolvdlhP
   описати колоду карт (від 6 до туза без джокерів)
   - знайти піковий туз
   - всі шістки
   - всі червоні карти
   - всі буби
   - всі трефи від 9 та більше

   {
       cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
           value: '', // '6'-'10', 'ace','jack','queen','king'
       color:'', // 'red','black'
   }
*/
const suits = ['spades', 'diamonds', 'hearts', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

cards = [];
for (let suit of suits) {
    for (let value of values) {
        cards.push({suit: suit, value: value, color: (suit === 'hearts' || suit === 'diamonds') ? 'red' : 'black'});
    }
}

//- знайти піковий туз
console.log(cards.find(card => (card.suit === 'clubs' && card.value === 'ace')));
//- всі шістки
console.log(cards.filter(card => card.value === '6'));
// - всі червоні карти
console.log(cards.filter(card => card.color === 'red'));
// - всі буби
console.log(cards.filter(card => card.suit === 'diamonds'));
// - всі трефи від 9 та більше
console.log(cards.filter(card => card.suit === 'clubs' && (card.value !== '6' && card.value !== '7' && card.value !== '8')));


/*
   #EP5I1UUzAX
  Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
  {
      spades:[],
      diamonds:[],
      hearts:[],
      clubs:[]
  }
 */

console.log(cards.reduce((accum, card) => {
    switch (card.suit) {
        case 'spades':
            accum.spades.push(card);
            break;
        case 'diamonds':
            accum.diamonds.push(card);
            break;
        case 'clubs':
            accum.clubs.push(card);
            break;
        case 'hearts':
            accum.hearts.push(card);

    }
    return accum;

}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
}));

