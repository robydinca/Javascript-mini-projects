const colors = ['red', 'green', 'blue', 'pink', 'yellow', 'orange', 'purple', 'brown', 'black', 'white', 'gray', 'cyan', 'magenta', 'lime', 'olive', 'navy', 'teal', 'maroon', 'silver', 'gold', 'coral', 'salmon', 'tan', 'khaki', 'plum', 'orchid', 'azure', 'beige', 'lavender', 'mint', 'ivory', 'indigo', 'violet', 'turquoise', 'chocolate', 'tomato', 'snow', 'wheat', 'sienna', 'peru', 'papayaWhip', 'paleVioletRed', 'paleTurquoise', 'paleGreen', 'paleGoldenRo'];

const button = document.getElementById('btn');

const color = document.querySelector('.color');

button.addEventListener('click', function () {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}