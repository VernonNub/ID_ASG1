var submitbutton = document.getElementById("newsletter-submit-button");

submitbutton.addEventListener("click", submitDetails, false)

function submitDetails()
{
    if (document.getElementById("email-input").value.includes("@"))
    {
        localStorage.setItem("Email", document.getElementById("email-input").value)
        localStorage.setItem("PhoneNumber", document.getElementById("phonenumber-input").value)
        window.alert("Signed Up!")
    }
    else
    {
        alert("Email needs to conatin \"@\" character")
    }
}

var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});

function setMerch(merchName)
{
    localStorage.setItem("chosenMerch", merchName)
}