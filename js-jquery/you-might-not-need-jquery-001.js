;doc={};

doc.limks=
`
http://youmightnotneedjquery.com/
`;

doc.ajax_json=
`
$.getJSON('/my/url', function(data) { /* ... */ });

// IE8+
var request = new XMLHttpRequest();
request.open('GET', '/my/url', true);
request.onreadystatechange = function() {
  if (this.readyState === 4) {
    if (this.status >= 200 && this.status < 400) {
      // Success!
      var data = JSON.parse(this.responseText);
    } else {
      // Error :(
    }
  }
};
request.send();
`;

doc.ajax_post=
`
$.ajax({
  type: 'POST',
  url: '/my/url',
  data: data
});

// IE8+
var request = new XMLHttpRequest();
request.open('POST', '/my/url', true);
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
request.send(data);
`;

doc.ajas_request=
`
$.ajax({
  type: 'GET',
  url: '/my/url',
  success: function(resp) {

  },
  error: function() {

  }
});

// IE8+
var request = new XMLHttpRequest();
request.open('GET', '/my/url', true);
request.onreadystatechange = function() {
  if (this.readyState === 4) {
    if (this.status >= 200 && this.status < 400) {
      // Success!
      var resp = this.responseText;
    } else {
      // Error :(
    }
  }
};
request.send();
request = null;
`;

doc.effect_fade_in=
`
$(el).fadeIn();

// IE8+


function fadeIn(el) {
  var opacity = 0;

  el.style.opacity = 0;
  el.style.filter = '';

  var last = +new Date();
  var tick = function() {
    opacity += (new Date() - last) / 400;
    el.style.opacity = opacity;
    el.style.filter = 'alpha(opacity=' + (100 * opacity)|0 + ')';

    last = +new Date();

    if (opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };

  tick();
}
fadeIn(el);
`;

doc.hide=
`
$(element).hide();

// IE8+
element.style.display='none';
`;

doc.show=
`
$(element).show();

// IE8+
element.style.display='';
`;

doc.addClass=
`
$(element).addClass();

// IE8+
if (el.classList)
  el.classList.add(className);
else
  el.className += ' ' + className;
`;

doc.after=
`
$(element).after(htmlString);

// IE8+
el.insertAdjacentHTML('afterend', htmlString);
`;

doc.append=
`
$(parent).append(element);

// IE8+
parent.appendChild(element);
`;

doc.before=
`
$(element).before(htmlString);

// IE8+
el.insertAdjacentHTML('beforebegin', htmlString);
`;

doc.children=
`
$(element).children();

// IE8+


var children = [];
for (var i = el.children.length; i--;) {
  // Skip comment nodes on IE8
  if (el.children[i].nodeType != 8)
    children.unshift(el.children[i]);
}
`;

doc.clone=
`
$(element).clone();

// IE8+
el.cloneNode(true);
`;

doc.contains=
`
$.contains(element, childElement);

// IE8+
element !== childElement && element.contains(childElement);
`;

doc.contains_selector=
`
$(element).find(selector).length;

// IE8+
el.querySelector(selector) !== null
`;

doc.each=
`
$(selector).each(function(item, element){
  // each item
});

// IE8+
function forEachElement(selector, fn) {
  var elements = document.querySelectorAll(selector);
  for (var i = 0; i < elements.length; i++)
    fn(elements[i], i);
}
forEachElement(selector, function(el, i){

});


`;

doc.empty=
`
$(element).empty();

// IE8+
while(el.firstChild)
  el.removeChild(el.firstChild);
`;

doc.filter=
`
$(selector).filter(filterFn);
`;

doc.find_children=
`
$(el).find(selector);
`;

doc.find_elements=
`
$('.my #awesome selector');
`;

doc.get_attributes=
`
$(el).attr('tabindex');
`;

doc.get_html=
`
$(el).html();
`;

doc.get_outer_html=
`
$('<div>').append($(el).clone()).html();
`;

doc.get_style=
`
$(el).css(ruleName);
`;

doc.get_text=
`
$(element).text();

// IE8+
element.textContent
`;

doc.has_class=
`
$(el).hasClass(className);
`;

doc.matches=
`
$(el).is($(otherEl));
`;

doc.matches_selector=
`
$(el).is('.my-class');
`;

doc.next=
`
$(el).next();
`;

doc.offset=
`$(el).offset();
`;

doc.offset_parent=
`
$(el).offsetParent();
`;

doc.outer_height=
`
$(el).outerHeight();
`;

doc.outer_height_with_margin=
`
$(el).outerHeight(true);
`;

doc.outer_width=
`
$(el).outerWidth();
`;

doc.outer_width_with_margin=
`
$(el).outerWidth(true);
`;

doc.parent=
`
$(el).parent();
`;

doc.position=
`
$(el).position();
`;

doc.position_relative_to_viewport=
`


var offset = el.offset();

// {
//  top: offset.top - document.body.scrollTop,
//  left: offset.left - document.body.scrollLeft
// }

// IE8+
el.getBoundingClientRect()

`;

doc.prepend=
`
$(parent).prepend(el);

// IE8+
parent.insertBefore(el, parent.firstChild);
`;

doc.prev=
`
$(el).prev();
`;

doc.remove=
`
$(el).remove();
`;

doc.remove_class=
`
$(el).removeClass(className);
`;

doc.replace_from_html=
`
$(el).replaceWith(string);
`;

doc.set_attributes=
`
$(el).attr('tabindex', 3);
`;

doc.set_html=
`
$(el).html(string);
`;

doc.set_style=
`
$(el).css('border-width', '20px');
`;

doc.set_text=
`
$(el).text(string);
`;

doc.siblings=
`
$(el).siblings();
`;

doc.toggle_class=
`
$(el).toggleClass(className);
`;

doc.off=
`
$(el).off(eventName, eventHandler);
`;

doc.on=
`
$(el).on(eventName, eventHandler);
`;

doc.ready=
`
$(document).ready(function(){

});
`;

doc.trigger_custom=
`
$(el).trigger('my-event', {some: 'data'});
`;

doc.trigger_native=
`
$(el).trigger('change');
`;

doc.bind=
`
$.proxy(fn, context);
`;

doc.array_each=
`
$.each(array, function(i, item){

});
`;

doc.deep_extend=
`
$.extend(true, {}, objA, objB);
`;

doc.extend=
`
$.extend({}, objA, objB);
`;

doc.indexOf=
`
$.inArray(item, array);

// IE8+
function indexOf(array, item) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === item)
      return i;
  }
  return -1;
}
indexOf(array, item);
`;

doc.isArray=
`
$.isArray(arr);

// IE8+
isArray = Array.isArray || function(arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};
isArray(arr);
`;

doc.map=
`
$.map(array, function(value, index){
});

// IE8+
function map(arr, fn) {
  var results = [];
  for (var i = 0; i < arr.length; i++)
    results.push(fn(arr[i], i));
  return results;
}
map(array, function(value, index){
});
`;

doc.now=
`
$.now();

// IE8+
new Date().getTime();
`;

doc.parse_html=
`
$.parseHTML(htmlString);

// IE8+
var parseHTML = function(str) {
  var el = document.createElement('div');
  el.innerHTML = str;
  return el.children;
};
parseHTML(htmlString);
`;

doc.parse_json=
`
$.parseJSON(string);

// IE8+
JSON.parse(string);
`;

doc.trim=
`
$.trim(string);

// IE8+
string.replace(/^\s+|\s+$/g, '');
`;

doc.type=
`
$.type(obj);

// IE8+
Object.prototype.toString.call(obj).replace(/^\[object (.+)\]$/, '$1').toLowerCase();
`;
