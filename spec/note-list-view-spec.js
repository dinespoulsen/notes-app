function testInstantiatesWithNoteList(){
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView._noteList === noteList);
};
testInstantiatesWithNoteList();

function testListNotes(){
  var noteList = new NoteList();
  noteList.createNote("test");
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.listNotes() === "<ul><li><div>test</div></li></ul>");
};
testListNotes();

function testMultipleNotes(){
  var noteList = new NoteList();
  noteList.createNote("test");
  noteList.createNote("secondTest");
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.listNotes() === "<ul><li><div>test</div></li><li><div>secondTest</div></li></ul>")
};
testMultipleNotes();

function testEmptyNoteList(){
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.listNotes() === "<ul></ul>");
};
testEmptyNoteList();
