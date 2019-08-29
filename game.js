// --------------------------------------------------
// Variables
// --------------------------------------------------

/** Context pour l'affichage du ju */
var context = null;

/** Date de dernier raffraichissement de la boucle de jeu */
var lastUpdate = Date.now();

// --------------------------------------------------
// Fonctions de jeu
// --------------------------------------------------

/**
 * Initialisation des différents éléments utiles à la mise en place du jeu
 * (Exemple: canvas, démarrage de la boucle de jeu)
 */
function init() {
    // Initialisation du context
    context = document.getElementById('cvs').getContext('2d');
    context.width = document.getElementById('cvs').width;
    context.height = document.getElementById('cvs').height;

    // Game loop
    gameLoop();
}

/**
 * Boucle de jeu
 * Actions réalisées: delta -> update() -> render() -> ...
 */
function gameLoop() {
    // Calcul du delta de temps entre deux boucles
    var delta = Date.now() - lastUpdate;
    lastUpdate = Date.now();

    // Mise à jour de l'état du jeu
    update(delta);

    // Dessin des éléments
    render();

    // Appel de la boucle de jeu
    requestAnimationFrame(gameLoop);
}

/**
 * Mise à nour des différentrs éléments présents dans le jeu
 * 
 * @param {int} delta Temps entre deux boucles
 */
function update(delta) {

}

/**
 * Affichage des éléments de jeu
 */
function render() {

}