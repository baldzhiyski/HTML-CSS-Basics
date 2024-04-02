const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const nameEl = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 3000);

function getData() {
    header.innerHTML = '<img src="image.jpg" alt ="">';
    title.innerHTML = 'My PC Game Setup';
    excerpt.innerHTML = 'Welcome to my game setup! As an avid gamer, I have spent countless hours perfecting my gaming environment to maximize immersion and performance. At the heart of my setup is a high-end gaming PC, boasting top-of-the-line specs that ensure smooth gameplay and stunning graphics.';
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">';
    nameEl.innerHTML = 'Johny Walker';
    date.innerHTML = 'April 02 2024';


    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}