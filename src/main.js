import { getPhotos } from './js/pixabay-api';
import { renderGalleryMarkup } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const searchForm = document.querySelector('.search-form'); // Форма пошуку
const galleryElement = document.querySelector('.gallery'); // Контейнер для галереї
const loaderElement = document.querySelector('.loader'); // Індикатор завантаження


searchForm.addEventListener('submit', event => {
  event.preventDefault(); 

  // Отримуємо текст запиту з поля введення та прибираємо зайві пробіли
  const searchQuery = document.querySelector('#search-box').value.trim();

  // Перевіряємо, чи введено запит
  if (searchQuery === '') {
    iziToast.error({
      message: 'Please enter a search query!',
      position: 'topRight',
      timeout: 3000,
    });
    return;
  }

  // Показуємо індикатор завантаження
  loaderElement.style.display = 'block';

  // Викликаємо функцію getPhotos для отримання зображень за запитом
  getPhotos(searchQuery)
    .then(images => {
      galleryElement.innerHTML = ''; // Очищаємо галерею перед новим завантаженням

      // Перевіряємо, чи знайдено зображення
      if (images.length === 0) {
        // Якщо немає зображень, показуємо повідомлення
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          timeout: 3000,
        });
        return; // Виходимо з функції
      }
      // Відображаємо отримані зображення в галереї
      galleryElement.innerHTML = renderGalleryMarkup(images); 
      lightbox.refresh(); // Оновлюємо Lightbox для нових зображень
    })
    .catch(() => {
      // У випадку помилки показуємо повідомлення
      iziToast.error({
        message: 'Sorry, something went wrong. Please try again!',
        position: 'topRight',
        timeout: 3000,
      });
    })
    .finally(() => {
      // Сховуємо індикатор завантаження в будь-якому випадку
      loaderElement.style.display = 'none'; 
    });
}); 