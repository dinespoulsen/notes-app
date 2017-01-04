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
  assert.isTrue(noteListView.listNotes() === "<ul><li><a href=\"#notes/6\"><div>test...</div></a></li></ul>");
};
testListNotes();

function testMultipleNotes(){
  var noteList = new NoteList();
  noteList.createNote("test");
  noteList.createNote("secondTest");
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.listNotes() === "<ul><li><a href=\"#notes/7\"><div>test...</div></a></li><li><a href=\"#notes/8\"><div>secondTest...</div></a></li></ul>")
};
testMultipleNotes();

function testEmptyNoteList(){
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.listNotes() === "<ul></ul>");
};
testEmptyNoteList();
