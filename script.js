/// Rendre les changements JS selon la taille de l'élément possibles
// Fonction pour gérer les changements de taille de l'élément HTML
function handleHtmlResize() {
    // Obtenez la largeur de l'élément HTML
    const htmlWidth = document.documentElement.clientWidth;

    // Sélectionnez l'élément CGU par son ID
    let CGU = document.getElementById("CGU");

    // Vérifiez la nouvelle largeur et changez le texte en conséquence
    if (htmlWidth < 1000) {
        CGU.querySelector("a").textContent = "CGU";
    } else {
        CGU.querySelector("a").textContent = "CONDITIONS GÉNÉRALES D'UTILISATION";
    }
}
  // Attachez un gestionnaire d'événements resize à la fenêtre
window.addEventListener("resize", handleHtmlResize);

  // Appelez la fonction pour gérer la taille initiale
handleHtmlResize();

/// Rendre les changements JS selon la taille de l'élément possibles
// Fonction pour gérer les changements de taille de l'élément HTML
function handleHtmlResizeBis() {
    // Obtenez la largeur de l'élément HTML
    const htmlWidth = document.documentElement.clientWidth;

    // Sélectionnez l'élément CGU par son ID
    let Auteur = document.getElementById("Auteur");

    // Vérifiez la nouvelle largeur et changez le texte en conséquence
    if (htmlWidth < 1000) {
        Auteur.querySelector("a").textContent = "D.H © 2023";
    } else {
        Auteur.querySelector("a").textContent = "Fait par D.H © 2023";
    }
}
  // Attachez un gestionnaire d'événements resize à la fenêtre
window.addEventListener("resize", handleHtmlResizeBis);

  // Appelez la fonction pour gérer la taille initiale
handleHtmlResizeBis();

////////////////////////////////////////////////////////////////////////////////////////
/// Tentative Bouton Fullscreen [à revoir]
// Définir la variable isSticky en dehors de l'événement DOMContentLoaded
let isSticky = true;

function toggleSticky() {
    const iframeContainer = document.querySelector('.iframe-container');
    const divToToggle = document.querySelector('.input-group');

    if (iframeContainer) {
        if (isSticky) {
            iframeContainer.style.position = 'static';
            divToToggle.style.display = 'none';
            isSticky = false;
        } else {
            iframeContainer.style.position = 'sticky';
            divToToggle.style.display = 'flex';
            isSticky = true;
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('button#toggle-sticky');
    toggleButton.addEventListener('click', toggleSticky);
});
////////////////////////////////////////////////////////////////////////////////////

