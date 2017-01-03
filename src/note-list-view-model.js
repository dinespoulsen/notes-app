(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  };

  NoteListView.prototype.printHTMLList = function() {
    var output = "<ul>"

    for(i=0;i<this.noteList.getNotes().length;i++) {
      output += "<li><div>" + this.noteList.notes[i].getText() + "</div></li>"
    }
    return output + "</ul>"
  }

  exports.NoteListView = NoteListView;

})(this);
