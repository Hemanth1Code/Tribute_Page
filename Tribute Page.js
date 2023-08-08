/*Contents Button */
let birthEl = document.getElementById('birth');
let selfEl = document.getElementById('self');
let conflictsEl = document.getElementById('conflicts');
let educationEl = document.getElementById('education');
let alienationEl = document.getElementById('alienation');

/*Birth Button after onclick background Color */
birthEl.onclick = function() {
    birthEl.style.backgroundColor = 'white';
    birthEl.style.color = 'black';

    selfEl.style.backgroundColor = "transparent";
    selfEl.style.color = 'white';

    conflictsEl.style.backgroundColor = 'transparent';
    conflictsEl.style.color = 'white';

    educationEl.style.backgroundColor = "transparent";
    educationEl.style.color = 'white';


    alienationEl.style.backgroundColor = "transparent";
    alienationEl.style.color = 'white';

}

/*Self Button after onclick background Color */
selfEl.onclick = function() {

    birthEl.style.backgroundColor = 'transparent';
    birthEl.style.color = 'white';

    selfEl.style.backgroundColor = "white";
    selfEl.style.color = 'black';

    conflictsEl.style.backgroundColor = 'transparent';
    conflictsEl.style.color = 'white';

    educationEl.style.backgroundColor = "transparent";
    educationEl.style.color = 'white';


    alienationEl.style.backgroundColor = "transparent";
    alienationEl.style.color = 'white';
}

/*Conflicts button after onclick background Color*/
conflictsEl.onclick = function() {

    birthEl.style.backgroundColor = 'transparent';
    birthEl.style.color = 'white';

    selfEl.style.backgroundColor = "transparent";
    selfEl.style.color = 'white';

    conflictsEl.style.backgroundColor = 'white';
    conflictsEl.style.color = 'black';

    educationEl.style.backgroundColor = "transparent";
    educationEl.style.color = 'white';


    alienationEl.style.backgroundColor = "transparent";
    alienationEl.style.color = 'white';
}


/*education Button after onclick background Color*/
educationEl.onclick = function() {

    birthEl.style.backgroundColor = 'transparent';
    birthEl.style.color = 'white';

    selfEl.style.backgroundColor = "transparent";
    selfEl.style.color = 'white';

    conflictsEl.style.backgroundColor = 'transparent';
    conflictsEl.style.color = 'white';

    educationEl.style.backgroundColor = "white";
    educationEl.style.color = 'black';


    alienationEl.style.backgroundColor = "transparent";
    alienationEl.style.color = 'white';
}

/*alienation Button after onclick background Color*/
alienationEl.onclick = function() {

    birthEl.style.backgroundColor = 'transparent';
    birthEl.style.color = 'white';

    selfEl.style.backgroundColor = "transparent";
    selfEl.style.color = 'white';

    conflictsEl.style.backgroundColor = 'transparent';
    conflictsEl.style.color = 'white';

    educationEl.style.backgroundColor = "transparent";
    educationEl.style.color = 'white';


    alienationEl.style.backgroundColor = "white";
    alienationEl.style.color = 'black';
}

/*Top Button */
let toTopBtn = document.getElementById('scroll');

function scrollFunc() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTopBtn.style.display = 'block';
    } else {
        toTopBtn.style.display = 'none';
    }
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
toTopBtn.addEventListener("click", backToTop);

window.onscroll = function() {
    scrollFunc();
}