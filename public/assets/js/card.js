// $(document).ready(function() {
//     let currentDeck = [];

//     let $deck-title = $(".deck-title");

//     function getDeckTitle() {
//         $.get("/api/flashcards/deck_name/1", function(data) {
//             deckName = data;
//           });
//         }
//     } 
// };

// $.get("/api/flashcards/deck/1", function(result) {
    
// });

function roll() {
    $('.roll-header-inner').toggleClass('rolled');
    flip();
};
// changes the class of the card face which animates the flip and toggles the side shown
function flip() {
    $('.flip-card-inner').toggleClass('flipped');
};


// need way to get deck name and display in deck title

// need way to get card from selected deck and display question on question side of card/

// need way to get card from selected deck and display answer on answer side of card

// need way to get last card

// need way to get next card

