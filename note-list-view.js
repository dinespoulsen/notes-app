(function(exports) {
  function NoteListView(noteList){
    this._noteList = noteList;
  }

  NoteListView.prototype.listNotes = function(){
    notes = "<ul>";
    for (i = 0; i < this._noteList._notes.length; i++) {
      notes += "<li><div>" + this._noteList._notes[i].returnNoteText() + "</div></li>";
    }
    notes += "</ul>";
    return notes;
  };

  exports.NoteListView = NoteListView;

})(this);