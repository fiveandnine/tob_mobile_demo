const chokidar = require('chokidar');
const exec = require('child_process').exec;
const path = require('path')
// One-liner for current directory, ignores .dotfiles
chokidar.watch(path.resolve(__dirname, '../src/Home')).on('all', (event, _path) => {
  console.log(event, _path,path.resolve(__dirname, '../../../'));
  if(event=== "change") builder()
});
function builder(){
  exec('pkm build',{cwd: path.resolve(__dirname, '../../../')}, function(error, stdout, stderr){
    if(error) {
      console.error('error: ' + error);
      return;
    }
    console.log('stdout success: ' + stdout);
  });
}

