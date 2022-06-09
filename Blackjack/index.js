var cards = Array("A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K")
var suit = Array("clubs", "spades", "hearts", "diamonds")

function start() {
    console.log("Game Started.")

    var firstCard = cards[Math.floor(Math.random() * cards.length)];
    var secondCard = cards[Math.floor(Math.random() * cards.length)];

    var suit1 = cards[Math.floor(Math.random() * cards.length)];
    var suit2 = cards[Math.floor(Math.random() * cards.length)];

    console.log(firstCard)
    console.log(secondCard)

    document.getElementById("card").innerText = "Cards: "
    document.getElementById("sum").innerText = "Sum: "
    document.getElementById("start").remove()

    document.getElementById("card").innerText += " " + firstCard
    document.getElementById("card").innerText += " " + secondCard

    if (firstCard === "J" || firstCard === "Q" || firstCard === "K") {
        firstCard = 10
    }
    if (secondCard === "J" || secondCard === "Q" || secondCard === "K") {
        secondCard = 10
    }

    let sum = firstCard + secondCard

    document.getElementById("sum").innerText += " " + sum

    document.getElementById("message-el").innerText = "Next move?"

}


if (sum < 21) {
    console.log("Do yo want to draw a new card?")
} else if (sum === 21) {
    console.log("Wohoo! You've got a blackjack!")
} else {
    console.log("You're out of the game!")
}
