function nextMeme(){
    //Modify the src attribute of the image with the ID "myImage"
    let n = Array("images/memes/1.jpg", "images/memes/2.jpg", "images/memes/3.jpg")
    let b = document.getElementById("meme").src
    console.log(b)
    var a = [];
    n.forEach(function(p){
        if(!(p === b)){
            a.push(p);
        }
    });
    let randomElemt = a[Math.floor(Math.random()*a.length)]
    document.getElementById("meme").src = randomElemt;
}