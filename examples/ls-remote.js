
var url = process.argv[2] || "git://github.com/creationix/conquest.git";
// Load a node powered lsRemote function
var lsRemote = require('../lib/ls-remote.js')(require('./node'));

lsRemote(url, function (err, refs, caps) {
  if (err) throw err;
  console.log(refs);
});
