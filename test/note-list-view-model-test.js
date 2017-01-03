function testNoteView() {
  var noteList = new NoteList();
  noteList.createNote("test");
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.printHTMLList() === "<ul><li><div>test</div></li></ul>")
}

testNoteView();
