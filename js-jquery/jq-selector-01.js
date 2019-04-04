;doc={};

// Special Characters :
// !"#$%&'()*+,./:;<=>?@[\]^`{|}~

// jQuery Selector
// returns : jQuery Response

// >>> *
jQuery( "*" );
var elementCount = $( "*" ).css( "border", "3px solid red" ).length;

// >>> änimated
jQuery( ":animated" )
jQuery( "*" ).filter( ":animated" );

$( "#run" ).click(function() {
  $( "div:animated" ).toggleClass( "colored" );
});
function animateIt() {
  $( "#mover" ).slideToggle( "slow", animateIt );
}
animateIt();

// >>> attribute contains prefix
jQuery( "[attribute|='value']" );
$( "a[hreflang|='en']" ).css( "border", "3px dotted green" );

// >>> attribute contains selector
jQuery( "[attribute*='value']" );
$( "input[name*='man']" ).val( "has man in it!" );

// >>> attribute contains word selector
jQuery( "[attribute~='value']" );
$( "input[name~='man']" ).val( "mr. man is in it!" );

// >>> attribute ends with word selector
jQuery( "[attribute$='value']" );
$( "input[name$='letter']" ).val( "a letter" );

// >>> attribute equals with selector
jQuery( "[attribute='value']" );
$( "input[value='Hot Fuzz']" ).next().text( "Hot Fuzz" );

// >>> attribute not equal selector
jQuery( "[attribute!='value']" );
$( "input[name!='newsletter']" ).next().append( "<b>; not newsletter</b>" );

// >>> attribute starts with selector
jQuery( "[attribute^='value']" );
$( "input[name^='news']" ).val( "news here!" );

// >>> :button selector
jQuery( ":button" );
var input = $( ":button" ).addClass( "marked" );
$( "div" ).text( "For this type jQuery found " + input.length + "." );
$( "form" ).submit(function( event ) {
  // Prevent the form from submitting
  event.preventDefault();
});

// >>> :checkbox selector
jQuery( ":checkbox" )
var input = $( "form input:checkbox" )
  .wrap( "<span></span>" )
  .parent()
  .css({
    background: "yellow",
    border: "3px red solid"
  });
$( "div" )
  .text( "For this type jQuery found " + input.length + "." )
  .css( "color", "red" );
$( "form" ).submit(function( event ) {
  // Prevent the form from submitting
  event.preventDefault();
});

// >>> :checked selector
jQuery( ":checked" );
var countChecked = function() {
  var n = $( "input:checked" ).length;
  $( "div" ).text( n + (n === 1 ? " is" : " are") + " checked!" );
};
countChecked();
$( "input[type=checkbox]" ).on( "click", countChecked );

// >>> child selector
jQuery( "parent > child" );
$( "ul.topnav > li" ).css( "border", "3px double red" );

// >>> class selector
jQuery( ".class" );
$( ".myClass" ).css( "border", "3px solid red" );

// >>> :contains selector
jQuery( ":contains(text)" );
$( "div:contains('John')" ).css( "text-decoration", "underline" );

// >>> descendant selector
jQuery( "ancestor descendant" );
$( "form input" ).css( "border", "2px dotted blue" );
$( "form fieldset input" ).css( "backgroundColor", "yellow" );

// >>> :disabled selector
jQuery( ":disabled" );
$('*:disabled');
$('input:disabled');
$( "input:disabled" ).val( "this is it" );

// >>> element selector
jQuery( "element" );
$( "div" ).css( "border", "9px solid red" );