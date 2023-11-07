
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'brown', 'gray', 'black', 'white', 'maroon', 'navy', 'teal', 'olive'];

const changeColor = document.getElementById('changeColor');

changeColor.addEventListener('click', () => {
    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomColor];
});

