
function randomImage(){
    imageNumber = Math.floor(Math.random() * (7)+1)
    let changeImgSrc = `public/img/imagen${imageNumber}.jpg`;
    document.getElementById("changeOnClick").src = changeImgSrc;
}
