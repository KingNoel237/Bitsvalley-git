// Select all buy buttons
const buyButtons = document.querySelectorAll('.buy-button');

// Add click event listener to each button
buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Alert the user that the product has been added to the cart
        alert('Product added to cart!');
    });
});