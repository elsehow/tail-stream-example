const kefir = require('kefir')
const spawn = require('child_process').spawn

let tail = spawn(
  'tail',
  ['-f', 'log.txt']
)

// Stream<Buffer>
let tailS = kefir.fromEvents(
  tail.stdout,
  'data'
)

// Stream<Float>
tailS
/// Stream<String>
  .map(buff => buff.toString())
// Stream<Float>
  .map(parseFloat)
// Stream<Float>
  .map(time => time*100000)
  .log()
