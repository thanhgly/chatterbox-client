// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.

  },

  render: function(roomname) {
    // TODO: Render _all_ the messages.
    MessagesView.$chats.empty();

    for (var messageId in Messages._data) {
      if (roomname === undefined || Messages._data[messageId].roomname === roomname) {
        MessagesView.renderMessage(Messages._data[messageId]);
      }
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    var msg = MessageView.render({username: message.username, text: message.text, roomname: message.roomname});
    MessagesView.$chats.append(msg);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    // var $chat = $('.chat');

    // $chat.click(event, function() {
    //   Friends.add()};
    //   );
  }

};