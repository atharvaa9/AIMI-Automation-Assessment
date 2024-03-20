document.addEventListener('DOMContentLoaded', function() {
    var lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));
  
    if ('IntersectionObserver' in window) {
      let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove('lazy');
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });
  
      lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        var lazyLoadFallback = function() {
          lazyImages.forEach(function(lazyImage) {
            if (isInViewport(lazyImage)) {
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.classList.remove('lazy');
            }
          });
        };
      
        window.addEventListener('scroll', lazyLoadFallback);
        window.addEventListener('resize', lazyLoadFallback);
      
        // Function to check if an element is within the viewport
        function isInViewport(element) {
          var rect = element.getBoundingClientRect();
          return (
            rect.bottom >= 0 &&
            rect.right >= 0 &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth)
          );
        }
      
        // Initially call the fallback function to load images in viewport
        lazyLoadFallback();
      }
      
});