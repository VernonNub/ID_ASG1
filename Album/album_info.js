//Albums details to be retrieved for loading
const albumDetails =
{
    TheWinning: {
        Title: "The Winning", 
        SubTitle: "Published in 20 February 2024",
        Description: "After the release of Lilac, IU began working on her next album. In February 2023, she said that the album would be about the feeling of wandering, but later in September she stated that the direction of the project had significantly changed and that the album's main theme would be desire. IU appeared on BTS member Suga's talk show Suchwita in December 2023, where she hinted that her then-upcoming EP would contain songs about her age.",
        AlbumCover: "../media/album/2024_feb20_album_the_winning.png",
        YoutubeLink: "https://youtube.com/playlist?list=OLAK5uy_ktANn0k1_4PGcE_cz8KiHtNfzR1cX_osM&si=Ghvs_4XD8OYH_o-l",
        SpotifyLink: "https://open.spotify.com/album/08CvAj58nVMpq1Nw7T6maj?si=Uk54ter3SqadkI-sChttwA",
        AppleLink: "https://music.apple.com/us/album/the-winning-ep/1731352613",
        YoutubeEm: "https://www.youtube.com/embed/videoseries?si=PDCqpdp8bhV_EwPg&amp;list=OLAK5uy_ktANn0k1_4PGcE_cz8KiHtNfzR1cX_osM",
        SpotifyEm: "https://open.spotify.com/embed/album/08CvAj58nVMpq1Nw7T6maj?utm_source=generator",
        AppleEm: "https://embed.music.apple.com/us/album/the-winning-ep/1731352613",
        BackgroundColor: "#9f7326"
    },

    Lilac: {
        Title: "Lilac", 
        SubTitle: "Published in 25 March 2021",
        Description: "Of the 10 tracks, IU served as the sole lyricist on eight tracks, two being co-written with Dean and Lee Chan-hyuk. Although the original plan was to include six songs written by her and six by other composers, she is only credited as co-composer on \"Celebrity\" and \"Coin\". While working on the album, IU revealed in an interview with W Korea that she did not feel the need to include a self-composed song, instead deciding to cut them as their calmer sound did not fit the tone of the rest of the record. She revealed that she wanted to make an album that was enjoyable and, at the same time, told stories, aiming to \"put on a show that, above all, entertains.\" She compared Lilac to a blockbuster rather than an independent film, concluding, \"I wanted to make my world, which has always been small and safe, bigger and wider, even if it was a little risky.\"",
        AlbumCover: "../media/album/2021_mar25_album_lilac.png",
        YoutubeLink: "https://youtube.com/playlist?list=OLAK5uy_kwlUEAcLsCI8lk6V12fyd299NrWKlCSXA&si=naSrugF-jd4UgzmY",
        SpotifyLink: "https://open.spotify.com/album/01dPJcwyht77brL4JQiR8R?si=kXSWqZpeTS6pO-JyH719oQ",
        AppleLink: "https://music.apple.com/us/album/iu-5th-album-lilac/1560113132",
        YoutubeEm: "https://www.youtube.com/embed/videoseries?si=SkbjwOPMbEIWTTPZ&amp;list=OLAK5uy_kwlUEAcLsCI8lk6V12fyd299NrWKlCSXA",
        SpotifyEm: "https://open.spotify.com/embed/album/01dPJcwyht77brL4JQiR8R?utm_source=generator",
        AppleEm: "https://embed.music.apple.com/us/album/iu-5th-album-lilac/1560113132",
        BackgroundColor: "#21012b",
    },
}

var album2Load = localStorage.getItem("chosenAlbum");

//Loading of Page
function LoadAlbumInformation(album)
{
    //Finding objects in the DOM
    let Tags = 
    {
        TitleTag: document.getElementById("album-title"),
        SubtitleTag: document.getElementById("album-subtitle"),
        DescriptionTag: document.getElementById("album-description"),
        ImageTag: document.getElementById("album-cover"),
        YoutubeLinkTag: document.getElementById("album-youtube-link"),
        SpotifyLinkTag: document.getElementById("album-spotify-link"),
        AppleLinkTag: document.getElementById("album-apple-link"),
        SpotifyEmTag: document.getElementById("album-spotify-embbed"),
        YoutubeEmTag: document.getElementById("album-youtube-embbed"),
        AppleEmTag: document.getElementById("album-apple-embbed"),
        BackgroundTag: document.getElementsByClassName("main-content")
    }

    //Changing Values based on the album
    Tags.TitleTag.innerHTML = merchDetails[album].Title;
    Tags.SubtitleTag.innerHTML = merchDetails[album].SubTitle;
    Tags.DescriptionTag.innerHTML = merchDetails[album].Description;
    Tags.ImageTag.src = merchDetails[album].AlbumCover;
    Tags.YoutubeLinkTag.href = merchDetails[album].YoutubeLink;
    Tags.SpotifyLinkTag.href = merchDetails[album].SpotifyLink;
    Tags.AppleLinkTag.href = merchDetails[album].AppleLink;
    Tags.SpotifyEmTag.src = merchDetails[album].SpotifyEm;
    Tags.YoutubeEmTag.src = merchDetails[album].YoutubeEm;
    Tags.AppleEmTag.src = merchDetails[album].AppleEm;
    Tags.BackgroundTag[0].style.backgroundColor = merchDetails[album].BackgroundColor;
}

LoadAlbumInformation(album2Load)