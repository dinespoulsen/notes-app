(function(exports){
  function NoteList(){
    this.notes = [];
  };

  NoteList.prototype.createNote = function(text){
    var newNote = new Note(text);
    this.notes.push(newNote);
  };

  NoteList.prototype.getNotes = function(){
    return this.notes;
  }

  exports.NoteList = NoteList;
})(this);
