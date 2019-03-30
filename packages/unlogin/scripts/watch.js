const chokidar = require('chokidar');
const exec = require('child_process').exec;
const path = require('path');
const colors = require('colors');
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'bgRed',
  success: 'bgGreen',
});
// One-liner for current directory, ignores .dotfiles
chokidar.watch(path.resolve(__dirname, '../src')).on('all', (event, _path) => {
  if (event === 'change') {
    console.log(event.input, _path);
    builder();
  }
});

function builder() {
  exec('pkm build', { cwd: path.resolve(__dirname, '../../../') }, function(error, stdout, stderr) {
    if (error) {
      console.error('error: '.bgRed + error);
      return;
    }
    console.log('stdout success: '.success + stdout);
  });
}
