;doc={};
;template={};
;const emmet=require('emmet');
;const tags=require('./doc-html-tags-clone.js');

// console.log(emmet);
// console.log(tags);

/**
 * template
 */
((doc)=>{
})(doc);

/**
 * separators
 */
((doc)=>{
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
})(doc);

/**
 * basic html templates
 */
((doc)=>{
})(doc);

/**
 * full html templates
 */
((doc)=>{

doc.t000=
`
html:5
`;

doc.t001=
`
html>
(head+body)
`;

doc.t010=
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

})(doc);

/**
 * snippet html template
 */
((doc)=>{
doc.t101=`nav>ul>li`;
doc.t102=`div+p+bq`;
doc.t103=`div+div>p>span+em^bq`;
doc.t104=`div>(header>ul>li*2>a)+footer>p`;
doc.t105=`(div>dl>(dt+dd)*3)+footer>p`;
doc.t106=`ul>li*5`;
doc.t107=`ul>li.sample$*5`;
doc.t108=`h$[title=topic$]{Headline $}*3`;
doc.t109=`ul>li.item$$$*5`;
doc.t110=`ul>li.item$@-*5`;
doc.t111=`ul>li.item$@3*5`;
doc.t112=`#header`;
doc.t113=`.title`;
doc.t114=`form#search.wide`;
doc.t115=`p.class1.class2.class3`;
doc.t116=`p[title="Hello world"]`;
doc.t117=`td[rowspan=2 colspan=3 title]`;
doc.t118=`[a="value1" b="value2"]`;
doc.t119=`a{Click me}`;
doc.t120=`p>{Click }+a{here}+{ to continue}`;
doc.t121=`.class`;
doc.t122=`em>.class`;
doc.t123=`ul>.class`;
doc.t124=`table>.row>.col`;
})(doc);

/**
 * usage
 */
var emmet001=doc.t000.split('\n').join('');
var emmet002=doc.t010.split('\n').join('');

var html001=emmet.expandAbbreviation(emmet001);
var html002=emmet.expandAbbreviation(emmet002);

console.log(html001);