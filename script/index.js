var navLinks = document.getElementById("navLinks")

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var aboutSection = document.getElementById('about');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 800) {
        header.classList.add('scrolled');
        aboutSection.style.visibility = 'hidden';
        header.style.backgroundColor = 'rgba(88, 179, 254, 0.7)';
    } else {
        header.classList.remove('scrolled');
        aboutSection.style.visibility = 'visible';
        header.style.backgroundColor = 'transparent';
    }
});


