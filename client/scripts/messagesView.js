var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(message) {
    // append to DOM
    this.$chats.append(MessageView.render(message));
  }

};