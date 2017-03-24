//#01
var msg = '<h2>browser window</h2><p>width: ' + window.innerWidth + '/p>';
msg += '<p>height: ' + window.window.innerHight + '</p>';
//02
msg += '<h2>history</h2><p>items: ' + window.history.length + '</p>';
msg += '<p>height: ' + window.scrween.height + '</p>';
//03
var el = document.getElementById('info');
el.innerHTML = msg;
//04
alert('Current page: ' + window.location);
