let textnyah = document.getElementById('textguweh');
let media = window.matchMedia("(max-width : 476px)");

// // Membuat fungsi untuk mengganti text
function gantiText(media) {
    // Jika ukuran layar kurang dari atau sama dengan 475px
    textnyah.style.animation = "fadetext 0.8s infinite ease-in-out both";
    if (media.matches) {
        textnyah.style.animation = "fadetext running 0.8s infinite ease-in-out both";
        // Mengganti text "sansan" menjadi "samting"
        setTimeout(() => {
            textnyah.innerText = "samting";
            textnyah.style.animation = "fadetext paused";
        }, 1000);
    } else {
        textnyah.style.animation = "fadetext running 0.8s infinite ease-in-out both";
        // Mengembalikan text "sansan"
        setTimeout(() => {
            textnyah.innerText = "sansan";
            textnyah.style.animation = "fadetext paused";
        }, 1000);
    }
}
// // Memanggil fungsi saat halaman dimuat
window.addEventListener("load", () => {
    gantiText(media);
});

window.addEventListener("resize", () => {
    gantiText(media);
});

// Memanggil fungsi saat ukuran layar berubah