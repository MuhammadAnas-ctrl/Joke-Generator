
const jokes = document.getElementById("jokes")
const btn = document.getElementById("button")
const Api = "https://icanhazdadjoke.com/";
// const Api = "https://api.api-ninjas.com/v1/jokes";



async function generateJoke(){
    const res = await fetch(Api ,{
        headers:{
            'accept': 'application/json',
        }
    })
    const data = await res.json();

    jokes.innerText = data.joke;
}
generateJoke();

btn.addEventListener("click" , ()=>{
    generateJoke();
})