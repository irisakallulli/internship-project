document.addEventListener('DOMContentLoaded', function () {
    const products = [
        { name: 'Product 1', price: '$19.99' },
        { name: 'Product 2', price: '$24.99' },
        { name: 'Product 3', price: '$29.99' },
        { name: 'Product 4', price: '$29.99' },
        { name: 'Product 5', price: '$29.99' }
    ];

    const slidesContainer = document.querySelector('.glide__slides');
    if (!slidesContainer) {
        console.error("Carousel container not found!");
        return; // Exit if the required element isn't found
    }

    // Clear existing slides (if any) before adding new ones
    slidesContainer.innerHTML = '';

    // Append new slides dynamically
    products.forEach(product => {
        const slideHTML = `
            <li class="glide__slide">
                <img src="https://via.placeholder.com/200x200" alt="${product.name}" class="img-fluid"> <!-- Responsive images -->
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                </div>
            </li>
        `;
        slidesContainer.innerHTML += slideHTML;
    });

    // Initialize Glide carousel with responsive settings
    const glide = new Glide('.glide', {
        type: 'carousel',
        perView: 3,
        gap: 20,
        autoplay: 3000,
        breakpoints: {
            768: {
                perView: 1
            },
            1024: {
                perView: 2
            }
        },
        navigation: {
            prevEl: '.glide__arrow--left',
            nextEl: '.glide__arrow--right'
        }
    });

    glide.mount(); // Mount the Glide carousel
});
