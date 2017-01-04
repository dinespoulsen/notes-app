var myNoteList = new NoteList();
var myNoteController = new NoteController(myNoteList);
myNoteController.noteList.createNote("Favourite drink: seltzer");
myNoteController.createNoteListView(myNoteList);
myNoteController.updateHTML(myNoteController.noteListView);
