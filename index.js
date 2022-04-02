const url = "https://www.reddit.com/r/place/"
const x_offset = 1750;
const y_offset = 430;

const c = document.getElementById('content');
const ctx = c.getContext('2d');
const image = document.getElementById('source');

image.addEventListener('load', e => {
  ctx.drawImage(image, 0, 0);
});

function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    return {x: x, y:y}
}

const canvas = document.querySelector('canvas')
canvas.addEventListener('mousedown', function(e) {
    const position = getCursorPosition(canvas, e)
    const x = Math.floor(position.x*99/1158) + x_offset;
    const y = Math.floor(position.y*99/1158) + y_offset;

    console.log(x,y);
    window.open(url+"?px=30"+"&cx="+x+"&cy="+y, '_blank').focus();
})
