
let tombol = document.querySelector(".tombol");

let sansan = document.querySelector(".header");
let content = document.querySelector(".content");
let footer = document.querySelector(".footer");
let home = document.querySelector(".Home");


let sansannya = document.querySelector(".matahari");
let liguwejhsan = document.querySelector(".SANSAN");


let libantuan = document.querySelector(".libantuan");
let liberanda = document.querySelector(".liberanda");

let icontelpon = document.querySelector(".somting");
let iconrumah = document.querySelector(".lirumah");




liguwejhsan.addEventListener("click", () => {
    liguwejhsan.style.animation = "tombolgerak 0.6s ease-out";
    sansannya.style.animation = "putarsansan 0.6s ease-out";
});

liguwejhsan.addEventListener("animationend", () => {
    liguwejhsan.style.animation = "";
    sansannya.style.animation = "";
});




libantuan.addEventListener("click", () => {

    libantuan.style.animation = "tombolgerak 0.6s ease-out";
    icontelpon.style.animation = "putaricontol 0.6s ease-in";
});
libantuan.addEventListener("animationend", () => {
    libantuan.style.animation = "";
    icontelpon.style.animation = "";


});




liberanda.addEventListener("click", () => {

    liberanda.style.animation = "tombolgerak 0.6s ease-out";
    iconrumah.style.animation = "putariconhom 0.6s ease-in";
});
liberanda.addEventListener("animationend", () => {
    liberanda.style.animation = "";
    iconrumah.style.animation = "";


});








function sansanalert() {

    home.style.backgroundColor = "antiquewhite";
    sansan.style.backgroundSize = "50%";
    sansan.style.transform = "rotate(0deg)";
    sansan.style.opacity = "1";
    sansan.innerHTML = "KETEMU";

    content.innerText = "SEKEPING ANAK MATAHARI KETEMU";
    content.style.color = "rgb(172, 130, 14)";
    footer.style.color = "#ffea00";
    footer.innerText = "~~ KAMU JELI BENGAT ~~";
}


function happy() {
    let audio = document.getElementById('happy');
    audio.currentTime = 1;
    audio.play();
}

function hilang() {
    tombol.style.opacity = "0";
    footer.innerHTML = "--> TEMUKAN SANSAN <--";
}

function wrong() {
    let audio = document.getElementById('salah');
    audio.currentTime = 1;
    setTimeout(() => {
        audio.pause();
    }, 1 * 1000);
    audio.play();
}

function mulai() {
    let audio = document.getElementById('backsound');
    audio.play();
}

function stop() {
    let audio = document.getElementById('backsound');
    audio.pause();
}