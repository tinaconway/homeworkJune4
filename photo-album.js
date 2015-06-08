$(document).ready(function() {
  page.init();
});

// 1.load the _.template with the template string //
var compiledTmpl = _.template($('#albumTemplate').html());
var tmplString = "";

var compiledImg = _.template($('#pictureTemplate').html());

var page = {
  init: function (arguments) {
    page.initEvents();
  },

  initEvents: function (arguments) {
    // displaying and hiding different pages by clicking the navigation //
    $('.caption').on('click', 'a', function (event) {
      event.preventDefault();
      var clickedPage = $(this).attr('rel');
      $(clickedPage).siblings().removeClass('active');
      $(clickedPage).addClass('active');
    });
    // loading ALBUM TEMPLATE //
    $('.caption').on('click', 'a', function() {
      event.preventDefault();
      $('.content').html(tmplString);
      // iterating over album data //
      var arrayofAlbum;
      var albumName = $(this).attr('id');
      data.forEach(function(el) {
        if(albumName === el.name) {
          arrayofAlbum = el.value;
        }
      });
      arrayofAlbum.forEach(function(el) {
        tmplString += compiledTmpl(el);
      });
      // appending template to page //
      $('.content').append(tmplString);
      tmplString = "";

      // loading PICTURE VIEWER TEMPLATE //
    $('.picView').on('click', 'img', function() {
      event.preventDefault();
      $('.content').html(tmplString);
      var url = {url: $(this).attr('src')}
      tmplString = compiledImg(url);
      $('.content').append(tmplString);
      tmplString = "";
      // displaying and hiding different pages by clicking the navigation
      var clickedPage = $(this).parent().attr('rel');
      $(clickedPage).siblings().removeClass('active');
      $(clickedPage).addClass('active');
    });


  });


  }
};
