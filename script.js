$(document).ready(() => {
    
    const canvas = $('#canvas')[0];
    const ctx = canvas.getContext("2d");

    canvas.width = $('.input-box').width() * 0.6;
    canvas.height = $('body').height() * 0.5;

    $(window).resize(function () { 
       canvas.width = $('.input-box').width()* 0.6;
       canvas.height = $('body').height() * 0.5;
    });
   
    let painting = false;

    const draw = (e) => {

        if(!painting){
            return;
        }

        ctx.lineWidth = 10;
        ctx.lineCap='round'
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke(); 
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    canvas.addEventListener('mousedown', (e) => {
        painting = true;
        draw(e);
    })

    canvas.addEventListener('mouseup', () => {
        painting = false;
        ctx.beginPath();
        
    })

    canvas.addEventListener('mousemove', (e) => {
        draw(e);
    })


    
    
})

