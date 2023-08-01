
const fetchJoke = async () =>{
    let response = await fetch("https://api.chucknorris.io/jokes/random")
    if(response.status === 200){
        return response.json();
    }else{
        throw new Error (response.status)
    }

}

fetchJoke().catch((error)=>console.log(error));

const getJoke = async ()=>{
    const joke = await fetchJoke();
    console.log(joke.value);
}

getJoke();