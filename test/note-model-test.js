function testReturnText() {
  var note = new Note("My favourite language is javascript");
  assert.isTrue(note.text === "My favourite language is javascript");
};

function testGetText() {
  var note = new Note("Test");
  assert.isTrue(note.getText() === "Test");
};


testReturnText();
testGetText();
