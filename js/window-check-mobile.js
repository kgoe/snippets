;

function checkIfMobile() {
  var output = false;
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    output = true;
  }
  return output;
}
