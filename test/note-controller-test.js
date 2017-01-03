function testCreateController(){
  var myNoteController = new NoteController();
  assert.isTrue(myNoteController instanceof NoteController );
};

function testUpdateElement(){
  function NoteListViewDouble() {
    this.printHTMLCallCount = 0;
  };
    NoteListViewDouble.prototype = {
      printHTMLList: function(){
      this.printHTMLCallCount++;
    }
  };
  noteListViewDouble = new NoteListViewDouble();
  updateNoteList(noteListViewDouble);
  assert.isTrue(noteListViewDouble.printHTMLCallCount === 1);
};

testCreateController();

testUpdateElement();
