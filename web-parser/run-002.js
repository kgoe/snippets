var theOutput = (function iifeEnvDetect() {
  var output = false;
  if ( typeof global !== 'undefined'
       && typeof module !== 'undefined'
       && typeof require !== 'undefined' ) {
    if ( require.main === module ) {
      output = 'node';
    } else {
      output = 'node-module';
    }
  }

  if ( typeof window !== 'undefined' && typeof document !== 'undefined' ) {
    output = 'browser';
    if ( typeof require === 'undefined' ) {
      /*
      require = function( value ) {
        console.log("%c TO REQUIRE : " + value,"color: ##FF0000;");
      }
      */
      require = function( value ) {
        console.log('TO REQUIRE : ' + value);
      };
    }
  }
  return output;
})();

console.log(theOutput, __filename);

// var log = console.log;
// var fs = require('fs');
// var uu = require('./run-require.js');

// log(uu.refP( console ));
// log(fs.readdirSync('/'));
// log(fs.readdirSync('/etc'));
// log(fs.readdirSync('/sdcard'));
// //log(fs.readdirSync('/sdcard-ext'));

/*
// android file system
// http://www.stevesandroidguide.com/android-files/

/root
/etc
/sdcard
/sdcard-ext
/ext-sdcard
/storage
/storage/40F3-509C
/storage/self
/storage/emulated/0
*/
