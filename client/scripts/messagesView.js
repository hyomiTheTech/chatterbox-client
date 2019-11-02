var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(message) {
    // build underscore function to create templates
    var compiled = _.template(`
      <div class='message'>
        <div><%- username %></div>
        <div><%- text %></div>
      </div>
    `);
    // use the underscore function to create templates with the message
    // append the templates to the html file
    this.$chats.append(compiled(message));
  }

};