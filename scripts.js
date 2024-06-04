document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted successfully!');
    this.submit();
});
