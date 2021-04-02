//Handles fetching the character Json, loading the audio, and creation the transition effects

const url = `characters.json`;

function getAudio() {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        var aud = [];
        var val = parseInt(document.getElementById('sel').value);

        if (!val) return;

        val--;
        for (var i=1; i < 9; i++) {
            document.getElementById("audio"+i).src = "sounds/" + eval(`data[${val}].audio${i}`);
        }
    })
    .catch(err => alert(err));
}

function loadSelection() {
    var elem = document.getElementById('sel');

    fetch(url)
    .then(response => response.json())
    .then(data => {
        for (var i = 0; i < data.length; i++) {
            elem.innerHTML = elem.innerHTML + "<option value='" + data[i].id + "'>" + data[i].name + "</option>";
        }
    })
    .catch(err => alert(err));
}

function removeTransition(elem) {
    if (elem.propertyName !== 'transform') return;
    elem.target.classList.remove('playing');
}

function playAudio(e) {
    const audio = document.querySelector("audio[data-key='"+e.keyCode+"']");
    const key = document.querySelector("div[data-key='"+e.keyCode+"']");

    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

window.onload = loadSelection();
window.addEventListener('keydown', playAudio);
document.getElementById("sel").addEventListener('change', getAudio);
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
keys.forEach(key => key.addEventListener('click', function(e) { document.querySelector("audio[data-key='"+this.dataset.key+"']").play(); }));

//handles getting the date for the footer
var a = new Date();
var currentYear = a.getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;