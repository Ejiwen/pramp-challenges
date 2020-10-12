const inputElm = document.querySelector(".search-input");
const listMovies = document.querySelector(".results");

inputElm.addEventListener("input", displayMovies);

async function displayMovies(e){
 let movieTitle = e.target.value;
 let dataMovies = await searchData(movieTitle);
 
 if(movieTitle.length > 0) {
    listMovies.innerHTML = "";
    dataMovies.map( film => {
        let el = document.createElement("li");
        el.innerHTML = film.title;
        listMovies.appendChild(el);
    })
 } else {
     listMovies.innerHTML = "";
 }
 
}