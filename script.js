"use strict"

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

  this.setUpCards()
}

Game.prototype.playerPick = function () {

}

Game.prototype.setUpCards = function(){

  var currentBlackCard = this.blackDeck.drawTopCard()
  $('#black-card-text').html(currentBlackCard.text)

  for(var i=0; i< currentBlackCard.pick; i++){
    var $row = $('<div>').addClass('row').attr('id', 'white-row-'+i)
    for(var j=0; j < 4; j++){
      var $card = $('<div>').addClass('card-panel white')

      var $whiteSpan = $('<span>').addClass('white-card-text').html(this.whiteDeck.drawTopCard())
      $card.append($whiteSpan)
      var $whiteHolder = $('<div>').addClass('col s3 white-col').attr('id', 'white-col-'+j)

      $('#white-card-container').append($row.append($whiteHolder.append($card)))
      }
    }
    var $buttonHolder = $('<div>').addClass('row').attr('id', 'select-button-holder')

    for(let i=0; i<4; i++){
      var $col = $('<div>').addClass('col s3')
      var $selectButton = $('<a>')
      .addClass('waves-effect waves-light black btn')
      .text(`Select Player ${i+1}`)
      .attr('id', `player-${i}`)
      .click(()=>{this.incrementScore(i)})

      $buttonHolder.append($col.append($selectButton))
    }
    $('#white-card-container').append($buttonHolder)
}

Game.prototype.incrementScore = function(player){
  console.log(player)
  $('#white-card-container').empty()
  this.setUpCards()
}

var game = new Game(cardList.whiteCards, cardList.blackCards)
game.initialize()
