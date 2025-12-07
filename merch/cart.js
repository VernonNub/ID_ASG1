//Merch details to be retrieved for loading
const merchDetails =
{
    IU2026SeasonGreeting: {
        Title: "IU 2026 Season's Greetings", 
        SubTitle: "$90.00",
        Description: "Release Date: 23/12/2025",
        MerchImage: "media/merch/iu_merch_2026_season's_greeting.png",
    },

    FlowerBookmark3KeyRing: {
        Title: "IU Flower Bookmark 3:CDP Mini Keyring", 
        SubTitle: "$45.00",
        Description: "Release Date: unknown",
        MerchImage: "media/merch/iu_merch_flower_bookmark_3_keyring.png",
    },

    FoundAtEight: {
        Title: "IU Found At Eight Pop Up Store List", 
        SubTitle: "$12.50",
        Description: "Release Date: unknown",
        MerchImage: "media/merch/iu_merch_found_at_eight_pop_up.png",
    },

    MemoryOfTheWinning: {
        Title: "IU Memory Of The Winning", 
        SubTitle: "$65.00",
        Description: "Release Date: 11/9/2025",
        MerchImage: "media/merch/iu_merch_memory_of_the_winning.png",
    },

    FlowerBookmark3Set: {
        Title: "IU Flower Bookmark 3 Set", 
        SubTitle: "$27.50",
        Description: "Release Date: 29/5/2025",
        MerchImage: "media/merch/iu_merch_flower_bookmark_3_set.png",
    }
}

//Adding to cart code
var cartAmount = document.getElementById("cart-amount");

var cart = JSON.parse(localStorage.getItem("cart"));

var cartCatalogue = document.getElementById("cart-catalogue");

var priceTag = document.getElementById("total-price-title")

//Loading each item in cart
function loadItem(merchName)
{
    const itemDiv = document.createElement('div');
    itemDiv.setAttribute('class', "cart-item");

    const merchImg = document.createElement("img");
    merchImg.setAttribute("id", "item-image");
    merchImg.setAttribute("src", merchDetails[merchName].MerchImage);
    itemDiv.appendChild(merchImg)

    const itemDesDiv = document.createElement('div');
    itemDiv.appendChild(itemDesDiv)

    const itemTitle = document.createElement('h1');
    itemTitle.setAttribute("id", "item-title");
    itemTitle.innerHTML = merchDetails[merchName].Title;
    itemDesDiv.appendChild(itemTitle)

    const itemPrice = document.createElement('h2');
    itemPrice.setAttribute("id", "item-price");
    itemPrice.innerHTML = merchDetails[merchName].SubTitle;
    itemDesDiv.appendChild(itemPrice)

    const form = document.createElement('form');
    form.setAttribute('id', "quantity");
    itemDiv.appendChild(form);

    const reduceButton = document.createElement("button");
    reduceButton.setAttribute("id", "reduce-quantity");
    reduceButton.setAttribute("type", "button");
    reduceButton.innerHTML = "-";
    form.appendChild(reduceButton)
    reduceButton.addEventListener("click", function()
    {
        changeQuantity(-1, merchName);
    }, false);

    const quantityInput = document.createElement("input");
    quantityInput.setAttribute("type", "numer")
    quantityInput.setAttribute("value", cart[merchName])
    quantityInput.setAttribute("id", merchName)
    quantityInput.setAttribute("class", "amount")
    form.appendChild(quantityInput)

    const increaseButton = document.createElement("button");
    increaseButton.setAttribute("id", "reduce-quantity");
    increaseButton.setAttribute("type", "button");
    increaseButton.innerHTML = "+";
    form.appendChild(increaseButton)
    increaseButton.addEventListener("click", function()
    {
        changeQuantity(1, merchName);
    }, false);

    cartCatalogue.appendChild(itemDiv);
}

for (const merch in cart)
{
    console.log(cart)
    loadItem(merch)
}

if(cart == null)
{
    cart = new Object();
}

UpdateShoppingCart()
UpdatePrice()

function changeQuantity(num, merchName)
{
    cart[merchName] = Number(cart[merchName]) + Number(num);

    if(cart[merchName] == 0)
    {
        console.log(cart[merchName])
        delete cart[merchName];
        console.log(cart)
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    cartCatalogue.innerHTML = "";
        for (const merch in cart)
        {
            loadItem(merch)
        }
    UpdateShoppingCart()
    UpdatePrice()
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

function UpdatePrice()
{
    var price = 0;
    for (let item in cart)
    {
        price += Number(cart[item]) * Number(merchDetails[item].SubTitle.slice(1))
        
    }

    priceTag.innerHTML = "Total Price: " + price.toString()
}

//Personal Details
var email = document.getElementById("email")
var postalCode = document.getElementById("postal-code")
var unitNumber = document.getElementById("unit-number")
var cardNumber = document.getElementById("card-number")
var expiry = document.getElementById("expiry")
var cvv = document.getElementById("cvv")
var purchase = document.getElementById("purchase-button")

purchase.addEventListener("click", purchaseItems, false)

email.value = localStorage.getItem("Email")
postalCode.value = localStorage.getItem("postalCode")
unitNumber.value = localStorage.getItem("unitNumber")
cardNumber.value = localStorage.getItem("cardNumber")
expiry.value = localStorage.getItem("expiry")
cvv.value = localStorage.getItem("cvv")

function purchaseItems()
{
    localStorage.setItem("Email", email.value)
    localStorage.setItem("postalCode", postalCode.value)
    localStorage.setItem("unitNumber", unitNumber.value)
    localStorage.setItem("cardNumber", cardNumber.value)
    localStorage.setItem("expiry", expiry.value)
    localStorage.setItem("cvv", cvv.value)

    cart = new Object();
    localStorage.setItem("cart", JSON.stringify(cart));
    cartCatalogue.innerHTML = "";
        for (const merch in cart)
        {
            loadItem(merch)
        }
        UpdateShoppingCart()
        
    alert("Purchased")
}