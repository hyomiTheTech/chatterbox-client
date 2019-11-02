var Rooms = {

  add: function() {
    var message = 'Enter Room Name';
    var roomName = window.prompt(message);
    RoomsView.renderRoom(roomName);
  }
};