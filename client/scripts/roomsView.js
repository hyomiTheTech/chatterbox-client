var RoomsView = {

  $button: $('#rooms button').on('click', Rooms.add),
  $select: $('#rooms select'),

  initialize: function() {
    Parse.readAll(data => {
      data.results.forEach(msg => {
        this.renderRoom(msg.roomname);
      });
    });
  },

  renderRoom: function(roomName) {
    var newOption = `<option value='${roomName}'>${roomName}</option>`;
    this.$select.append(newOption);
  }

};
