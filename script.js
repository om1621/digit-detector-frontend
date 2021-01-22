$(document).ready(() => {
    
    const canvas = $('#canvas')[0];
    const ctx = canvas.getContext("2d");

    // canvas.width = $('.input-box').width() * 1;
    // canvas.height = $('body').height() * 0.5;

    // $(window).resize(function () { 
    //    canvas.width = $('.input-box').width()*1;
    //    canvas.height = $('body').height() * 0.5;
    // });
   
    let painting = false;

    const draw = (e) => {

        if(!painting){
            return;
        }

        const offset = $('#canvas').offset();

        ctx.lineWidth = 15;
        ctx.lineCap='round'
        ctx.lineTo(e.clientX - offset.left, e.clientY - offset.top);
        ctx.stroke(); 
        ctx.beginPath();
        ctx.moveTo(e.clientX - offset.left, e.clientY - offset.top);
    }

    canvas.addEventListener('mousedown', (e) => {
        painting = true;
        draw(e);
    })

    canvas.addEventListener('mouseup', () => {
        painting = false;
        ctx.beginPath();
        const data = canvas.toDataURL();
        $('.output-image').attr('src', data);
        $('.output-image').css('display', 'block');

    })

    canvas.addEventListener('mousemove', (e) => {
        draw(e);
    })


    
    
})

