//01
var msg = '<p><b>page title: <b />';
msg += '<b>page adress: <b />' + document.URL + '<br />';
msg = '<b>lastModified: </b>' + document.lastModified + '</p>'
//02
var el = document.getElementById('footer');
el.innerHTML = msg;
