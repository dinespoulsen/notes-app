function testCanBeInstantiated(){
  var myNoteList = new NoteList();
  var myNoteController = new NoteController();
  assert.isTrue(myNoteController instanceof NoteController);
};

testCanBeInstantiated();

function testWillUpdateHTML(){
  function NoteListViewDouble(){
    this.listNotesCallCount = 0;
  };

  NoteListViewDouble.prototype = {
    listNotes: function(){
      this.listNotesCallCount += 1;
      return "test";
    }
  };
  var myNoteController = new NoteController();
  var myDouble = new NoteListViewDouble();
  myNoteController.updateHTML(myDouble);

  assert.isTrue(myDouble.listNotesCallCount === 1);
};

testWillUpdateHTML();

function testHasHashchange(){
  function NoteListViewDouble(){
    this.listNotesCallCount = 0;
  };

  NoteListViewDouble.prototype = {
    listNotes: function(){
      this.listNotesCallCount += 1;
      return "test";
    }
  };
  var myNoteController = new NoteController();
  var myDouble = new NoteListViewDouble();
  
};
