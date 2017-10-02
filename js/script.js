$(document).ready(function() {
  $(document).on('click', '.card', function() {
    $(this).next('.modal').bPopup({
      modalClose: true,
      appending: false, // Keep modal element DOM position instead of appending to body (default)
      speed: 500,
      amsl: 0, // center modal on page
      closeClass: 'close'
    });
  });
  
  // Prevent parent element from scrolling when scroll reachs top or bottom of modal
  $('.modal').scrollLock();
});