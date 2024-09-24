// Get references to the button and the form
const openFormButton = document.getElementById('openFormButton');
const myForm = document.getElementById('myForm');

// Add an event listener to the button
openFormButton.addEventListener('click', () => {
    // Toggle the form's visibility
    myForm.style.display = myForm.style.display === 'none' ? 'block' : 'none';
});
