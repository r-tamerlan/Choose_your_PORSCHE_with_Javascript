let macan = document.getElementById("secim1");
let taycan = document.getElementById("secim2");
let zaman;


if (document.cookie.includes('modalShowed')) {
    clearTimeout(zaman)
} else {
    zaman = setTimeout(function() {
        document.getElementById("btn").click()
        document.cookie = "modalShowed=true"
    }, 1000);
};

taycan.addEventListener("click", function() {
    window.open("car_modif.html", "_self");
});

macan.addEventListener("click", function() {
    window.open("https://www.porsche.com/central-eastern-europe/ru/_azerbaijan_/models/macan/macan-models/macan-gts/", "_self");
})