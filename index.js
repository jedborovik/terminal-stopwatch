
exports.start = start;
exports.stop = stop;

var interval;
var startTime;
var stream = process.stdout;

function start() {
  startTime = Date.now();

  interval = setInterval(function() {
    stream.clearLine();
    stream.cursorTo(0);
    stream.write(elapsedTime());
  }, 1000);
}

function stop() {
  clearInterval(interval);
}

function elapsedTime() {
  var milli = Date.now() - startTime;
  var minutes = Math.floor((milli / 1000) / 60);
  var seconds = Math.floor((milli / 1000) % 60);
  if (seconds < 10) seconds = '0' + seconds;

  return minutes + ':' + seconds;
}
