function nextMeme(){
    //Modify the src attribute of the image with the ID "myImage"
    let a = Array("images/memes/1.jpg", "images/memes/2.jpg", "images/memes/3.jpg")
    let randomElemt = a[Math.floor(Math.random()*a.length)]
    document.getElementById("meme").src = randomElemt;
}