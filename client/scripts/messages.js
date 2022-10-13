// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: {},

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  add: function(messageId, message) {
    message.text = Messages.escape(message.text);
    Messages._data[messageId] = message;
  },

  retrieve: function(messageId) {
    return Messages._data.messageId;
  },

  escape: function(text) {
    if (text === null) {
      return null;
    }
    var map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };

    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
  }
};