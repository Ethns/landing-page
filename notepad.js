const name = document.getElementById('note');

function getName() {
    if (localStorage.getItem('note') === null) {
        name.textContent = '[Enter note]';
    } else {
        name.textContent = localStorage.getItem('note');
    }
}
  
  // Set Name
function setName(e) {
    // if (e.type === 'keypress') {
    //     // Make sure enter is pressed
    //     if (e.which == 13 || e.keyCode == 13) {
    //         localStorage.setItem('note', e.target.innerText);
    //         name.blur();
    //     }
    // } else {
        localStorage.setItem('note', e.target.innerText);
    // }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

getName();