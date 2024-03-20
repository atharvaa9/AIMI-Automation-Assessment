const IMG_SELECTOR = '.image-box img';
const lazyLoadInstance = new lazyLoadLib(IMG_SELECTOR);
const selectedImages = [];

document.addEventListener('change', (event) => {
    const checkbox = event.target;

    if (checkbox.matches('.image-box input[type="checkbox"]')) {
        const imageBox = checkbox.closest('.image-box');

        if (checkbox.checked) {
            selectedImages.push(imageBox.dataset.id);  
        } else {
            const index = selectedImages.indexOf(imageBox.dataset.id);
            selectedImages.splice(index, 1);
        }
    }
});