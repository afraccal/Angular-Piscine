
function reveal(){
    document.querySelector("#Testo").innerHTML="Paolino Paperino"
}

function changeimg(){
    document.querySelector("#Img").src="https://www.topolino.it/wp-content/uploads/2019/11/croppedimage318436-topolinointera_360.png"
}

function duplicate(){
    let carding = document.getElementById("gerry");
    let clone = carding.cloneNode(true);
    document.querySelector("body").appendChild(clone);
}