;doc={};

/**
 * Shared Functions
 */

/**
 * jqCbComplete
 * @param {*} jqXHR 
 * @param {*} textStatus 
 */
var jqCbComplete = function jqCbComplete(jqXHR, textStatus){
  console.log(jqXHR,textStatus);
};

/**
 * jqCbSuccess
 * @param {*} res 
 * @param {*} textStatus 
 * @param {*} jqXHR 
 */
var jqCbSuccess = function jqCbSuccess(res, textStatus, jqXHR) {
  console.log(res,textStatus,jqXHR);
};

/**
 * jsCbError
 * @param {*} jqXHR 
 * @param {*} textStatus 
 * @param {*} errorThrown 
 */
var jsCbError = function jsCbError(jqXHR, textStatus, errorThrown){
  console.log(jqXHR,textStatus,errorThrown);
};

/**
 * Settings Parameters Properties
 */

var jqAjaxParams = {
  accepts: {},
  async: true,
  beforeSend: function(jqXHR, settings){},
  cache: true,
  complete: jqCbSuccess,
  contents:{},
  contentType:'application/x-www-form-urlencoded; charset=UTF-8',
  context:{},
  converters:{"* text": window.String, "text html": true, "text json": jQuery.parseJSON, "text xml": jQuery.parseXML},
  crossDomain: false,
  data:{},
  dataFilter: function(data,type){},
  dataType:"text", // "xml json jsonp script html text",
  error: jsCbError,
  global: true,
  headers:{},
  ifModified: false,
  isLocal: true,
  jsonp: '',
  jsonpCallback: function(response){},
  method: 'GET', // GET POST PUT OPTIONS DELETE,
  type: 'GET',
  mimeType: '',
  username: '',
  password: '',
  processData: true,
  scriptCharset: '',
  statusCode: { 404: function(){}}, // status code index + callbacks array
  success: jqCbResponse,
  timeout: 1000,
  traditional: true,
  url: 'http://api-server.com',
  xhr: function(){}, // ActiveXObject when available, XMLHttpRequest otherwise
  xhrFields: {
    withCredentials: true,
  },
};

var jqAjaxParamsSimple = {
    type: "POST", // "GET" "POST"
    method: "POST", // "GET" "POST"
    url: "https://www.google.com",
    data: {},
    success: jqCbSuccess,
    contentType: "application/x-www-form-urlencoded;charset=UTF-8",
    error: jsCbError,
    dataType: "json",
    // crossOrigin: true,
}

/**
 * $.ajax call with parameters
 */
$.ajax(jqAjaxParams);