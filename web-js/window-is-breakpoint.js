// https://onextrapixel.com/10-useful-and-time-saving-javascript-snippets/
// 3. Setting breakpoints for responsive design

function isBreakPoint(bp) {
  // The breakpoints that you set in your css
  var bps = [320, 480, 768, 1024];
  var w = $(window).width();
  var min, max;
  for (var i = 0, l = bps.length; i < l; i++) {
    if (bps[i] === bp) {
      min = bps[i-1] || 0;
      max = bps[i];
      break;
    }
  }
  return w > min && w <= max;
}