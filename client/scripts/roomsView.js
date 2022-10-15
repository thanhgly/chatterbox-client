// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$select.change(event, RoomsView.handleChange);
    RoomsView.$button.click(event, RoomsView.handleClick);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    RoomsView.$select.empty();
    RoomsView.$select.append("<option value='" + "Choose a New Room" + "'>" + "Choose a New Room" + "</option>");
    RoomsView.$select.append("<option value='" + "Add a New Room" + "'>" + "Add a New Room" + "</option>");
    for (var rm of Rooms._data) {
      RoomsView.renderRoom(rm);
    }
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    RoomsView.$select.append("<option value='" + roomname + "'>" + roomname + "</option>");
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    // Get selected roomname
    // Pass into render function
    if (RoomsView.$select.val() === 'Add a New Room') {
      $('label').show();
    } else {
      $('label').hide();
      MessagesView.render(RoomsView.$select.val());
    }
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    var input = $('#newroom').val();
    Rooms.add(input);
    RoomsView.render();
  }

};
