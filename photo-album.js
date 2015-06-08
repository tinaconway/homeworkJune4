$(document).ready(function() {



// 1.load the _.template with the template string
var compiledTmpl = _.template($('#albumTemplate').html());
var tmplString = "";

var compiledImg = _.template($('#pictureTemplate').html());




// LOAD FAMILY
$('.caption').on('click', '#family', function() {
  event.preventDefault();
  $('.content').html(tmplString);
  family.forEach(function(el) {
    // 2. add the data to the compiled template
    tmplString += compiledTmpl(el);
  });

  $('.content').append(tmplString);
  tmplString = "";

$('.picView').on('click', 'img', function() {
  event.preventDefault();
  $('.content').html(tmplString);
  var url = {url: $(this).attr('src')}
  tmplString = compiledImg(url);
  console.log(tmplString);
  $('.content').append(tmplString);
  tmplString = "";
  var clickedPage = $(this).parent().attr('rel');
  $(clickedPage).siblings().removeClass('active');
  $(clickedPage).addClass('active');

});


});



//LOAD FRIENDS
$('.caption').on('click', '#friends', function() {
  event.preventDefault();
  $('.content').html(tmplString);
friends.forEach(function(el) {
  // 2. add the data to the compiled template
  tmplString += compiledTmpl(el);
});

$('.content').append(tmplString);
tmplString = "";

$('.picView').on('click', 'img', function() {
  event.preventDefault();
  $('.content').html(tmplString);
  var url = {url: $(this).attr('src')}
  tmplString = compiledImg(url);
  console.log(tmplString);
  $('.content').append(tmplString);
  tmplString = "";
  var clickedPage = $(this).parent().attr('rel');
  $(clickedPage).siblings().removeClass('active');
  $(clickedPage).addClass('active');

});
});


//LOAD FIREFLY
$('.caption').on('click', '#firefly', function() {
  event.preventDefault();
  $('.content').html(tmplString);
firefly.forEach(function(el) {
  // 2. add the data to the compiled template
  tmplString += compiledTmpl(el);
});

$('.content').append(tmplString);
tmplString = "";

$('.picView').on('click', 'img', function() {
  event.preventDefault();
  $('.content').html(tmplString);
  var url = {url: $(this).attr('src')}
  tmplString = compiledImg(url);
  console.log(tmplString);
  $('.content').append(tmplString);
  tmplString = "";
  var clickedPage = $(this).parent().attr('rel');
  $(clickedPage).siblings().removeClass('active');
  $(clickedPage).addClass('active');

});
});


//LOAD CHARLESTON
$('.caption').on('click', '#charleston', function() {
  event.preventDefault();
  $('.content').html(tmplString);
charleston.forEach(function(el) {
  // 2. add the data to the compiled template
  tmplString += compiledTmpl(el);
});

$('.content').append(tmplString);
tmplString = "";

$('.picView').on('click', 'img', function() {
  event.preventDefault();
  $('.content').html(tmplString);
  var url = {url: $(this).attr('src')}
  tmplString = compiledImg(url);
  console.log(tmplString);
  $('.content').append(tmplString);
  tmplString = "";
  var clickedPage = $(this).parent().attr('rel');
  $(clickedPage).siblings().removeClass('active');
  $(clickedPage).addClass('active');

});
});


//LOAD HAWAII
$('.caption').on('click', '#hawaii', function() {
  event.preventDefault();
  $('.content').html(tmplString);
hawaii.forEach(function(el) {
  // 2. add the data to the compiled template
  tmplString += compiledTmpl(el);
});

$('.content').append(tmplString);
tmplString = "";

$('.picView').on('click', 'img', function() {
  event.preventDefault();
  $('.content').html(tmplString);
  var url = {url: $(this).attr('src')}
  tmplString = compiledImg(url);
  console.log(tmplString);
  $('.content').append(tmplString);
  tmplString = "";
  var clickedPage = $(this).parent().attr('rel');
  $(clickedPage).siblings().removeClass('active');
  $(clickedPage).addClass('active');

});
});



//LOAD BALTIMORE
$('.caption').on('click', '#baltimore', function() {
  event.preventDefault();
  $('.content').html(tmplString);
baltimore.forEach(function(el) {
  // 2. add the data to the compiled template
  tmplString += compiledTmpl(el);
});
$('.content').append(tmplString);
tmplString = "";

$('.picView').on('click', 'img', function() {
  event.preventDefault();
  $('.content').html(tmplString);
  var url = {url: $(this).attr('src')}
  tmplString = compiledImg(url);
  console.log(tmplString);
  $('.content').append(tmplString);
  tmplString = "";
  var clickedPage = $(this).parent().attr('rel');
  $(clickedPage).siblings().removeClass('active');
  $(clickedPage).addClass('active');


});




});




// displaying and hiding different pages by clicking the navigation



  $('.caption').on('click', 'a', function (event) {
    event.preventDefault();
    var clickedPage = $(this).attr('rel');
    $(clickedPage).siblings().removeClass('active');
    $(clickedPage).addClass('active');



  });












});
