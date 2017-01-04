function testNoteCreation() {
  var note = new Note("test");
  assert.isTrue(note._text === "test");
};
testNoteCreation();

function testReturnNoteText() {
  var note = new Note("test");
  assert.isTrue(note.returnNoteText() === note._text)
};
testReturnNoteText();
