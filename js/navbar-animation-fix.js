$('#barra-nav').on('show.bs.collapse',function(){
  $('.primary-banner').css('transform','translate(-50%,10%)');
});
$('#barra-nav').on('hide.bs.collapse',function(){
  $('.primary-banner').css('transform','translate(-50%,-40%)');
});
