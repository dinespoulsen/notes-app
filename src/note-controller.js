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

  NoteController.prototype.makeUrlChangeShowNoteForCurrentPage = function(){
    document.addEventListener("hashchange", this.showNoteForCurrentPage());
  };

  NoteController.prototype.showNoteForCurrentPage = function(){
    this.showNote(this.getNoteFromURL(window.location));
  };

  NoteController.prototype.getNoteFromURL = function(location){
    var noteId = location.hash.split("#")[1];
    if (!noteId) {
      return noteId = 0;
    } else {
      var note = this.noteListView._noteList._notes[noteId];
      return note;
    }
  };

  NoteController.prototype.showNote = function(note){
    this.singleNoteView = new SingleNoteView(note);
    var element = document.getElementById("app");
    element.innerHTML = this.singleNoteView.viewSingleNote();
  };

  exports.NoteController = NoteController;

})(this);
