(function(exports){
  function NoteController(notelist){
    this.noteList = notelist;

  };

  NoteController.prototype.createNoteListView = function(notelist){
    this.noteListView = new NoteListView(notelist)
  };

  NoteController.prototype.updateHTML = function(noteListView){
    var element = document.getElementById("app");
    element.innerHTML = noteListView.listNotes();
  };

  exports.NoteController = NoteController;

})(this);
