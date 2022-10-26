const _ = require("lodash");

class CardShuffler {
  constructor(deck) {
    this.deck = _.shuffle(deck);
    this.activeCards = [];
  }

  /**
   * Get an iterator that will iterate through the cards.
   */
  *getCardDrawer() {
    while (this.deck.length > 0) {
      // Draw new card
      const card = this.deck.shift();

      yield {
        card: card,
        remainingCards: this.deck.length,
      };
    }
  }
}

// 1st using an event like a button click that will call the function
const cardDrawer1 = new CardShuffler([
  { value: "1", type: "♥️" },
  { value: "J", type: "♦️" },
  { value: "9", type: "♠️" },
  { value: "4", type: "♣️" },
]).getCardDrawer();

// Onclick function
const onClick = () => {
  const nextCardStatus = cardDrawer1.next();

  if (nextCardStatus.done) {
    console.log("Deck is now empty!");
  } else {
    console.log("Picked card is: ", nextCardStatus.value.card);
    console.log("Remaining cards in the deck: ", nextCardStatus.value.remainingCards);
  }
};

console.log("=== Method 1: using iterator .next function ===");

console.log("Will start drawing card from the deck");
onClick();
onClick();
onClick();
onClick();

// 2nd using iterator for…of Let's draw the integral deck in a loop
const cardDrawer2 = new CardShuffler([
  { value: "1", type: "♥️" },
  { value: "J", type: "♦️" },
  { value: "9", type: "♠️" },
  { value: "4", type: "♣️" },
]).getCardDrawer();

console.log("=== Method 2: using for…of loop ===");
console.log("Will start drawing card from the deck");

for (const cardStatus of cardDrawer2) {
  console.log("Picked card is: ", cardStatus.card);
  console.log("Remaining cards in the deck: ", cardStatus.remainingCards);
}
console.log("Deck is now empty!");