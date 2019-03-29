const chokidar = require('chokidar');
const exec = require('child_process').exec;
const path = require('path')
// One-liner for current directory, ignores .dotfiles
chokidar.watch(path.resolve(__dirname, '../src')).on('all', (event, _path) => {
  if (event === "change") {
    console.log(event, _path);
    builder()
  }
});

function builder() {
  exec('pkm build', { cwd: path.resolve(__dirname, '../../../') }, function (error, stdout, stderr) {
    if (error) {
      console.error('error: ' + error);
      return;
    }
    console.log('stdout success: ' + stdout);
  });
}

