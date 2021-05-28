$(document).ready(function () {
    $('#slides').superslides({
        play: 3000,
        pagination : false,
        animation : 'fade',
        animation_easing : 'linear'
        
    });
    let typed = new Typed ('.typed',{
        strings :['Frontend Developer' , 'Backend Developer' , 'FullStack Developer'],
        typeSpeed :70,
        loop :true,
        showCursor: false,
        backSpeed: 70,
        shuffle: false,
        smartBackspace: true

    })
})