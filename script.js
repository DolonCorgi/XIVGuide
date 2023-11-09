/// Rendre les changements JS selon la taille de l'élément possibles
// Fonction pour gérer les changements de taille de l'élément HTML
function handleHtmlResize() {
    // Obtenir la largeur de l'élément HTML
    const htmlWidth = document.documentElement.clientWidth;

    // Sélectionner l'élément CGU par son ID
    let CGU = document.getElementById("CGU");

    // Modification du contenu
    if (htmlWidth < 1000) {
        CGU.querySelector("a").textContent = "CGU";
    } else {
        CGU.querySelector("a").textContent = "CONDITIONS GÉNÉRALES D'UTILISATION";
    }
}
  // Gestionnaire d'événements resize attaché à la fenêtre
window.addEventListener("resize", handleHtmlResize);

  // Appel de la fonction pour gérer la taille initiale
handleHtmlResize();

/// Rendre les changements JS selon la taille de l'élément possibles
// Fonction pour gérer les changements de taille de l'élément HTML
function handleHtmlResizeBis() {
    // Obtenir la largeur de l'élément HTML
    const htmlWidth = document.documentElement.clientWidth;

    // Sélectionner l'élément Auteur par son ID
    let Auteur = document.getElementById("Auteur");

    // Modification du contenu
    if (htmlWidth < 1000) {
        Auteur.querySelector("a").textContent = "D.H © 2023";
    } else {
        Auteur.querySelector("a").textContent = "Fait par D.H © 2023";
    }
}
  // Gestionnaire d'événements resize attaché à la fenêtre
window.addEventListener("resize", handleHtmlResizeBis);

  // Appel de la fonction pour gérer la taille initiale
handleHtmlResizeBis();

////////////////////////////////////////////////////////////////////////////////////////

/// Fonction pour faire disparaître la barre de navigation en appuyant sur un bouton
function toggleSidebar() {
    // Sélectionne l'élément de la barre de navigation avec la classe 'sidebar'
    const sidebar = document.querySelector('.sidebar');

    // Vérifie si la barre de navigation est actuellement visible (display est 'block' ou vide)
    if (sidebar.style.display === 'block' || sidebar.style.display === '') {
        // Si la barre de navigation est visible, la masque en changeant sa propriété 'display' à 'none'
        sidebar.style.display = 'none';
    } else {
        // Si la barre de navigation est masquée, l'affiche en changeant sa propriété 'display' à 'block'
        sidebar.style.display = 'block';
    }
}

// Ajout d'un écouteur d'événements de clic à l'élément avec l'ID 'toggle-fullscreen' pour activer la fonction toggleSidebar lorsque l'utilisateur clique dessus.
document.getElementById('toggle-fullscreen').addEventListener('click', toggleSidebar);
////////////////////////////////////////////////////////////////////////////////////

// Sélectionne les éléments HTML avec les ID 'login' et 'signup'
const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');

// Vérifie si l'élément 'loginBtn' existe
if (loginBtn) {
    // Ajoute un écouteur d'événements au clic sur le bouton "login"
    loginBtn.addEventListener('click', (e) => {
        // Sélectionne l'élément parent du parent de l'élément déclencheur (e.target)
        let parent = e.target.parentNode.parentNode;
        
        // Recherche la classe CSS différente de "slide-up" dans les classes de l'élément parent
        Array.from(e.target.parentNode.parentNode.classList).find((element) => {
            if (element !== "slide-up") {
                // Si une classe différente de "slide-up" est trouvée, ajoute la classe "slide-up" à l'élément parent
                parent.classList.add('slide-up');
            } else {
                // Si la classe "slide-up" est trouvée, ajoute la classe "slide-up" à l'élément parent du bouton "signup" et retire la classe "slide-up" de l'élément parent actuel (la partie login)
                signupBtn.parentNode.classList.add('slide-up');
                parent.classList.remove('slide-up');
            }
        });
    });
}

// Vérifie si l'élément 'signupBtn' existe
if (signupBtn) {
    // Ajoute un écouteur d'événements au clic sur le bouton "signup"
    signupBtn.addEventListener('click', (e) => {
        // Sélectionne l'élément parent de l'élément déclencheur (e.target)
        let parent = e.target.parentNode;
        
        // Recherche la classe CSS différente de "slide-up" dans les classes de l'élément parent
        Array.from(e.target.parentNode.classList).find((element) => {
            if (element !== "slide-up") {
                // Si une classe différente de "slide-up" est trouvée, ajoute la classe "slide-up" à l'élément parent
                parent.classList.add('slide-up');
            } else {
                // Si la classe "slide-up" est trouvée, ajoute la classe "slide-up" à l'élément parent du bouton "login" et retire la classe "slide-up" de l'élément parent actuel (la partie signup)
                loginBtn.parentNode.parentNode.classList.add('slide-up');
                parent.classList.remove('slide-up');
            }
        });
    });
}
