const inputElm = document.querySelector(".search-input");
const listMovies = document.querySelector(".results");
// console.log(inputElm);

const searchMovieFn = async (e) => {
    let text = e.target.value;
    if(text.length > 0)
    fetchData(text);
    else
    affichList([]);
}

const fetchData = async (dataToSearch) => {

    const data = await fetch('./js/moviesData.json');
    const d = await data.json();

    const dataReg = new RegExp(`^${dataToSearch}`, 'gi');
    let dataBack = d.filter(film => film.title.match(dataReg));

    affichList(dataBack);

}


function affichList(elements) {
    listMovies.innerHTML = '';
    elements.map( el => {
        const liElm = document.createElement('li');
        liElm.innerHTML = el.title;
        listMovies.appendChild(liElm);
    })
   
}

inputElm.addEventListener('input', searchMovieFn);