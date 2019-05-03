$(document).ready(function(){
  $('div.page_body div.widget.HTML h3').hide();
  $('div.page_body div.widget.HTML').width($(window).width());
  $('div.page_body div.widget.HTML').css( 'margin-left' , (-parseFloat($('.page_body .centered').css('margin-left')) - parseFloat($('#main').css('padding-left'))));
  $(window).resize(function() {
    $('div.page_body div.widget.HTML').width($(window).width());
    $('div.page_body div.widget.HTML').css( 'margin-left' , (-parseFloat($('.page_body .centered').css('margin-left')) - parseFloat($('#main').css('padding-left'))));
  });
});

