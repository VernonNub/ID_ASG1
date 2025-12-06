var shopItems = document.getElementsByClassName("merch")
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
    const albums = ["2026SeasonGreeting", 
                    "FoundAtEight", 
                    "FlowerBookmark3KeyRing", 
                    "MemoryOfTheWinning", 
                    "FlowerBookmark3Set", ];


    localStorage.setItem("chosenMerch", albums[num]);
}