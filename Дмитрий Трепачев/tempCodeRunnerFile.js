function playerOne(arr) {
    arr.forEach(function(elem) {
        elem.style.cursor = 'pointer';
        elem.addEventListener('click', function() {
            this.classList.add('crest');
        });
    });
}