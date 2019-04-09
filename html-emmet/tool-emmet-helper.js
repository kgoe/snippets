;doc={};
;template={};
;const emmet=require('emmet');
;const tags=require('./doc-html-tags-clone.js');

// console.log(emmet);
// console.log(tags);

doc.separators=
`
 
>
+
()
[]
^
*
$
.
{}
`;

template.t000=
`
html:5
`;

template.t001=
`
html>
(head+body)
`;

template.t010=
`
html>
(
(head>(
meta+title+style+link+script
))
+
(body>(
header+main{lorem $}+footer
))
)
`;

template.t101=`nav>ul>li`;
template.t102=`div+p+bq`;
template.t103=`div+div>p>span+em^bq`;
template.t104=`div>(header>ul>li*2>a)+footer>p`;
template.t105=`(div>dl>(dt+dd)*3)+footer>p`;
template.t106=`ul>li*5`;
template.t107=`ul>li.sample$*5`;
template.t108=`h$[title=topic$]{Headline $}*3`;
template.t109=`ul>li.item$$$*5`;
template.t110=`ul>li.item$@-*5`;
template.t111=`ul>li.item$@3*5`;
template.t112=`#header`;
template.t113=`.title`;
template.t114=`form#search.wide`;
template.t115=`p.class1.class2.class3`;
template.t116=`p[title="Hello world"]`;
template.t117=`td[rowspan=2 colspan=3 title]`;
template.t118=`[a="value1" b="value2"]`;
template.t119=`a{Click me}`;
template.t120=`p>{Click }+a{here}+{ to continue}`;

template.t121=`.class`;
template.t122=`em>.class`;
template.t123=`ul>.class`;
template.t124=`table>.row>.col`;

var t000=template.t000.split('\n').join('');
var t010=template.t010.split('\n').join('');

var t000h=emmet.expandAbbreviation(template.t001);
var t010h=emmet.expandAbbreviation(t010);

console.log(t000h);