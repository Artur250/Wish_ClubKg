const gallery = document.getElementById('gallery');


const images = [];
for(let i=1; i<=44; i++){ 
    images.push(`./galery_image/${i}.jpg`);
 
}


images.forEach((src, index) => {
    const div = document.createElement('div');
    div.classList.add('gallery_item');

    const img = document.createElement('img');
    img.src = src;
    img.alt = `Фото ${index + 1}`;
    img.loading = 'lazy';

    div.appendChild(img);
    gallery.appendChild(div);

   
    div.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = src;
    });
});


const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox_img');
const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});


lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox){
        lightbox.style.display = 'none';
    }
});
