
const jokePra = document.getElementById("joke-pra");
const jokeBtn = document.getElementById("joke-btn");

const getJoke = ()=>{
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
    .then((res)=>res.json())
    .then((res)=>{
        jokePra.innerText = `${res.joke}`;
    });
}

jokeBtn.addEventListener("click", getJoke);