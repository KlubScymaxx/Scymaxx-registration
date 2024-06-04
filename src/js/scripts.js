document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Confirmation alert
        const confirmation = confirm('Do you want to submit the form?');
        if (confirmation) {
            // Success message animation
            const successMessage = document.createElement('div');
            successMessage.innerText = 'Form submitted successfully!';
            successMessage.style.position = 'fixed';
            successMessage.style.top = '20px';
            successMessage.style.right = '20px';
            successMessage.style.backgroundColor = '#28a745';
            successMessage.style.color = '#fff';
            successMessage.style.padding = '10px 20px';
            successMessage.style.borderRadius = '5px';
            successMessage.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.1)';
            successMessage.style.opacity = '0';
            successMessage.style.transition = 'opacity 0.5s ease';
            document.body.appendChild(successMessage);

            setTimeout(() => {
                successMessage.style.opacity = '1';
            }, 100);

            setTimeout(() => {
                successMessage.style.opacity = '0';
                setTimeout(() => document.body.removeChild(successMessage), 500);
            }, 3000);

            form.submit();
        }
    });
});
