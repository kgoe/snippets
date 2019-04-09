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
  module.exports = HTTU;
}
