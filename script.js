// Booking Form Validation

const form = document.getElementById("bookingForm");
const successMessage = document.getElementById("successMessage");

if(form){
    form.addEventListener("submit", function(e){
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const packageSelected = document.getElementById("package").value;
        const date = document.getElementById("date").value;

        if(name === "" || email === "" || phone === "" || packageSelected === "" || date === ""){
            alert("Please fill all required fields!");
            return;
        }

        successMessage.style.display = "block";
        form.reset();
    });
}
