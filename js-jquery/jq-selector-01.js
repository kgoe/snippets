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

// >>> :empty selector
jQuery( ":empty" );
$( "td:empty" )
  .text( "Was empty!" )
  .css( "background", "rgb(255,220,200)" );

// >>> :enabled selector
jQuery( ":enabled" );
$( "input:enabled" ).val( "this is it" );

// >>> :eq() selector
// >>> family of filter selectors :eq() :gt() :lt() :even :odd
// >>> querySelectorAll() usage
jQuery( ":eq(index)" );
jQuery( ":eq(-index)" );
$( "td:eq( 2 )" ).css( "color", "red" );
// Applies yellow background color to a single <li>
$( "ul.nav li:eq(1)" ).css( "backgroundColor", "#ff0" );
// Applies italics to text of the second <li> within each <ul class="nav">
$( "ul.nav" ).each(function( index ) {
  $( this ).find( "li:eq(1)" ).css( "fontStyle", "italic" );
});
// Applies red text color to descendants of <ul class="nav">
// for each <li> that is the second child of its parent
$( "ul.nav li:nth-child(2)" ).css( "color", "red" );

// >>> :even selector
jQuery( ":even" );
$( "tr:even" ).css( "background-color", "#bbf" );

// >>> :file selector
jQuery( ":file" );
var input = $( "input:file" ).css({
  background: "yellow",
  border: "3px red solid"
});
$( "div" )
  .text( "For this type jQuery found " + input.length + "." )
  .css( "color", "red" );
$( "form" ).submit(function( event ) {
  event.preventDefault();
});

// >>> :first-child selector
jQuery( ":first-child" );
$( "div span:first-child" )
  .css( "text-decoration", "underline" )
  .hover(function() {
    $( this ).addClass( "sogreen" );
  }, function() {
    $( this ).removeClass( "sogreen" );
  });

// >>> :first-of-type selector
jQuery( ":first-of-type" );
$( "span:first-of-type" ).addClass( "fot" );

// >>> :first selector
jQuery( ":first" );
$( "tr:first" ).css( "font-style", "italic" );

// >>> :focus selector
jQuery( ":focus" );
$( "#content" ).delegate( "*", "focus blur", function() {
  var elem = $( this );
  setTimeout(function() {
    elem.toggleClass( "focused", elem.is( ":focus" ) );
  }, 0 );
});

// >>> :gt() selector
jQuery( ":gt(index)" );
jQuery( ":gt(-index)" );
$( "td:gt(4)" ).css( "backgroundColor", "yellow" );
$( "td:gt(-2)" ).css( "color", "red" );

// >>> has attribute selector
jQuery( "[attribute]" );
$( "div[id]" ).one( "click", function() {
  var idString = $( this ).text() + " = " + $( this ).attr( "id" );
  $( this ).text( idString );
});

// >>> :header selector
jQuery( ":header" );
// .filter(':header');
$( ":header" ).css({ background: "#ccc", color: "blue" });

// >>> :hidden selector
jQuery( ":hidden" );
// In some browsers :hidden includes head, title, script, etc...
var hiddenElements = $( "body" ).find( ":hidden" ).not( "script" );
$( "span:first" ).text( "Found " + hiddenElements.length + " hidden elements total." );
$( "div:hidden" ).show( 3000 );
$( "span:last" ).text( "Found " + $( "input:hidden" ).length + " hidden inputs." );

// >>> #id selector

// >>> :image selector

// >>> :input selector

// >>> :lang() selector

// >>> :last-child selector

// >>> :last-of-type selector

// >>> :last selector

// >>> :lt() selector

// >>> Multiple Attribute Selector [name=”value”][name2=”value2″]

// >>> Multiple Selector (“selector1, selector2, selectorN”)

// >>> Next Adjacent Selector (“prev + next”)

// >>> Next Siblings Selector (“prev ~ siblings”)

// >>> :not() selector

// >>> :nth-child() selector

// >>> :nth-last-child() selector

// >>> :nth-last-of-type() selector

// >>> :nth-of-type() selector

// >>> :odd selector

// >>> :only-child selector

// >>> :only-of-type selector

// >>> :parent selector

// >>> :password selector

// >>> :radio selector

// >>> :reset selector

// >>> :root selector

// >>> :selected selector

// >>> :submit selector

// >>> :target selector

// >>> :text selector
jQuery( ":text" );

$( "<input>" ).is( "[type=text]" ); // false
$( "<input>" ).is( ":text" ); // true

var input = $( "form input:text" ).css({
  background: "yellow",
  border: "3px red solid"
});
 
$( "div" )
  .text( "For this type jQuery found " + input.length + "." )
  .css( "color", "red" );
 
// Prevent form submission
$( "form" ).submit(function( event ) {
  event.preventDefault();
});

// >>> :visible selector
jQuery( ":visible" );
$( "div:visible" ).click(function() {
  $( this ).css( "background", "yellow" );
});
$( "button" ).click(function() {
  $( "div:hidden" ).show( "fast" );
});
