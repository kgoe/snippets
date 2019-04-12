;doc={};

doc.sort=
`
https://www.w3schools.com/howto/default_page6.asp
https://stackoverflow.com/questions/4611591/code-vs-pre-vs-samp-for-inline-and-block-code-snippets
https://code.visualstudio.com/docs/languages/html
https://bootsnipp.com/
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
  module.exports = sort;
}
