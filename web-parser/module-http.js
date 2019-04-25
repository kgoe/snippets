;
const http = require('http');
const https = require('https');
const querystring = require('querystring');
// const fs = require('fs');

/**
 * httpBasicPromise
 * @param {object} theConfig
 * @return {Promise}
 */
var httpBasicPromiseGet = function httpBasicPromiseGet(theConfig) {
  var {theHost, thePath} = theConfig;

  /**
   * formatRequest
   * @param {*} theHost
   * @param {*} thePath
   * @return {object}
   */
  var formatRequest = function formatRequest(theHost, thePath) {
    var userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36';

    return {
      host: theHost,
      path: thePath,
      method: 'GET',
      headers: {
        'User-Agent': userAgent,
      },
    };
  };

  /**
   * httpBasicGetResponse
   * @param {*} theRequest
   * @param {*} theCallback
   * @return {*} requestHandler
   */
  var httpBasicGetResponse = function httpBasicGetResponse(theRequest, theCallback) {
    var requestCallback = function requestCallback(response) {
      var body = '';
      response.setEncoding('utf8');
      response.on('data', function dataCallback(d) {
        body += d;
      });
      response.on('end', function endCallback() {
        // console.log(body);
        typeof theCallback === 'function' ? theCallback(body) : console.log(body);
      });
    };

    var nodeRequest = http;
    if ( ! theConfig.isHTTPS ) {
      nodeRequest = http;
    } else {
      nodeRequest = https;
    }
    var requestHandler = nodeRequest.get(theRequest, requestCallback);

    return requestHandler;
  };

  var theRequest = formatRequest(theHost, thePath);
  var thePromise = new Promise( function thePromiseCallback( resolve ) {
    // console.log(theRequest);
    httpBasicGetResponse(theRequest, resolve);
  });

  return thePromise;
};

/**
 * httpBasicPromise
 * @param {object} theConfig
 * @return {Promise}
 */
var httpBasicPromisePost = function httpBasicPromisePost(theConfig) {
  var {theHost, thePath} = theConfig;

  var postData = querystring.stringify(theConfig.postData);

  /**
   * formatRequest
   * @param {*} theHost
   * @param {*} thePath
   * @return {object}
   */
  var formatRequest = function formatRequest(theHost, thePath) {
    var userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36';

    return {
      host: theHost,
      path: thePath,
      method: 'POST',
      headers: {
        'User-Agent': userAgent,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      },
    };
  };

  /**
   * httpBasicPostResponse
   * @param {*} theRequest
   * @param {*} theCallback
   * @return {*} requestHandler
   */
  var httpBasicPostResponse = function httpBasicPostResponse(theRequest, theCallback) {
    var requestCallback = function requestCallback(response) {
      var body = '';
      response.setEncoding('utf8');
      response.on('data', function dataCallback(d) {
        body += d;
      });
      response.on('end', function endCallback() {
        // console.log(body);
        typeof theCallback === 'function' ? theCallback(body) : console.log(body);
      });
    };

    var nodeRequest = http;
    if ( ! theConfig.isHTTPS ) {
      nodeRequest = http;
    } else {
      nodeRequest = https;
    }
    var requestHandler = nodeRequest.request(theRequest, requestCallback);

    // post the data
    requestHandler.write(postData);
    requestHandler.end();

    return requestHandler;
  };

  var theRequest = formatRequest(theHost, thePath);
  var thePromise = new Promise( function thePromiseCallback( resolve ) {
    // console.log(theRequest);
    httpBasicPostResponse(theRequest, resolve);
  });

  return thePromise;
};

/**
 * validateOutput
 * @param {*} input
 * @return {object} output
 */
function validateOutput( input ) {
  var isHTML = /<(br|basefont|hr|input|source|frame|param|area|meta|!--|col|link|option|base|img|wbr|!DOCTYPE).*?>|<(a|abbr|acronym|address|applet|article|aside|audio|b|bdi|bdo|big|blockquote|body|button|canvas|caption|center|cite|code|colgroup|command|datalist|dd|del|details|dfn|dialog|dir|div|dl|dt|em|embed|fieldset|figcaption|figure|font|footer|form|frameset|head|header|hgroup|h1|h2|h3|h4|h5|h6|html|i|iframe|ins|kbd|keygen|label|legend|li|map|mark|menu|meter|nav|noframes|noscript|object|ol|optgroup|output|p|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|small|span|strike|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|track|tt|u|ul|var|video).*?<\/\2>/i.test(input);

  var bodyOutput = false;
  try {
    var isJSON = typeof JSON.parse(input) == 'object' ? true : false;
  } catch ( err ) {
    var isJSON = false;
    console.log('json error', err);
  }

  var output = {
    isHTML: isHTML,
    isJSON: isJSON,
    isStr: typeof input == 'string',
    isNum: typeof input == 'number',
    body: bodyOutput,
  };

  console.log(output);
  return 0;
}

if ( typeof global !== 'undefined' && typeof module !== 'undefined' ) {
  module.exports = {
    httpBasicPromiseGet: httpBasicPromiseGet,
    httpBasicPromisePost: httpBasicPromisePost,
    validateOutput: validateOutput,
  };
}
