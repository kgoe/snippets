;

// jQuery.ajaxSetup
// jQuery.ajaxSetup( options )

// EG
$.ajaxSetup({
  url: "ping.php"
});

// EG
$.ajax({
  // url not set here; uses ping.php
  data: { "name": "Dan" }
});

// EG
$.ajaxSetup({
  contents: {
    mycustomtype: /mycustomtype/
  },
  converters: {
    "mycustomtype json": function( result ) {
      // Do stuff
      return newresult;
    }
  }
});

// EG
$.ajaxSetup({
  contents: {
    mycustomtype: /mycustomtype/
  },
  converters: {
    "text mycustomtype": true,
    "mycustomtype json": function( result ) {
      // Do stuff
      return newresult;
    }
  }
});


// jQuery.ajax()
// jQuery.ajax( url [, settings ] )
// jQuery.ajax( [settings ] )
// jQuery.ajax( [settings ] ).done()

// settings
var jquery_settings_properties = {
  accepts: {},
  async: true,
  beforeSend: function(jqXHR, settings){},
  cache: true,
  complete: function(jqXHR, textStatus){},
  contents:{},
  contentType:'application/x-www-form-urlencoded; charset=UTF-8',
  context:{},
  converters:{"* text": window.String, "text html": true, "text json": jQuery.parseJSON, "text xml": jQuery.parseXML},
  crossDomain: false,
  data:{},
  dataFilter: function(data,type){},
  dataType:"text", // "xml json jsonp script html text",
  error: function(jqXHR, textStatus, errorThrown){},
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
  success: function( data, textStatus, jqXHR){},
  timeout: 1000,
  traditional: true,
  url: 'http://api-server.com',
  xhr: function(){}, // ActiveXObject when available, XMLHttpRequest otherwise
  xhrFields: {
    withCredentials: true,
  },
}

// EG001
$.ajax({
  accepts: {
    mycustomtype: 'application/x-some-custom-type'
  },
 
  // Instructions for how to deserialize a `mycustomtype`
  converters: {
    'text mycustomtype': function(result) {
      // Do Stuff
      return newresult;
    }
  },
 
  // Expect a `mycustomtype` back from server
  dataType: 'mycustomtype'
});

// EG002
$.ajax({
  url: "https://fiddle.jshell.net/favicon.png",
  beforeSend: function( xhr ) {
    xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
  }
})
.done(function( data ) {
  if ( console && console.log ) {
    console.log( "Sample of data:", data.slice( 0, 100 ) );
  }
});

// EG003
// Assign handlers immediately after making the request,
// and remember the jqXHR object for this request
var jqxhr = $.ajax( "example.php" )
  .done(function() {
    alert( "success" );
  })
  .fail(function() {
    alert( "error" );
  })
  .always(function() {
    alert( "complete" );
  });
 
// Perform other work here ...
 
// Set another completion function for the request above
jqxhr.always(function() {
  alert( "second complete" );
});

// jqXHR.done(function( data, textStatus, jqXHR ) {});
// jqXHR.fail(function( jqXHR, textStatus, errorThrown ) {});
// jqXHR.always(function( data|jqXHR, textStatus, jqXHR|errorThrown ) { }); // (added in jQuery 1.6)
// jqXHR.then(function( data, textStatus, jqXHR ) {}, function( jqXHR, textStatus, errorThrown ) {});
// jqXHR.readyState
// jqXHR.responseXML
// jqXHR.status
// jqXHR.statusText
// jqXHR.abort( statusText )
// jqXHR.getAllResponseHeaders()
// jqXHR.getResponseHeader( name )
// jqXHR.overrideMimeType( mimeType )
// jqXHR.setRequestHeader( name, value )
// jqXHR.statusCode( callbacksByStatusCode )

// EG
$.ajax({
  method: "POST",
  url: "some.php",
  data: { name: "John", location: "Boston" }
})
.done(function( msg ) {
  alert( "Data Saved: " + msg );
});

// EG
$.ajax({
  url: "test.html",
  cache: false
})
.done(function( html ) {
  $( "#results" ).append( html );
});

// EG
var xmlDocument = ''; // [create xml document];
var xmlRequest = $.ajax({
  url: "page.php",
  processData: false,
  data: xmlDocument
});
xmlRequest.done( handleResponse );

// EG
var menuId = $( "ul.nav" ).first().attr( "id" );
var request = $.ajax({
  url: "script.php",
  method: "POST",
  data: { id : menuId },
  dataType: "html"
});
request.done(function( msg ) {
  $( "#log" ).html( msg );
});
request.fail(function( jqXHR, textStatus ) {
  alert( "Request failed: " + textStatus );
});

// EG
$.ajax({
  method: "GET",
  url: "test.js",
  dataType: "script"
});