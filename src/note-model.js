(function(exports) {
  function Note(string){
    this._text = string;
  }

  Note.prototype.returnNoteText = function() {
    return this._text;
  };

  Note.prototype.returnFirstTwenty= function() {
    return this._text.slice(0,20) + "...";
  };

  exports.Note = Note;

})(this);
