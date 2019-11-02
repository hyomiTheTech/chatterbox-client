var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    Parse.readAll(data => {
      data.results.forEach(msg => {
        this.renderRoom(msg.roomname);
      });
    });
    this.$button.on('click', Rooms.add);
  },

  renderRoom: function(roomName) {
    var newOption = `<option value='${roomName}'>${roomName}</option>`;
    this.$select.append(newOption);
  }

};
