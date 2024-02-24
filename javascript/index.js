function scrollToSection(sectionId) {
    var section = document.querySelector(sectionId);
    var navbarHeight = document.getElementById('navbar').offsetHeight;
    var sectionPosition = section.offsetTop - navbarHeight;
    window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
    });
}

function enviarEmail() {
    var email = document.getElementById('email').value;
    var assunto = "INSCRITO";
    var corpoEmail = "esse usuario está inscriton";

    window.location.href = "mailto:mateusbeltrao2022@gmail.com?subject=" + assunto + "&body=" + corpoEmail;
}