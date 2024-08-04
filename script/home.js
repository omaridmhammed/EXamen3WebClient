document.addEventListener('DOMContentLoaded', function() {
    const aboutImage = document.getElementById('aboutImage');
    const header = document.querySelector('header');
    const stickyOffset = header.offsetTop;

    // Gestion de l'image au survol
    aboutImage.addEventListener('mouseover', function() {
        aboutImage.src = '../images/ma.jpg'; // Remplacez par le chemin de l'image du drapeau marocain
    });

    aboutImage.addEventListener('mouseout', function() {
        aboutImage.src = '../images/aboutus.webp'; // Retour à l'image originale
    });

 
    });
