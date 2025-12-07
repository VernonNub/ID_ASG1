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

function UpdateShoppingCart()
{
    var cartSize = 0;
    for (let item in cart)
    {
        cartSize += Number(cart[item]);
    }

    cartAmount.innerHTML = cartSize
}