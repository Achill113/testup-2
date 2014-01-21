/*******************************************************************************
 *
 * module TestUp.Toolbar
 *
 ******************************************************************************/

var TestUp = TestUp || {};

TestUp.Toolbar = function() {

  var MOUSE_BUTTON_LEFT = 1;

  // Public
  return {


    init :  function(path) {
      var $toolbar = $('<div id="toolbar"/>');

      $(document).on('mousedown', '#toolbar .button', function() {
        $(this).addClass('pressed');
      });
      $(document).on('mouseup, mouseout', '#toolbar .button', function() {
        $(this).removeClass('pressed');
      });
      $(document).on('mouseover', '#toolbar .button', function(event) {
        if (event.which == MOUSE_BUTTON_LEFT)
        {
          $(this).addClass('pressed');
        }
        else
        {
          $(this).removeClass('pressed');
        }
      });

      var $run = $('<div class="button" id="run" />');
      $run.text('Run');
      $run.prepend( $('<img src="' + path + '/images/run.png" />') );
      $run.on('click', function() {
        Sketchup.callback('TestUp.on_run');
      });
      $toolbar.append($run);

      var $logo = $('<div id="logo" />');
      $logo.append( $('<img src="' + path + '/images/sketchup_logo.png" />') );
      $toolbar.append($logo);

      $('body').append($toolbar);
    }


  };

}(); // TestUp