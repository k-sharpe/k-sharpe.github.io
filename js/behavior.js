function nextMeme(){
    //Modify the src attribute of the image with the ID "myImage"
    let list = Array("images/memes/1.jpg", "images/memes/2.jpg", "images/memes/3.jpg")
    let randomElemt = song[list.floor(Math.random()*list.length)]
    document.getElementById("meme").src = randomElemt;
}