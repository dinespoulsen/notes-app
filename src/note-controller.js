(function(exports){
  function NoteController(noteList){
    this.noteList = noteList;
  }

  exports.NoteController = NoteController;
})(this);

var myNoteList = new NoteList();
var myNoteController = new NoteController(myNoteList);
myNoteController.noteList.createNote("Favourite drink: seltzer");
var myNoteListView = new NoteListView(myNoteController.noteList);

var element = document.getElementById("app");
console.log(element);


var updateNoteList = function(noteListView){
  var text = noteListView.printHTMLList();
  element.innerHtml = text;
}

element.innerHTML = myNoteListView.printHTMLList();
