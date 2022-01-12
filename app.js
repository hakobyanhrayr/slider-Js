let slider = document.getElementsByClassName('slider');
let totalSlider = slider.length;
let positionSlider = 0;
let dotPosition = 0;
let dot = document.getElementsByClassName('dot');
let dotTotal = dot.length;
let elem = document.getElementsByClassName('im');

for (let el in elem){
    elem[el].onclick = function (){
        changeImage();
    }
}
function changeImage(){
    if (positionSlider === totalSlider -1){
        positionSlider = 0;
    }
    else {
        positionSlider ++;
    }
    DD();
    updatePosition()
}
document
    .getElementById('right')
    .addEventListener('click', function (){
        right();
    })
document
    .getElementById('left')
    .addEventListener('click', function (){
        left();
    })


function updatePosition(){
    for (let item of slider){
        item.classList.remove('visibility');
        item.classList.add('hidden')
    }
    slider[positionSlider].classList.add('visibility');
}

function right (){
    console.log('right')
    if (positionSlider === totalSlider -1){
        positionSlider = 0;
    }
    else {
        positionSlider ++;
    }
    DD();
    updatePosition()
}
   function left (){
        console.log('left')
    if (positionSlider === 0){
        positionSlider = 0;
    }
    else {
        positionSlider --;
    }
       tt();
        updatePosition()
}
function  DD(){
    if (dotPosition === dotTotal -1){
        dotPosition = 0;
    }else {
        dotPosition ++;
    }
    for (let d of dot){
        d.classList.remove('visibility');
        // d.classList.add('hidden')
    }
    dot[dotPosition].classList.add('visibility');
}
function  tt(){
    if (dotPosition === 0){
        dotPosition = 0;
    }else {
        dotPosition --;
    }
    for (let d of dot){
        d.classList.remove('visibility');
        // d.classList.add('hidden')
    }
    dot[dotPosition].classList.add('visibility');
}



