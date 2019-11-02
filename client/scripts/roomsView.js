var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  currentRoom: function(roomName) {
    return roomName || this.$select['0'].value;
  },


  initialize: function() {
    Parse.readAll(data => {
      data.results.forEach(msg => {
        this.renderRoom(msg.roomname);
      });
    });
    this.$button.on('click', Rooms.add);
    this.$select.on('change', function(event) {
      this.currentRoom(event.target.value);
    });
  },

  renderRoom: function(roomName) {
    var newOption = `<option value='${roomName}'>${roomName}</option>`;
    this.$select.append(newOption);
  }

};
