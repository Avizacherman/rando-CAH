
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
  $('#black-card-text').html(currentBlackCard.text)

  for(var i=0; i< currentBlackCard.pick; i++){
    var $row = $('<div>').addClass('row').attr('id', 'white-row-'+j).append($('<div>').addClass('col s2'))
    for(var j=0; j < 3; j++){
      var $card = $('<div>').addClass('card-panel white')


      var $whiteSpan = $('<span>').addClass('white-card-text').html(this.whiteDeck.drawTopCard())
      $card.append($whiteSpan)
      var $whiteHolder = $('<div>').addClass('col s2 white-col').attr('id', 'white-col-'+i)

      $('#white-card-container').append($row.append($whiteHolder.append($card)))
      }
    }
}

Game.prototype.incrementScore = function(player){

}

var game = new Game(cardList.whiteCards, cardList.blackCards)
game.initialize()
