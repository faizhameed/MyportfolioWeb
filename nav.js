$(document).ready(function() {
  var scrollLink = $(".scroll");

  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    if (this.hash !== "#Contact") {
      $("body,html").animate(
        {
          scrollTop: $(this.hash).offset().top - 100
        },
        1000
      );
    } else {
      $("body,html").animate(
        {
          scrollTop: $(this.hash).offset().top - 70
        },
        1000
      );
    }
  });

  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function() {
      if (this.hash !== "#Contact")
        var sectionOffset = $(this.hash).offset().top - 140;
      else var sectionOffset = $(this.hash).offset().top - 120;
      if (sectionOffset <= scrollbarLocation) {
        $(this)
          .parent()
          .addClass("active");
        $(this)
          .parent()
          .siblings()
          .removeClass("active");
      }
    });
  });
});
