function testCreateNote() {
  var noteList = new NoteList();
  noteList.createNote("test");
  assert.isTrue(noteList.notes.length === 1);
};

function testGetNotes(){
  var noteList = new NoteList();
  noteList.createNote("test");
  assert.isTrue(noteList.getNotes() === noteList.notes);
};

testCreateNote();
testGetNotes();
