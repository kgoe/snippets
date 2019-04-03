;

var getPagespeedInsightURL = function getPagespeedInsightURL( theUrl ) {
  var thisName = arguments.callee.toString();
  thisName = thisName.substr('function '.length);
  thisName = thisName.substr(0, thisName.indexOf('('));
  if ( theUrl.indexOf('http') >= 0 && theUrl.indexOf('://') >= 0 ) {
    var output = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${theUrl}`;
    return output;
  } else {
    console.log(thisName, ':', 'invalid url string');
  }
}