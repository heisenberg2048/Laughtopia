
const button = document.querySelector('#jokebtn')
const jokedis = document.querySelector('#jokedis')
button.addEventListener("click", async () => {
    console.log("clicked");
    const config = {
        headers: {
            accept: 'application/json'
        }
    }
    await axios.get("https://icanhazdadjoke.com/", config)
        .then(res => {
            const jokes = res.data.joke;
            jokedis.innerHTML=jokes;
        })
}
)





