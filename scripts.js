
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'brown', 'gray', 'black', 'white', 'maroon', 'navy', 'teal', 'olive', 'aqua', 'beige', 'coral', 'crimson', 'cyan', 'fuchsia', 'gold', 'indigo', 'ivory', 'khaki', 'lavender', 'lime', 'magenta', 'mint', 'mustard', 'peach', 'peru', 'plum', 'salmon', 'sienna', 'silver', 'skyblue', 'tan', 'tomato', 'turquoise', 'violet', 'wheat', 'yellowgreen', 'darkred', 'darkorange', 'darkgreen', 'darkblue', 'darkviolet', 'darkgray', 'lightgray'];

const changeColor = document.getElementById('changeColor');
const currentColor = document.getElementById('currentColor');

changeColor.addEventListener('click', () => {
    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomColor];
    currentColor.textContent = colors[randomColor];
});
