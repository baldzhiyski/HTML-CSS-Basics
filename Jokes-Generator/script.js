const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click',generateJoke);

generateJoke();

// function generateJoke(){
// config = { 
//     headers:{
//     'Accept' : 'application/json'
//    }
// }

// fetch('https://icanhazdadjoke.com', config)
// .then(res => res.json())
// .then(data => {
//     jokeEl.innerHTML = data.joke;
// });
// }


async function generateJoke(){
    config = { 
        headers:{
        'Accept' : 'application/json'
       }
    }
    
     const responce =  await fetch('https://icanhazdadjoke.com', config);
     const data = await responce.json();

     jokeEl.innerHTML = data.joke
    }