var pictureArr = ['http://www.astonhotels.com/assets/slides/690x380-Hawaii-Turtle.jpg','http://www.colbybrownphotography.com/assets/Hawaii_4461.jpg', 'http://www.hawaiiactive.com/img/pictures/kauai-kalalau-valley-lookout.jpg'];
var i = 0;

$('.slider').append('<img src='+pictureArr[i]+'>')

$('.fa-arrow-circle-o-right').on('click', function() {
  $('.slider').empty()
  $('.slider').append('<img src='+pictureArr[i]+'>')
  i++
  if (i > pictureArr.length - 1) {
    i = 0;

  }
})

$('.fa-arrow-circle-o-left').on('click', function() {
  if (i === 0) {
    i = 2;
    $('.slider').empty()
    $('.slider').append('<img src='+pictureArr[i]+'>')
  } else {
    i--
    $('.slider').empty()
    $('.slider').append('<img src='+pictureArr[i]+'>')
  }
})

// $('fa-arrow-circle-o-left')
