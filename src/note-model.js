(function(exports) {

  var idCounter = 0;

  function Note(string){
    this._text = string;
    this.id = idCounter;
    idCounter += 1;
  }

  Note.prototype.returnNoteText = function() {
    return this._text;
  };

  Note.prototype.returnFirstTwenty= function() {
    return this._text.slice(0,20) + "...";
  };

  exports.Note = Note;

})(this);
