
var Deck = function(cardList){
    this.cardList = cardList
}

Deck.prototype.shuffleDeck = function () {
  var temp
  for(var i = 0; i<this.cardList.length; i++){
    var rando = Math.floor(Math.random()*(this.cardList.length - 1))
    temp = this.cardList[i]
    this.cardList[i] = this.cardList[rando]
    this.cardList[rando] = temp
  }
}

Deck.prototype.drawTopCard = function () {

  return this.cardList.pop()
}

var Game = function(whiteDeck, blackDeck){
  this.whiteDeck = new Deck(whiteDeck)
  this.blackDeck = new Deck(blackDeck)
  this.playerArray = []
}

Game.prototype.initialize = function(){
  this.whiteDeck.shuffleDeck()
  this.blackDeck.shuffleDeck()

  this.drawCards()
}

Game.prototype.playerPick = function () {

}

Game.prototype.drawCards = function(){

  var currentBlackCard = this.blackDeck.drawTopCard()

  console.log(currentBlackCard)
  _.times(3, function(){
    _.times(currentBlackCard.pick, function(){
    console.log(this.whiteDeck.drawTopCard())
  }.bind(this))
}.bind(this))

}

Game.prototype.incrementScore = function(player){
  
}

var game = new Game(cardList.whiteCards, cardList.blackCards)
game.initialize()
