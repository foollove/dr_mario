// --------------------------------------------------
// Constantes
// --------------------------------------------------

// ---------- Grille de jeu ----------
const GRID_WIDTH  = 248;
const GRID_HEIGHT = 496;

// ---------- Couleurs ----------
const COLOR_BLACK        = 'rgb(0, 0, 0)';
const COLOR_WHITE        = 'rgb(237, 231, 246)';
const COLOR_PURPLE       = 'rgb(142, 36, 170)'
const COLOR_PURPLE_LIGHT = 'rgb(223, 120, 239)';
const COLOR_YELLOW       = 'rgb(253, 216, 53)';

// ---------- Polices ----------
const TITLE_FONT = '40px arial';
const TEXT_FONT  = '33px arial';

// --------------------------------------------------
// Variables
// --------------------------------------------------

/** Context pour l'affichage du ju */
let context = null;

/** Date de dernier raffraichissement de la boucle de jeu */
let lastUpdate = Date.now();

/** Score du joueur */
let score = 0;

// --------------------------------------------------
// Fonctions principales de jeu
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
    let delta = Date.now() - lastUpdate;
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
    // ---------- Nettoyage du canvas ----------
    context.clearRect(0, 0, context.width, context.height);

    // ---------- Dessin du fond ----------
    // Fond noir
    context.fillStyle = COLOR_BLACK;
    context.fillRect(0, 0, context.width, context.height);
    // Damier violet
    context.fillStyle = COLOR_PURPLE;
    for(let i = 0; i < 8; i++) {
        for(let j = 0; j < 12; j++) {
            context.fillRect(100*i + 50*(j%2), 50*j, 50, 50);
        }
    }

    // ---------- Dessin de la grille de jeu ----------
    // Couleurs
    context.fillStyle = COLOR_BLACK;
    context.strokeStyle = COLOR_PURPLE_LIGHT;
    context.lineWidth = 3;
    // Rectangle
    context.fillRect((context.width - GRID_WIDTH)/2, 52, GRID_WIDTH, GRID_HEIGHT);
    context.strokeRect((context.width - GRID_WIDTH)/2, 52, 248, 496);

    // ---------- Dessin des cases ----------
    // Couleurs
    context.fillStyle = COLOR_WHITE;
    context.strokeStyle = COLOR_YELLOW;
    // Case score
    context.fillRect(38, 52, 200, 102);
    context.strokeRect(38, 52, 200, 102);
    // Case future pilule
    context.fillRect(562, 52, 200, 200);
    context.strokeRect(562, 52, 200, 200);
    // Case infos
    context.fillRect(562, 290, 200, 258);
    context.strokeRect(562, 290, 200, 258);

    // ---------- Texte des cases ----------
    // Couleur
    context.fillStyle = 'black';
    // Case score
    context.font = TITLE_FONT;
    context.fillText('SCORE', 47, 98);
    context.font = TEXT_FONT;
    context.fillText(score, 47, 135);
}