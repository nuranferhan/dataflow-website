let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

// Aktif menü öğesini güncelleyen fonksiyon
function updateActiveLink() {
    let top = window.scrollY;

    sections.forEach((sec) => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => link.classList.remove("active"));
            let activeLink = document.querySelector(`header nav a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
}

// Sayfa kaydırıldığında aktif bağlantıyı güncelle
window.addEventListener("scroll", updateActiveLink);

// Sayfa yüklendiğinde URL'deki hash'i kontrol edip aktif bağlantıyı ayarla
window.addEventListener("load", () => {
    updateActiveLink(); // İlk yüklemede hangi bölümdeysek onu işaretle
});

// Menü öğesine tıklanınca aktif bağlantıyı ayarla
navLinks.forEach((link) => {
    link.addEventListener("click", function () {
        navLinks.forEach((nav) => nav.classList.remove("active"));
        this.classList.add("active");

        // Mobil menüyü kapat
        navbar.classList.remove("active");
        menuIcon.classList.remove("bx-x");
    });
});
