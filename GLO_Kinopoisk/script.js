const searchForm = document.querySelector('#search-form');
const movie = document.querySelector('#movies');

function apiSearch(event) {
    event.preventDefault();
    const searchText = document.querySelector('.form-control').value,
        server = 'https://api.themoviedb.org/3/search/multi?api_key=3b90f467b040d934059e4076c62ee054&language=ru&query=---' + searchText;

    requestApi(server);
}

searchForm.addEventListener('submit', apiSearch);

function requestApi(url) {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();

    request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) return;

        if (request.status !== 200) {
            console.log('error' + request.status);
            return;
        }
        const output = JSON.parse(request.responseText);
        let inner = '';

        output.results.forEach(function(item) {
            let nameItem = item.name || item.title;
            inner += `<div class='col-sm-1 col-md-3'> ${nameItem}</div>	`;
        });
        movie.innerHTML = inner;
    });






    return url;
}