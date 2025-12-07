var albumList = document.getElementsByClassName("album-page-album")

//Create event listener for each image
for (let i = 0; i < albumList.length; i++)
{
    albumList[i].addEventListener('click', function()
    {
        ChooseAlbum(i);
    } ,false)
}

//save chosen album to load in album_info
function ChooseAlbum(num)
{
    console.log(num)
    const albums = ["AFlowerBookmark3", 
                    "TheWinning", 
                    "Lilac", 
                    "Pieces", 
                    "LovePoem", 
                    "AFlowerBookmark2",
                    "Palette"];


    localStorage.setItem("chosenAlbum", albums[num]);
}