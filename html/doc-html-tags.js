;doc={};
;tag={};

tag.level00=
`
<!-- ... -->
<!DOCTYPE html>
html
head
body

iframe
noframes

link
style
script
noscript
`;

tag.level01h=
`
meta
title
`;

tag.level01b=
`
div
header
nav
main
footer
section
aside
article
section
template
`;

tag.level02b=
`
a
p
pre

abbr
address
applet
area
audio
b
base
bdi
blockquote
br
button
canvas
caption
cite
code
data
datalist
dd
dl
dt
del
details
dfn
dialog
em
embed
fieldset
fieldcaption
figure
h1
h2
h3
h4
h5
h6
hr
i
img
input
ins
kbd
label
legend
li
map
mark
meta
meter
object
ul
ol
li
select
option
optgroup
output
p
param
picure
progress
q
rp
pt
ruby
s
samp
select
small
source
span
strike
strong
sub
sup
summary
sup
svg
textarea
time
title
track
var
video
wbr

table
tbody
thead
tfoot
tr
td
col
colgroup
`;

tags.categories=
`
layout
media
webapps
ruby
other
`;

tags.html5_new=
`
article|layout
aside|layout
audio|media
canvas|webapp
command|webapp
datagrid|webapp
datalist|webapp
details|webapp
dialog|other
embed|layout
figcaption|layout
figure|layout
footer|layout
header|layout
hgroup|other
keygen|other
mark|other
meter|other
nav|layout
output|webapp
progress|webapp
rp|ruby
rt|ruby
ruby|ruby
section|layout
source|media
summary|other
time|other
video|media
wbr|layout
`;

tags.html4_html5=
`
<!-- ... -->
<!DOCTYPE>
a
abbr
address
area
b
base
bdo
blockquote
body
br
button
caption
cite
code
col
colgroup
dd
del
dfn
div
dl
dt
em
fieldset
form
h1
h2
h3
h4
h5
h6
head
hr
html
i
iframe
img
input
ins
kbd
label
legend
li
link
map
menu
meta
noscript
object
ol
optgroup
option
p
param
pre
q
s
samp
script
select
small
span
strong
style
sub
sup
table
tbody
td
textarea
tfoot
th
thead
title
tr
ul
var
`;

tags.unsupported=
`
acronym
applet
basefont
big
center
dir
font
frame
frameset
noframes
strike
tt
u
xmp
`;

// End
if ( typeof module !== 'undefined'
  && typeof require !== 'undefined'
  && typeof require.main !== 'undefined'
  && typeof module.exports !== 'undefined'
  && require.main === module
) {
  console.log('LOADED : node', __filename);
} else {
  console.log('LOADED : node-module', __filename);
  module.exports = tags;
}
