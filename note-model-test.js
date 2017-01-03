function testReturnText() {
  var note = new Note("My favourite language is javascript");
  assert.isTrue(note.text === "My favourite language is javascript");
};

testReturnText();
