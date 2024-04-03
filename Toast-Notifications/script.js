const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'Stay positive and keep smiling!',
    'Dream big and work hard.',
    'Be kind to yourself and others.',
    'Embrace change with courage.',
    'Focus on progress, not perfection.',
    'You are capable of amazing things.',
    'Make today amazing!',
    'Chase your dreams fearlessly.',
    'Believe in yourself.',
    'Seize the day!'
];

const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffa500', '#800080', '#008000', '#000080'];

button.addEventListener('click', () => createNotification());

function createNotification() {
    const notif = document.createElement('div');
    notif.classList.add('toast');

    
    const randomMessage = getRandomMessage();
    const randomColor = getRandomColor();

    notif.innerText = randomMessage;
    notif.style.color = randomColor;

    toasts.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}
