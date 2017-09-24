$(document).ready(function() {

  $('#card-1').on('click', function() {
    $('#modal-1').bPopup({
      modalClose: true,
      speed: 500,
      amsl: 0, // center modal on page
      closeClass: 'close'
    });
  });

  $('#card-2').on('click', function() {
    $('#modal-2').bPopup({
      modalClose: true,
      speed: 500,
      amsl: 0, // center modal on page
      closeClass: 'close'
    });
  });

  $('#card-3').on('click', function() {
    $('#modal-3').bPopup({
      modalClose: true,
      speed: 500,
      amsl: 0, // center modal on page
      closeClass: 'close'
    });
  });

  $('#card-4').on('click', function() {
    $('#modal-4').bPopup({
      modalClose: true,
      speed: 500,
      amsl: 0, // center modal on page
      closeClass: 'close'
    });
  });

  $('#card-5').on('click', function() {
    $('#modal-5').bPopup({
      modalClose: true,
      speed: 500,
      amsl: 0, // center modal on page
      closeClass: 'close'
    });
  });

  $('#card-6').on('click', function() {
    $('#modal-6').bPopup({
      modalClose: true,
      speed: 500,
      amsl: 0, // center modal on page
      closeClass: 'close'
    });
  });

  // Prevent parent element from scrolling when scroll reachs top or bottom of modal
  $('.modal').scrollLock();

});
