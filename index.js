window.onload = function(){
  var noteController = new NoteController();
  window.addEventListener("hashchange", noteController.showNoteForCurrentPage.bind(noteController));
  noteController.preventLoadingPage();
}
