var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    Parse.readAll(data => {
      data.results.forEach(msg => {
        this.renderMessage(msg);
      });
    });
  },

  renderMessage: function(message) {
    // append to DOM
    this.$chats.append(MessageView.render(message));
  }

};