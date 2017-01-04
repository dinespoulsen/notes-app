function testNoteText(){
  var myNote = new Note("Favourite drink: seltzer");
  var mySingleNoteView = new SingleNoteView(myNote);
  assert.isTrue(mySingleNoteView.viewSingleNote() === "<div>Favourite drink: seltzer</div>")
};
testNoteText();
