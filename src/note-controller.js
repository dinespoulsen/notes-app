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
    window.addEventListener("hashchange", this.showNoteForCurrentPage.bind(this));
    console.log(this)
  };

  NoteController.prototype.showNoteForCurrentPage = function(){
    this.showNote(this.getNote(window.location));
  };

  NoteController.prototype.getNote = function(location){
   var noteID = location.hash.split("/")[1];
   var note = this.noteList._notes[noteID];
   return note
  };

  NoteController.prototype.showNote = function(note){
    this.singleNoteView = new SingleNoteView(note);
    var element = document.getElementById("app");
    element.innerHTML = this.singleNoteView.viewSingleNote();
  };

  exports.NoteController = NoteController;

})(this);
