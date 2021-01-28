$(document).ready(function() {
  $('.mnotify').hide();
  $('.mnotify-for-mmsg').hide();
  $('.mmenu-call').click(function() {
    $('.mmenu').show(10);
  })
  $(window).mouseleave(function() {
    $('.mmenu').hide(400);
  });
  $('.mnotify').click(function() {
    $(this).hide();
  });
  $('.mnotify-show').click(function() {
    $('.mnotify').show();
  });
  $('.mnotify-for-mmsg').click(function() {
    $(this).hide();
  });
  $('.mnotify-for-mmsg-show').click(function() {
    $('.mnotify-for-mmsg').show();
  });
  $('.mdra-close').click(function() {
    $('.mnav-dra').animate({backgroundColor: 'white' }, 30);
    $('.mnav-dra').animate({right: '100%' }, 300);
  });
  $('.mdra').click(function() {
    $('.mnav-dra').css('right', '0%');
  });
  $('.mripple').click(function() {
    $(this).animate({ backgroundColor: 'red' }, 100)
  });
  $('.ca1').click(function(){
    $('#caroy1').fadeIn(3000);
    $('#caroy2').fadeOut(1);
    $('#caroy3').fadeOut(1);
  });
  $('.ca2').click(function(){
    $('#caroy2').fadeIn(3000);
    $('#caroy1').fadeOut(1);
    $('#caroy3').fadeOut(1);
  });
  $('.ca3').click(function(){
    $('#caroy3').fadeIn(3000);
    $('#caroy2').fadeOut(1);
    $('#caroy1').fadeOut(1);
  });
});


$(document).ready(function() {
  $('.mswitch').click(function() {
    $(this).toggleClass('mswitch-toggle')
    $('.mstate').toggleClass('mstate-toggle');
  });
  $('.mloadactive').animate({ width: '100%' }, 10000);
  $('.mloadactive').animate({width:'20%'}, 10000);
  $('.mm-bar-form').focus(function(){
    $(this).addClass('mm-h');
    $('.mm-bar-bn').addClass('mm-h');
    $('.mmenu-bar').addClass('mmenu-bar-active');
  });
  $('.mm-bar-normal').click(function(){
    $('.mm-bar-bn').removeClass('mm-h');
    $('.mm-bar-form').removeClass('mm-h')
    $('.mmenu-bar').removeClass('mmenu-bar-active');
  });
});

//let drawer = document.getElementsByClassName//('mnav-dra');

//function drawhide(){
//drawer.addEvenListener(scroll, //function(){
//this.style.display='none';
//});
//}

$(document).ready(function() {
  $('#lik1').click(function(){
    $(this).addClass('bord');
    $('#lik2').removeClass('bord');
    $('#lik3').removeClass('bord');
    $('#lik4').removeClass('bord');
    $('#lik5').removeClass('bord');
    $('#lik6').removeClass('bord');
    $('#lik7').removeClass('bord');
    $('#lik8').removeClass('bord');
  });
    $('#lik2').click(function(){
    $(this).addClass('bord');
    $('#lik1').removeClass('bord');
    $('#lik3').removeClass('bord');
    $('#lik4').removeClass('bord');
    $('#lik5').removeClass('bord');
    $('#lik6').removeClass('bord');
    $('#lik7').removeClass('bord');
    $('#lik8').removeClass('bord');
  });
    $('#lik3').click(function(){
    $(this).addClass('bord');
    $('#lik1').removeClass('bord');
    $('#lik2').removeClass('bord');
    $('#lik4').removeClass('bord');
    $('#lik5').removeClass('bord');
    $('#lik6').removeClass('bord');
    $('#lik7').removeClass('bord');
    $('#lik8').removeClass('bord');
  });
    $('#lik4').click(function(){
    $(this).addClass('bord');
    $('#lik1').removeClass('bord');
    $('#lik3').removeClass('bord');
    $('#lik2').removeClass('bord');
    $('#lik5').removeClass('bord');
    $('#lik6').removeClass('bord');
    $('#lik7').removeClass('bord');
    $('#lik8').removeClass('bord');
  });
    $('#lik5').click(function(){
    $(this).addClass('bord');
    $('#lik2').removeClass('bord');
    $('#lik3').removeClass('bord');
    $('#lik4').removeClass('bord');
    $('#lik1').removeClass('bord');
    $('#lik6').removeClass('bord');
    $('#lik7').removeClass('bord');
    $('#lik8').removeClass('bord');
  });
    $('#lik6').click(function(){
    $(this).addClass('bord');
    $('#lik1').removeClass('bord');
    $('#lik3').removeClass('bord');
    $('#lik4').removeClass('bord');
    $('#lik5').removeClass('bord');
    $('#lik2').removeClass('bord');
    $('#lik7').removeClass('bord');
    $('#lik8').removeClass('bord');
  });
    $('#lik7').click(function(){
    $(this).addClass('bord');
    $('#lik1').removeClass('bord');
    $('#lik2').removeClass('bord');
    $('#lik4').removeClass('bord');
    $('#lik5').removeClass('bord');
    $('#lik6').removeClass('bord');
    $('#lik3').removeClass('bord');
    $('#lik8').removeClass('bord');
  });
    $('#lik8').click(function(){
    $(this).addClass('bord');
    $('#lik1').removeClass('bord');
    $('#lik3').removeClass('bord');
    $('#lik2').removeClass('bord');
    $('#lik5').removeClass('bord');
    $('#lik6').removeClass('bord');
    $('#lik7').removeClass('bord');
    $('#lik4').removeClass('bord');
  });
    $('#thebtn').click(function(){
      $('.navtik').toggleClass('seeya');
    });
});

