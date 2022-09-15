 let firstCard = 10
 let secondCard = 4
 let sum = firstCard + secondCard
 let hasBlackJack = false
 let isALive = true
 let message = ""
 let messageEl = document.getElementById("message-el")
 let sumEl = document.getElementById("sum-el")
 let cardsEl = document.getElementById("cards-el")

function startGame(){
   cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
   sumEl.textContent = "Sum: " + sum
   if(sum <= 20){
      message='Do you want to draw a new card'
   }
   else if(sum === 21){
      message = "Wohoo! You've got blackjack"
      hasBlackJack = true
   }
   else{
      message = "You're out of the game" 
      isALive = false
   }
   messageEl.textContent = message 
}

function newCard() {
   console.log("Drawing a new card from the deck!")
   let card = 7

   sum += card

   startGame();
}

 