var Messages = {

  //create method
  create: function (text) {
    return {
      username: App.username,
      text: text,
      roomname: RoomsView.currentRoom()
    };
  }
  // takes text as param
  //  grab room = RoomsView.currentRoom;
  //  username = App.username;
  // return messageInstance

};