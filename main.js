let stars=document.getElementById('stars');
let moon=document.getElementById('moon');
let mountains_behind=document.getElementById('mountains_behind');
let mountains_front=document.getElementById('mountains_front');
let btn=document.getElementById('btn');
let text=document.getElementById('text');


window.addEventListener('scroll',function(){
    let value=window.scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value + 'px';
    text.style.marginRight=value *4 + 'px'
    if (value *4===value){  //iwanna know their intersection
        text.style.color='black';
    }
})