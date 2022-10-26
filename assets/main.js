const switch_btn = document.getElementById('switch');

switch_btn.onclick = function(){
    var theme = document.getElementsByTagName('html')[0].getAttribute('theme');
    if (theme == "light") {
        document.getElementsByTagName('html')[0].setAttribute('theme', 'dark');
        document.getElementById('background').setAttribute('class', 'dark');
    }
    else {
        document.getElementsByTagName('html')[0].setAttribute('theme', 'light');
        document.getElementById('background').setAttribute('class', 'light');
    }
}