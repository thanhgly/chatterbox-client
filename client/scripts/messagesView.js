// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.s
  },

  render: function(roomname) {
    // TODO: Render _all_ the messages.
    MessagesView.$chats.empty();

    for (var message of Messages._data) {
      if (roomname === undefined || message.roomname === roomname) {
        MessagesView.renderMessage(message);
      }
    }
    $('.username').click(event, MessagesView.handleClick);
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    var isFriend;
    if (Friends.toggleStatus(message.username)) {
      isFriend = 'true';
    } else {
      isFriend = 'false';
    }
    var msg = MessageView.render({username: message.username, text: message.text, roomname: message.roomname, isFriend: isFriend});

    MessagesView.$chats.append(msg);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    // var $chat = $('.chat');
    //console.log(event.target.attr());
    var username = $(event.target).text();
    Friends.add(username);
    App.startSpinner();
    App.fetch(App.stopSpinner);
  }



};