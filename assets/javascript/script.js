// SHOP PRODUCT SINGLE PAGE

var mainimg = document.getElementById('mainimg');
var smallimg = document.getElementsByClassName('small-img');

smallimg[0].onclick = function () {
    mainimg.src = smallimg[0].src;
}
smallimg[1].onclick = function () {
    mainimg.src = smallimg[1].src;
}

smallimg[2].onclick = function () {
    mainimg.src = smallimg[2].src;
}

