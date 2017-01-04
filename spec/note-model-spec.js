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

function testReturnFirst20Char(){
  var note = new Note("This is a note with more than twenty characters so it has too be very long");
  assert.isTrue(note.returnFirstTwenty() === "This is a note with ...")
};

testReturnFirst20Char();
