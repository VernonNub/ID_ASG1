//Merch details to be retrieved for loading
const merchDetails =
{
    IU2026SeasonGreeting: {
        Title: "IU 2026 Season's Greetings", 
        SubTitle: "$90.00",
        Description: "Release Date: 23/12/2025",
        MerchImage: "../media/merch/iu_merch_2026_season's_greeting.png",
        Code: "000001"
    },

    FlowerBookmark3KeyRing: {
        Title: "IU Flower Bookmark 3:CDP Mini Keyring", 
        SubTitle: "$45.00",
        Description: "Release Date: unknown",
        MerchImage: "../media/merch/iu_merch_flower_bookmark_3_keyring.png",
        Code: "000002"
    }
}

var merch2Load = localStorage.getItem("chosenMerch");

//Loading of Page
function LoadAlbumInformation(merch)
{
    //Finding objects in the DOM
    let Tags = 
    {
        TitleTag: document.getElementById("title"),
        SubtitleTag: document.getElementById("price"),
        DescriptionTag: document.getElementById("information"),
        ImageTag: document.getElementById("merch-image"),
    }

    //Changing Values based on the merch
    Tags.TitleTag.innerHTML = merchDetails[merch].Title;
    Tags.SubtitleTag.innerHTML = merchDetails[merch].SubTitle;
    Tags.DescriptionTag.innerHTML = merchDetails[merch].Description;
    Tags.ImageTag.src = merchDetails[merch].MerchImage;
}

LoadAlbumInformation(merch2Load)


//Adding to cart code
var reduceButton = document.getElementById("reduce-quantity");
var increaseButton = document.getElementById("increase-quantity");
var quantity = document.getElementById("amount");
var submit = document.getElementById("add-to-cart");

var cartAmount = document.getElementById("cart-amount")

var cart = JSON.parse(localStorage.getItem("cart"));

if(cart == null)
{
    cart = new Object();
}

console.log(cart)
UpdateShoppingCart()

reduceButton.addEventListener("click", function()
{
    changeQuantity(-1);
}, false);

increaseButton.addEventListener("click", function()
{
    changeQuantity(1);
}, false);

submit.addEventListener("click", AddItemsToCart, false)

reduceButton.disabled = true;

function changeQuantity(num)
{
    quantity.value = Number(quantity.value) + Number(num);

    if(quantity.value == 1)
    {
        reduceButton.disabled = true;
    }
    else
    {
        reduceButton.disabled = false;
    }
}

function AddItemsToCart()
{

    if(cart[merch2Load] == null)
    {
        cart[merch2Load] = Number(quantity.value);
    }
    else
    {
        cart[merch2Load] = Number(cart[merch2Load]) + Number(quantity.value);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Items Added to Cart!")
}

function UpdateShoppingCart()
{
    var cartSize = 0;
    for (let item in cart)
    {
        cartSize += Number(cart[item]);
    }

    cartAmount.innerHTML = cartSize
}