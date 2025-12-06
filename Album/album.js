var albumList = document.getElementsByClassName("album")

for (let i = 0; i < albumList.length; i++)
{
    albumList[i].addEventListener('click', function()
    {
        ChooseAlbum(i);
    } ,false)
}


function ChooseAlbum(num)
{
    console.log(num)
    const albums = ["AFlowerBookmark3", 
                    "TheWinning", 
                    "Lilac", 
                    "Pieces", 
                    "LovePoem", 
                    "AFlowerBookmark2",
                    "Palette", 
                    "Chat-Shire", 
                    "AFlowerBookmark1", 
                    "LastFantasy", 
                    "Real"];


    localStorage.setItem("chosenAlbum", albums[num]);
}