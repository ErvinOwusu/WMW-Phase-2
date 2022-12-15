// JavaScript File
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})


var checkMetal = document.getElementById('metal');
var checkWood = document.getElementById('wood');

var chess = document.getElementById('chess');
var axe = document.getElementById('axe');
var sign = document.getElementById('sign');

function metal() {
    var checkMetal = document.getElementById('metal');
    var checkWood = document.getElementById('wood');

    var chess = document.getElementById('chess');
    var axe = document.getElementById('axe');
    var sign = document.getElementById('sign');

    if (checkMetal.checked == true) {

    }
    else {

    }
}

function wood() {
    var checkMetal = document.getElementById('metal');
    var checkWood = document.getElementById('wood');

    var chess = document.getElementById('chess');
    var axe = document.getElementById('axe');
    var sign = document.getElementById('sign');

    if (checkWood.checked == true) {
        chess.style.display = "none";
        sign.style.display = "none";
    }
    else {
        chess.style.display = "block";
        sign.style.display = "block";
    }
}