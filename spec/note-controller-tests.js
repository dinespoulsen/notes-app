window.onload = function() {

function controllerExists() {
  var noteController = new NoteController();
  assert.isTrue(noteController);
};

function controllerCanInsertHTML() {
  function NoteListViewDouble() {};
  NoteListViewDouble.prototype = {
    htmlString: function() {
      return "<ul><li><div>Chris is slightly better at Javascript</div></li></ul>"
    }
  };
  var noteController = new NoteController();
  noteController.createNote("This is a note that is longer than 20 characters.");
  var noteListViewDouble = new NoteListViewDouble();
  noteController.noteListView = noteListViewDouble
  var element = document.getElementById("app");
  noteController.insertHTML()
  assert.isTrue(element.innerHTML === "<ul><li><div>Chris is slightly better at Javascript</div></li></ul>");
};

function controllerCanCreateSingleNoteView() {
  noteController.createNote("This is a note");
  noteController.showSingleNote(0);
  var element = document.getElementById("app");
  assert.isTrue(element.innerHTML === "<div>This is a note</div>");

};

function controllerGetsUrl() {
  function LocationDouble() {
    this.hash = "#note/0";
  }
  var locationDouble = new LocationDouble();
  var id = noteController.getIdFromUrl(locationDouble);
  assert.isTrue(id === 0);
}

function clickingLinkShowsFullNote() {
  window.addEventListener("hashchange", function() {
    assert.isTrue(document.getElementById("app").innerHTML === "<div>This is a note that is longer than 20 characters.</div>");
  });
  noteController.createNote("This is a note that is longer than 20 characters.");
  noteController.insertHTML();
  document.getElementsByTagName("a")[1].click();
}

function clearNotes(){
  assert.isTrue(document.getElementById("app").innerHTML === "")
}

clearNotes();
controllerExists();
controllerCanInsertHTML();
controllerCanCreateSingleNoteView();
controllerGetsUrl();
clickingLinkShowsFullNote();
}
