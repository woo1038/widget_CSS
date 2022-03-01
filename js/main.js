$(function () {

  /* Card_2 */
  $('.card2_size span, .card2_color span').click(function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  })
  $('.card2_like').click(function() {
    $(this).toggleClass('active');
  })

  /* Tab_1 */
  $('.tab1_btn li').click(function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');

    let tab = $(this).attr('data-alt');
    $('.tab1_tabs div').removeClass('active');
    $('#' + tab).addClass('active');
  })

  /* Tab_2 */
  $('.tab2_title').click(function () {
    $(this).addClass('active');
    $(this).siblings('.tab2_title').removeClass('active');

    $(this).siblings('.tab2_desc').stop().slideUp();
    $(this).next().stop().slideDown();

    let img = $(this).attr('data-img');
    $('.tab2_image img').attr('src', img);
  })

})

