;doc={};

doc.limks=
`
http://youmightnotneedjquery.com/
`;

doc.ajax_json=
`
$.getJSON('/my/url', function(data) { /* ... */ });

var request = new XMLHttpRequest();
request.open('GET', '/my/url', true);
request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var data = JSON.parse(request.responseText);
  } else {
    // We reached our target server, but it returned an error

  }
};
request.onerror = function() {
  // There was a connection error of some sort
};
request.send();
`;

doc.hide=
`
$(element).hide();
element.style.display='none';
`;

doc.ajax_post=
`
$.ajax({
  type: 'POST',
  url: '/my/url',
  data: data
});

var request = new XMLHttpRequest();
request.open('POST', '/my/url', true);
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
request.send(data);
`;

doc.ajax_request=
`
$.ajax({
  type: 'GET',
  url: '/my/url',
  success: function(resp) { /* ... */ },
  error: function() { /* ... */ }
});

var request = new XMLHttpRequest();
request.open('GET', '/my/url', true);
request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var resp = request.responseText;
  } else {
    // We reached our target server, but it returned an error
  }
};
request.onerror = function() {
  // There was a connection error of some sort
};
request.send();
`;

doc.effect_fade_in=
`
`;

doc.show=
`
$(element).show();
element.style.display='';
`;

doc.addClass=
`
$(element).addClass();
`;

doc.after=
`
`;

doc.append=
`
`;

doc.before=
`
`;

doc.children=
`
`;

doc.clone=
`
`;

doc.contains=
`
`;

doc.contains_selector=
`
`;

doc.each=
`
`;

doc.empty=
`
$(element).empty();
`;

doc.filter=
`
`;

doc.find_children=
`
`;

doc.find_elements=
`
`;

doc.get_attributes=
`
`;

doc.get_html=
`
`;

doc.get_outer_html=
`
`;

doc.get_style=
`
`;

doc.get_text=
`
$(element).text();
element.textContent
`;

doc.has_class=
`
`;

doc.matches=
`
`;

doc.matches_selector=
`
`;

doc.next=
`
`;

doc.offset=
`
`;

doc.offset_parent=
`
`;

doc.outer_height=
`
`;

doc.outer_height_with_margin=
`
`;

doc.outer_width=
`
`;

doc.outer_width_with_margin=
`
`;

doc.parent=
`
`;

doc.position=
`
`;

doc.position_relative_to_viewport=
`
`;

doc.prepend=
`
`;

doc.prev=
`
`;

doc.remove=
`
`;

doc.remove_class=
`
`;

doc.replace_from_html=
`
`;

doc.set_attributes=
`
`;

doc.set_html=
`
`;

doc.set_style=
`
`;

doc.set_text=
`
`;

doc.siblings=
`
`;

doc.toggle_class=
`
`;

doc.off=
`
`;

doc.on=
`
`;

doc.ready=
`
`;

doc.trigger_custom=
`
`;

doc.trigger_native=
`
`;

doc.bind=
`
`;

doc.array_each=
`
`;

doc.deep_extend=
`
`;

doc.extend=
`
`;

doc.indexOf=
`
`;

doc.isArray=
`
`;

doc.map=
`
`;

doc.now=
`
`;

doc.parse_html=
`
`;

doc.parse_json=
`
`;

doc.trim=
`
`;

doc.typeni=
`
`;
