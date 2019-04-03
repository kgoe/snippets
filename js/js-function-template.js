;

var functionTemplate = function functionTemplate( input ) {
  var thisName = arguments.callee.toString();
  thisName = thisName.substr('function '.length);
  thisName = thisName.substr(0, thisName.indexOf('('));
  try {
    console.log(thisName, ':', 'processing');
  } catch( err ) {
    console.log(thisName, ':', 'CATCHED ERROR', ':', err);
  }
}