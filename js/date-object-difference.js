//01
var today = new Date();
var year = today.getFullyear();
var est = new Date('Mar 24 2017 08:01:20');
//03
difference = (difference / 31556900000);

var elMsg = document.getElementById('message');
elMsg.textContent = Math.floor(difference) + 'years of online travel advice';
