const gallery = document.getElementById('gallery');
let page = 1;
const limit = 10;
const url = `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`;

function loadImages() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.forEach(photo => {
                const img = document.createElement('img');
                img.src = photo.url;
                gallery.appendChild(img);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        page++;
        loadImages();
    }
});

// Initial load
loadImages();
