console.log("Let's get this party started!");
const input = document.querySelector("#txtInput");
const search = document.querySelector("#search");
const remove = document.querySelector("#remove");
const div = document.querySelector("#gifs");

search.addEventListener("click", (e) => {
    e.preventDefault();
    DisplayGif(input.value);
});

remove.addEventListener("click", (e) => {
    e.preventDefault();
    div.innerHTML = "";
});


async function getGifUrl(term) {

    const randomIdx = Math.floor(Math.random() * 50);
    const res = await axios.get('http://api.giphy.com/v1/gifs/search', { params: { api_key: "nn6fqIXvbPAScAClArHzmFGi1oDNCksl", q: term } });
    console.log(res);
    return res.data.data[randomIdx].images.original.url;
}

async function DisplayGif(term) {
    input.value = "";
    const img = document.createElement('img');
    img.src = await getGifUrl(term);
    div.append(img);
}
