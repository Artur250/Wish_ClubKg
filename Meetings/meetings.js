const photoGallery = document.getElementById('photo_gallery');

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox_img');
const closeBtn = document.querySelector('.close');

const photos = [];

for (let i = 1; i <= 19; i++) {
    photos.push(`meetings_image/${i}.jpg`); 
}


photos.forEach((src, index) => {
    const div = document.createElement('div');
    div.classList.add('gallery_item');

    const img = document.createElement('img');
    img.src = src;
    img.alt = `Фото ${index + 1}`;
    img.loading = 'lazy';

    div.appendChild(img);
    photoGallery.appendChild(div);

    div.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = src;
    });
});


closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
});


lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
    }
});
