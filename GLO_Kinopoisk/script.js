const searchForm = document.querySelector('#search-form');
const movie = document.querySelector('#movies'),
    urlPoster = 'https://image.tmdb.org/t/p/w500';

function apiSearch(event) {
    event.preventDefault();
    const searchText = document.querySelector('.form-control').value,
        server = 'https://api.themoviedb.org/3/search/multi?api_key=3b90f467b040d934059e4076c62ee054&language=ru&query=---' + searchText;
    movie.innerHTML = 'Загрузка...';

    fetch(server)
        .then(function(value) {
            return value.json();
        })
        .then(function(output) {

            let inner = '';
            output.results.forEach(function(item) {
                let nameItem = item.name || item.title;
                if (item.poster_path !== null) {
                    inner += `
									<div class='col-12 col-md-4 col-xl-3 item'> 
									<img src='${urlPoster + item.poster_path}' alt='${nameItem}'>
									<h5>${nameItem}</h5>
									</div>
										`;
                }

            });

            movie.innerHTML = inner;
        })
        .catch(function(reason) {
            movie.innerHTML = 'Упс,что-то пошло не так';
            console.log('error: ' + reason.status);
        });
}

searchForm.addEventListener('submit', apiSearch);