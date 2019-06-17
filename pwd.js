module.exports = function pwd(printPrompt) {
  process.stdout.write(process.cwd() + '\n');
  printPrompt();
};
