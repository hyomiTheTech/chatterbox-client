var Parse = {

  server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,
  // add successCB method

  create: function(message, successCB, errorCB = null) {
    // todo: save a message to the server
    // create ajax request
    // pass in the message
    // pass in the successCB to the success property this.successCB
    // [pass in the errorCB to the error property]
    //
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};