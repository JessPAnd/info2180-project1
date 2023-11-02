/* Add your JavaScript to this file */
// Get the form element
const newsletterForm = document.querySelector('.newsletter form');

// Attach an event listener for form submission
newsletterForm.addEventListener('submit', function(event) 
{
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the email input field and the message element
    const emailInput = document.querySelector('.newsletter input[type="email"]');
    const messageElement = document.querySelector('.newsletter .message');

    /*if the email input field is not empty*/
    if (emailInput.value !== '') 
    {
        // Display a success message with the entered email address
        messageElement.textContent = `Thank you! Your email address ${emailInput.value} has been added to our mailing list!`;
    } 
    else 
    {
        // Display an error message for empty email input
        messageElement.textContent = 'Please enter a valid email address.';
    }
});