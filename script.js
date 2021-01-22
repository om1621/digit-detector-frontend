$(document).ready(() => {
    
    const canvas = $('#canvas')[0];
    const ctx = canvas.getContext("2d");
   
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
    });

    canvas.addEventListener('mouseup', () => {
        painting = false;
        ctx.beginPath();
    });

    canvas.addEventListener('mousemove', (e) => {
        draw(e);
    });

    $('#predict').click(function (e) { 
        e.preventDefault();
        const data = canvas.toDataURL();
        $('.output-image').attr('src', data);
        $('.output-image').css('display', 'block');
        
    });

    $('#reset').click(function (e) { 
        e.preventDefault();
        $('.output-image').css('display', 'none');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        
    });


    
    
})