var mastformy = document.getElementById('mfinput');
var masterlab = document.getElementById('mflab');

$(document).ready(function(){
  var texts = $('.mfinput-1');
  $('.mfinput-1').focus(function(){
    $('.mflab-1').css('bottom','39px');
    $('.mflab-1').css('fontSize','14px');
    $('.mflab-1').css('paddingLeft','5px');
    $('.mflab-1').css('paddingRight','5px');
  });
  $('.mfinput-1').focusout(function(){
    if (this.value.length == 0) {
      $('.mflab-1').css('bottom','12px');
      $('.mflab-1').css('fontSize','17px');
      $('.mflab-1').css('paddingLeft','1px');
      $('.mflab-1').css('paddingRight','1px');
    }else{
      alert(texts.value.length);
      $('.mflab-1').css('bottom','39px');
      $('.mflab-1').css('fontSize','14px');
      $('.mflab-1').css('paddingLeft','5px');
      $('.mflab-1').css('paddingRight','5px');
    }
  });
  var textsa = $('.mfinput-2');
  $('.mfinput-2').focus(function(){
    $('.mflab-2').css('bottom','39px');
    $('.mflab-2').css('fontSize','14px');
    $('.mflab-2').css('paddingLeft','5px');
    $('.mflab-2').css('paddingRight','5px');
  });
  $('.mfinput-2').focusout(function(){
    if (this.value.length == 0) {
      $('.mflab-2').css('bottom','12px');
      $('.mflab-2').css('fontSize','17px');
      $('.mflab-2').css('paddingLeft','1px');
      $('.mflab-2').css('paddingRight','1px');
    }else{
      alert(textsa.value.length);
      $('.mflab-2').css('bottom','39px');
      $('.mflab-2').css('fontSize','14px');
      $('.mflab-2').css('paddingLeft','5px');
      $('.mflab-2').css('paddingRight','5px');
    }
  });
  var textsb = $('.mfinput-3');
  $('.mfinput-3').focus(function(){
    $('.mflab-3').css('bottom','39px');
    $('.mflab-3').css('fontSize','14px');
    $('.mflab-3').css('paddingLeft','5px');
    $('.mflab-3').css('paddingRight','5px');
  });
  $('.mfinput-3').focusout(function(){
    if (this.value.length == 0) {
      $('.mflab-3').css('bottom','12px');
      $('.mflab-3').css('fontSize','17px');
      $('.mflab-3').css('paddingLeft','1px');
      $('.mflab-3').css('paddingRight','1px');
    }else{
      alert(textsa.value.length);
      $('.mflab-3').css('bottom','39px');
      $('.mflab-3').css('fontSize','14px');
      $('.mflab-3').css('paddingLeft','5px');
      $('.mflab-3').css('paddingRight','5px');
    }
  });
  var textsb = $('.mfinput-4');
  $('.mfinput-4').focus(function(){
    $('.mflab-4').css('bottom','39px');
    $('.mflab-4').css('fontSize','14px');
    $('.mflab-4').css('paddingLeft','5px');
    $('.mflab-4').css('paddingRight','5px');
  });
  $('.mfinput-4').focusout(function(){
    if (this.value.length == 0) {
      $('.mflab-4').css('bottom','12px');
      $('.mflab-4').css('fontSize','17px');
      $('.mflab-4').css('paddingLeft','1px');
      $('.mflab-4').css('paddingRight','1px');
    }else{
      alert(textsa.value.length);
      $('.mflab-4').css('bottom','39px');
      $('.mflab-4').css('fontSize','14px');
      $('.mflab-4').css('paddingLeft','5px');
      $('.mflab-4').css('paddingRight','5px');
    }
  });
  var textsb = $('.mfinput-5');
  $('.mfinput-5').focus(function(){
    $('.mflab-5').css('bottom','39px');
    $('.mflab-5').css('fontSize','14px');
    $('.mflab-5').css('paddingLeft','5px');
    $('.mflab-5').css('paddingRight','5px');
  });
  $('.mfinput-5').focusout(function(){
    if (this.value.length == 0) {
      $('.mflab-5').css('bottom','12px');
      $('.mflab-5').css('fontSize','17px');
      $('.mflab-5').css('paddingLeft','1px');
      $('.mflab-5').css('paddingRight','1px');
    }else{
      alert(textsa.value.length);
      $('.mflab-5').css('bottom','39px');
      $('.mflab-5').css('fontSize','14px');
      $('.mflab-5').css('paddingLeft','5px');
      $('.mflab-5').css('paddingRight','5px');
    }
  });
  var textsb = $('.mfinput-6');
  $('.mfinput-6').focus(function(){
    $('.mflab-6').css('bottom','39px');
    $('.mflab-6').css('fontSize','14px');
    $('.mflab-6').css('paddingLeft','5px');
    $('.mflab-6').css('paddingRight','5px');
  });
  $('.mfinput-6').focusout(function(){
    if (this.value.length == 0) {
      $('.mflab-6').css('bottom','12px');
      $('.mflab-6').css('fontSize','17px');
      $('.mflab-6').css('paddingLeft','1px');
      $('.mflab-6').css('paddingRight','1px');
    }else{
      alert(textsa.value.length);
      $('.mflab-6').css('bottom','39px');
      $('.mflab-6').css('fontSize','14px');
      $('.mflab-6').css('paddingLeft','5px');
      $('.mflab-6').css('paddingRight','5px');
    }
  });
  var textsb = $('.mfinput-7');
  $('.mfinput-7').focus(function(){
    $('.mflab-7').css('bottom','39px');
    $('.mflab-7').css('fontSize','14px');
    $('.mflab-7').css('paddingLeft','5px');
    $('.mflab-7').css('paddingRight','5px');
  });
  $('.mfinput-7').focusout(function(){
    if (this.value.length == 0) {
      $('.mflab-7').css('bottom','12px');
      $('.mflab-7').css('fontSize','17px');
      $('.mflab-7').css('paddingLeft','1px');
      $('.mflab-7').css('paddingRight','1px');
    }else{
      alert(textsa.value.length);
      $('.mflab-7').css('bottom','39px');
      $('.mflab-7').css('fontSize','14px');
      $('.mflab-7').css('paddingLeft','5px');
      $('.mflab-7').css('paddingRight','5px');
    }
  });
  var textsb = $('.mfinput-8');
  $('.mfinput-8').focus(function(){
    $('.mflab-8').css('bottom','39px');
    $('.mflab-8').css('fontSize','14px');
    $('.mflab-8').css('paddingLeft','5px');
    $('.mflab-8').css('paddingRight','5px');
  });
  $('.mfinput-8').focusout(function(){
    if (this.value.length == 0) {
      $('.mflab-8').css('bottom','12px');
      $('.mflab-8').css('fontSize','17px');
      $('.mflab-8').css('paddingLeft','1px');
      $('.mflab-8').css('paddingRight','1px');
    }else{
      alert(textsa.value.length);
      $('.mflab-8').css('bottom','39px');
      $('.mflab-8').css('fontSize','14px');
      $('.mflab-8').css('paddingLeft','5px');
      $('.mflab-8').css('paddingRight','5px');
    }
  });
  var textsb = $('.mfinput-9');
  $('.mfinput-9').focus(function(){
    $('.mflab-9').css('bottom','39px');
    $('.mflab-9').css('fontSize','14px');
    $('.mflab-9').css('paddingLeft','5px');
    $('.mflab-9').css('paddingRight','5px');
  });
  $('.mfinput-9').focusout(function(){
    if (this.value.length == 0) {
      $('.mflab-9').css('bottom','12px');
      $('.mflab-9').css('fontSize','17px');
      $('.mflab-9').css('paddingLeft','1px');
      $('.mflab-9').css('paddingRight','1px');
    }else{
      alert(textsa.value.length);
      $('.mflab-9').css('bottom','39px');
      $('.mflab-9').css('fontSize','14px');
      $('.mflab-9').css('paddingLeft','5px');
      $('.mflab-9').css('paddingRight','5px');
    }
  });
  var textsb = $('.mfinput-10');
  $('.mfinput-10').focus(function(){
    $('.mflab-10').css('bottom','39px');
    $('.mflab-10').css('fontSize','14px');
    $('.mflab-10').css('paddingLeft','5px');
    $('.mflab-10').css('paddingRight','5px');
  });
  $('.mfinput-10').focusout(function(){
    if (this.value.length == 0) {
      $('.mflab-10').css('bottom','12px');
      $('.mflab-10').css('fontSize','17px');
      $('.mflab-10').css('paddingLeft','1px');
      $('.mflab-10').css('paddingRight','1px');
    }else{
      alert(textsa.value.length);
      $('.mflab-10').css('bottom','39px');
      $('.mflab-10').css('fontSize','14px');
      $('.mflab-10').css('paddingLeft','5px');
      $('.mflab-10').css('paddingRight','5px');
    }
  });
  var textsb = $('.mfinput-11');
  $('.mfinput-11').focus(function(){
    $('.mflab-11').css('bottom','39px');
    $('.mflab-11').css('fontSize','14px');
    $('.mflab-11').css('paddingLeft','5px');
    $('.mflab-11').css('paddingRight','5px');
  });
  $('.mfinput-11').focusout(function(){
    if (this.value.length == 0) {
      $('.mflab-11').css('bottom','12px');
      $('.mflab-11').css('fontSize','17px');
      $('.mflab-11').css('paddingLeft','1px');
      $('.mflab-11').css('paddingRight','1px');
    }else{
      alert(textsa.value.length);
      $('.mflab-11').css('bottom','39px');
      $('.mflab-11').css('fontSize','14px');
      $('.mflab-11').css('paddingLeft','5px');
      $('.mflab-11').css('paddingRight','5px');
    }
  });
  var textsb = $('.mfinput-12');
  $('.mfinput-12').focus(function(){
    $('.mflab-12').css('bottom','39px');
    $('.mflab-12').css('fontSize','14px');
    $('.mflab-12').css('paddingLeft','5px');
    $('.mflab-12').css('paddingRight','5px');
  });
  $('.mfinput-12').focusout(function(){
    if (this.value.length == 0) {
      $('.mflab-12').css('bottom','12px');
      $('.mflab-12').css('fontSize','17px');
      $('.mflab-12').css('paddingLeft','1px');
      $('.mflab-12').css('paddingRight','1px');
    }else{
      alert(textsa.value.length);
      $('.mflab-12').css('bottom','39px');
      $('.mflab-12').css('fontSize','14px');
      $('.mflab-12').css('paddingLeft','5px');
      $('.mflab-12').css('paddingRight','5px');
    }
  });
  var textsb = $('.mfinput-13');
  $('.mfinput-13').focus(function(){
    $('.mflab-13').css('bottom','39px');
    $('.mflab-13').css('fontSize','14px');
    $('.mflab-13').css('paddingLeft','5px');
    $('.mflab-13').css('paddingRight','5px');
  });
  $('.mfinput-13').focusout(function(){
    if (this.value.length == 0) {
      $('.mflab-13').css('bottom','12px');
      $('.mflab-13').css('fontSize','17px');
      $('.mflab-13').css('paddingLeft','1px');
      $('.mflab-13').css('paddingRight','1px');
    }else{
      alert(textsa.value.length);
      $('.mflab-13').css('bottom','39px');
      $('.mflab-13').css('fontSize','14px');
      $('.mflab-13').css('paddingLeft','5px');
      $('.mflab-13').css('paddingRight','5px');
    }
  });
});

