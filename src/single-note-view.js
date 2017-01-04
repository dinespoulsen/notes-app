(function(exports){

  function SingleNoteView(note){
    this.note = note;
  };

  SingleNoteView.prototype.viewSingleNote = function(){
    return "<div>" + this.note.returnNoteText() + "</div>";
  };

  exports.SingleNoteView = SingleNoteView;

})(this);
