const searchInput = document.querySelector(".search-input");
const listMovies = document.querySelector(".results");

searchInput.addEventListener("input", listMoviesFn);

async function listMoviesFn(e){
 let filmTitle = e.target.value;
 let data = await fetch("./js/mock-data.json");
 let dataMovies = await data.json();

 let moviesSearched = dataMovies.filter(film => {
     let regex = new RegExp(filmTitle, 'gi');
     return film.title.match(regex);
 });

 if(filmTitle.length == 0)
 displayMovies([]);
 else
 displayMovies(moviesSearched);

}

function displayMovies(movies){
    listMovies.innerHTML = "";
    movies.map(el => {
        let t = document.createElement("li");
        t.innerHTML = el.title;
        listMovies.appendChild(t);
    })
}