terminal-stopwatch
==================

Live updating stopwatch in the terminal

### Installation
```bash
npm install terminal-stopwatch
```

### Example
```javascript
var stopwatch = require('terminal-stopwatch');

stopwatch.start();

setTimeout(function() {
  stopwatch.stop();
}, 1000 * 60 * 5);
```

This will show a timer that updates each second.
