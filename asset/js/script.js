$(document).ready(function () {
  "use strict";

  var vidEl = $('#intro-video');

  vidEl.on('loadedmetadata', videoScale);

  $(window).on('resize', videoScale);

  function videoScale() {
    var wHeight = $(window).height(),
        wWidth = $(window).width();

    var vHeight = vidEl[0].videoHeight,
        vWidth = vidEl[0].videoWidth;

    var sfHeight = wHeight / vHeight,
        sfWidth = wWidth / vWidth,
        vScale = sfHeight;

    if (sfWidth > sfHeight) {
      vScale = sfWidth;
    }

    var vsHeight = vHeight * vScale,
        vsWidth = vWidth * vScale;

    vidEl.height(vsHeight);
    vidEl.width(vsWidth);
  }
});
