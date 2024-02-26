const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let penColor = '#000000'; // Default color

canvas.addEventListener('mousedown', e => {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
});

canvas.addEventListener('mousemove', e => {
    if (isDrawing) {
        ctx.strokeStyle = penColor;
        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.stroke();
    }
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

document.getElementById('colorPicker').addEventListener('input', (e) => {
    penColor = e.target.value;
});

document.getElementById('saveBtn').addEventListener('click', () => {
    const image = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = image;
    a.download = 'drawing.png';
    a.click();
});

document.getElementById('saveLeah').addEventListener('click', () => {
    const image = canvas.toDataURL('image/png');
    document.getElementById('leahImage').src = image;
});

document.getElementById('saveMaverick').addEventListener('click', () => {
    const image = canvas.toDataURL('image/png');
    document.getElementById('maverickImage').src = image;
});

document.getElementById('clearCanvas').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
