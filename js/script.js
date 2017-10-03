$(document).ready(function() {
  $(document).on('click', '.card', function() {
    $(this).next('.modal').bPopup({
      modalClose: true,
      appending: false, // Keep modal DOM position instead of appending to body (default)
      speed: 500,
      amsl: 0, // center modal on page
      closeClass: 'close',
      onOpen: function() {
        // Prevent body scroll
        $('body').css('overflow', 'hidden');
      },
      onClose: function() {
        // Restore body scroll
        $('body').css('overflow', 'auto');
      }
    });
  });
});