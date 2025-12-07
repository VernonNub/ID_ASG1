//Loading of cart amount for header
var shopItems = document.getElementsByClassName("merch")
var cartAmount = document.getElementById("cart-amount");
var cart = JSON.parse(localStorage.getItem("cart"));

console.log(shopItems)
for (let i = 0; i < shopItems.length; i++)
{
    shopItems[i].addEventListener('click', function()
    {
        ChooseMerch(i);
    } ,false)
}

//Saving the chosen merch to load in merch details
function ChooseMerch(num)
{
    console.log(num)
    const albums = ["IU2026SeasonGreeting", 
                    "FoundAtEight", 
                    "FlowerBookmark3KeyRing", 
                    "MemoryOfTheWinning", 
                    "FlowerBookmark3Set", ];


    localStorage.setItem("chosenMerch", albums[num]);
}

UpdateShoppingCart()

//Loading of cart amount for header
function UpdateShoppingCart()
{
    var cartSize = 0;
    for (let item in cart)
    {
        cartSize += Number(cart[item]);
    }

    cartAmount.innerHTML = cartSize
}