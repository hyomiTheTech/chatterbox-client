var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    // get text
    var text = FormView.$form.find('input[type=text]').val();
    // create message
    //   Message => message
    var message = Messages.create(text);
    // post message
    Parse.create(message, function (response) {
      console.log('Success: ', response);
    });

    console.log(message);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};