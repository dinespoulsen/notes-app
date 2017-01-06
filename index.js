window.onload = function(){
  var noteController = new NoteController();
  window.addEventListener("hashchange", noteController.showNoteForCurrentPage.bind(noteController))
  noteController.createNote("This is a note that is longer than 20 characters.");
  noteController.createNote("This is a note that is also longer than 20 characters.");
  noteController.insertHTML();
  noteController.preventLoadingPage();
};
