$.page("index", function () {
  /*
  $(window).on("scroll", function () {
    $(".pie").each(function () {
      // Get the offset of the pie element
      var offset = $(this).offset().top;
      // Calculate the scroll position relative to the top of the viewport
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();
      var distanceFromTop = offset - scrollTop;

      // Calculate shadow length based on distance from the top
      var maxShadowLength = 20; // Max shadow length at the top
      var shadowLength = Math.max(
        0,
        maxShadowLength - (distanceFromTop / windowHeight) * maxShadowLength,
      );

      // Update the drop-shadow filter for each pie
      $(this).css(
        "filter",
        "drop-shadow(7px " + shadowLength + "px 0px rgba(0, 0, 0, 0.2))",
      );
    });
  });
  */

  $(window).on("scroll", function () {
    $(".pie").each(function () {
      // Get the offset of the pie element
      var offset = $(this).offset().top;
      // Calculate the scroll position relative to the center of the viewport
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();
      var shadowOffset = (scrollTop + windowHeight / 2 - offset) / -25;
      // Update the drop-shadow filter for each pie
      $(this).css(
        "filter",
        "drop-shadow(" +
          shadowOffset +
          "px " +
          shadowOffset +
          "px 0px rgba(0, 0, 0, 0.1))",
      );
    });
  });
});
