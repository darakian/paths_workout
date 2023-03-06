const mm = require('minimatch');
mm("abc", "*");
baz = require('minimatch').Minimatch
biz = new baz("*")

ah = require("ansi-html")
let some_html = ah('[ANSI_TEXT]')

t = require("tar");
tar.Unpack()
t.Unpack()

tar.c(
  {
    gzip: <true|gzip options>,
    file: 'my-tarball.tgz'
  },
  ['some', 'files', 'and', 'folders']
).then(_ => { .. tarball has been created .. })
