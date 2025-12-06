var submitbutton = document.getElementById("submit-button");

submitbutton.addEventListener("click", submitDetails, false)

function submitDetails()
{
    localStorage.setItem("Email", document.getElementById("email-input").value)
    localStorage.setItem("PhoneNumber", document.getElementById("phonenumber-input").value)

    window.alert("Submitted Successfully")
}

var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});