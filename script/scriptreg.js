const form = document.getElementById("regForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
    })
    .then(response => {
        if(response.ok) {
          form.style.display="none";
          successMessage.style.display="block";
          form.reset()
        } else {
            alert("Oops! There was a problem submitting your form.");
        }
    })
    .catch(error => {
        alert("Oops! There was a problem submitting your form.");
    });
});
