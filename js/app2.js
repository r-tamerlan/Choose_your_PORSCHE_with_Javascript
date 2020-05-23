let resimler = new Array("img/white.jfif", "",
    "", "img/red.jfif", "", "", "img/green.jfif");
let wheel = new Array("img/white1.jfif", "img/white2.jfif", "img/white3.jfif",
    "img/red1.jfif", "img/red2.jfif", "img/red3.jfif",
    "img/green1.jfif", "img/green2.jfif", "img/green3.jfif");

let resim = document.getElementById("slayd");
let fon = document.getElementById("fon");
let govde = document.getElementById("gvd");
let reng = document.getElementById("sec1");
let carColor;

function gett(e) {
    fon.src = resimler[e];
    carColor = resimler[e];
}


function teker(x) {
    if (carColor == resimler[6]) {
        fon.src = "img/green" + x + ".jfif"
    }
    if (carColor == resimler[3]) {
        fon.src = "img/red" + x + ".jfif"
    }
    if (carColor == resimler[0]) {
        fon.src = "img/white" + x + ".jfif"
    }

}