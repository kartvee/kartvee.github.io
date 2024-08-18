document.addEventListener('DOMContentLoaded', function () {
    const paymentForm = document.getElementById('payment-form');
    const thankYouMessage = document.getElementById('thank-you');

    paymentForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Hide the payment form
        paymentForm.style.display = 'none';

        // Show thank you message
        thankYouMessage.style.display = 'block';

        // Hide the thank you message after 3 seconds
        setTimeout(() => {
            thankYouMessage.style.display = 'none';
        }, 3000);
    });
});
