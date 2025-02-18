let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

// Aktif menü bağlantısını belirleme fonksiyonu
function updateActiveLink() {
    let top = window.scrollY;

    sections.forEach((sec) => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => link.classList.remove("active"));
            document.querySelector(`header nav a[href="#${id}"]`)?.classList.add("active");
        }
    });
}

// Sayfa kaydırıldığında aktif bağlantıyı güncelle
window.addEventListener("scroll", updateActiveLink);

// Sayfa yüklendiğinde URL'deki hash'i kontrol edip aktif bağlantıyı ayarla
window.addEventListener("load", () => {
    if (window.location.hash) {
        let targetId = window.location.hash.substring(1); // # işaretini kaldır
        let targetLink = document.querySelector(`header nav a[href="#${targetId}"]`);
        
        if (targetLink) {
            navLinks.forEach((link) => link.classList.remove("active"));
            targetLink.classList.add("active");
        }
    }
});

// Menüden bir öğeye tıklandığında aktif sınıfını değiştir
navLinks.forEach((link) => {
    link.addEventListener("click", function () {
        navLinks.forEach((nav) => nav.classList.remove("active"));
        this.classList.add("active");

        // Mobil menüyü kapat
        navbar.classList.remove("active");
        menuIcon.classList.remove("bx-x");
    });
});
