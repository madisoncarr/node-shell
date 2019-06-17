const pwd = require('./pwd');
const ls = require('./ls');

function printPrompt() {
  process.stdout.write('prompt >');
}

printPrompt();
process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  process.stdout.write('You typed: ' + cmd + '\n');
  if (cmd === 'ls') {
    ls(printPrompt);
  } else if (cmd === 'pwd') {
    pwd(printPrompt);
  }
});
