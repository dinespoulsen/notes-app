(function(exports) {
  function NoteList(){
    this._notes = [];
  }

  NoteList.prototype.addNote = function(note){
    this._notes.push(note);
  };

  NoteList.prototype.showNotes = function(){
    return this._notes;
  };

  NoteList.prototype.createNote = function(string){
    var note = new Note(string);
    this.addNote(note);
  };

  exports.NoteList = NoteList;

})(this);
