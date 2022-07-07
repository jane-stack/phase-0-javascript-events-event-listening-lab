const input = document.getElementById('input');

// input.addEventListener('click', addingEventListener);

function addingEventListener() {
    input.addEventListener('click', (e) => {
        alert('I was clicked!')
    })
}

addingEventListener();