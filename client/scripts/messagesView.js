var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    Parse.readAll(data => {
      data.results.forEach(msg => {
        this.renderMessage(msg);
      });
    });
    this.$chats.on('click', function(event) {
      var friend;
      if (event.target.className === 'username') {
        friend = event.target.textContent;
      }
      if (event.target.className === 'chat') {
        friend = event.target.firstElementChild.textContent;
      }
      if (!event.target.className) {
        friend = event.target.previousElementSibling.textContent;
      }
      Friends.toggleStatus(friend);
    });
  },

  renderMessage: function(message) {
    // append to DOM
    this.$chats.append(MessageView.render(message));
  }

};