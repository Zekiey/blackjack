 let firstCard=6
 let secondCard=9
 let sum=firstCard+secondCard
 let hasBlackJack=false
 let isALive=true
 let message=""

function startGame(){
   if(sum<=20){
      message='Do you want to draw a new card'
   }
   else if(sum===21){
      message="Wohoo! You've got blackjack"
      hasBlackJack=true
   }
   else{
      message="You're out of the game" 
      isALive=false
   }
}

 