var Letter = function(value){
  this.letter = value;
  this.guessed = false;
  this.guessedYet = function(character ){

    if(this.letter === character){
      this.guessed = true;
      return "character";
    }else{

     if(this.letter === character){
       this.guessed = false;
       return this.letter;

     }
  }
};

this.guess = function (guess) {
  if (guess === this.letter) {
      this.guessed = true;
  }
}
}

module.exports = Letter;
