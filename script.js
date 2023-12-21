let haruhi = document.getElementById('haruhi');
let haruh1 = document.getElementById('haruh1');
let you = document.getElementById('you');
let dontTouch = document.getElementById('dont-touch');


function boring(){
    haruhi.src = 'pics/haruhi looked away (480px).png';
    haruh1.innerHTML = 'humph~ boring.';
    you.style.display = 'none';

};

function fun(){
    haruhi.src = 'pics/haruhi happy (480px).png';
    haruh1.innerHTML = 'WOW!~ REALLY??? This is Fun....';
    you.style.display = 'none';
};

haruhi.addEventListener('mouseover', function(){
    dontTouch.style.display = 'block';
});

haruhi.addEventListener('mouseleave', function(){
    dontTouch.style.display = 'none';
});