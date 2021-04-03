//Path tp the JSON file
const url = `characters.json`;

//Handles fetching the character Json, and loads the proper audio
function getAudio() {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        var aud = [];
        var val = parseInt(document.getElementById('sel').value);

        if (!val) return;

        val--;
        //Swaps out the audio when a new champion is selected
        document.getElementById('theBody').style.backgroundImage = 'url("images/' + data[val].image + '")';
        for (var i=1; i < 9; i++) {
            document.getElementById("audio"+i).src = "sounds/" + eval(`data[${val}].audio${i}`);
        }
    })
    .catch(err => alert(err));
}

//Handles dynamically building the champion selection and preloads the images
function loadSelection() {
    var selElem = document.getElementById('sel');
    var imgElem = document.getElementById('preloaded');

    fetch(url)
    .then(response => response.json())
    .then(data => {
        for (var i = 0; i < data.length; i++) {
            selElem.innerHTML += "<option value='"+data[i].id + "'>"+data[i].name+"</option>";
            imgElem.innerHTML += "<img src='images/"+data[i].images+"'>";
        }
    })
    .catch(err => alert(err));
}

//Removes the playing CSS from the button
function removeTransition(elem) {
    if (elem.propertyName !== 'transform') return;
    elem.target.classList.remove('playing');
}


//Dynamically gets and plays the audio based on the pressed key
function playAudio(e) {
    const audio = document.querySelector("audio[data-key='"+e.keyCode+"']");
    const key = document.querySelector("div[data-key='"+e.keyCode+"']");

    if (!audio) return;

    //Adds the playing CSS to a button
    key.classList.add('playing');
    //Stops the audio from playing over itself if the same sound is selected twice
    audio.currentTime = 0;
    audio.play();
}

//handles getting the date for the footer
var a = new Date();
var currentYear = a.getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;

//EVENT LISTENERS

//Forces the list to build on windows load
window.onload = loadSelection();
//Event listener for key press
window.addEventListener('keydown', playAudio);
//Changes the loaded audio to the proper champion when the selection is changed
document.getElementById("sel").addEventListener('change', getAudio);
const keys = Array.from(document.querySelectorAll('.key'));
//Calls the remove transition function on transitioned event
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//Allows the KBD's to be clicked as well and still function
keys.forEach(key => key.addEventListener('click', function(e) { document.querySelector("audio[data-key='"+this.dataset.key+"']").play(); }));