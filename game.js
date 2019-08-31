// --------------------------------------------------
// Constantes
// --------------------------------------------------

// ---------- Grille de jeu ----------

/** Largeur de la grille */
const GRID_WIDTH  = 248;
/** Hauteur de la grille */
const GRID_HEIGHT = 496;

// ---------- Couleurs ----------

/** Couleur noir */
const COLOR_BLACK        = 'rgb(0, 0, 0)';
/** Couleur blanche */
const COLOR_WHITE        = 'rgb(237, 231, 246)';
/** Couleur violette */
const COLOR_PURPLE       = 'rgb(142, 36, 170)'
/** Couleur violette (claire) */
const COLOR_PURPLE_LIGHT = 'rgb(223, 120, 239)';
/** Couleur jaune */
const COLOR_YELLOW       = 'rgb(253, 216, 53)';

// ---------- Polices ----------

/** Taile de la police de tires */
const FONT_TITLE_SIZE = 40;
/** Police de titres */
const FONT_TITLE = FONT_TITLE_SIZE + 'px arial';
/** Taille de la police de textes */
const FONT_TEXT_SIZE = 33;
/** Police de textes */
const FONT_TEXT  = FONT_TEXT_SIZE + 'px arial';

// --------------------------------------------------
// Variables
// --------------------------------------------------

/** Context pour l'affichage du jeu */
let context = null;
/** Date de dernier raffraichissement de la boucle de jeu */
let lastUpdate = Date.now();

// ---------- État du jeu ----------

/** Niveau du jeu */
let level = 1;
/** Score du joueur */
let score = 0;
/**
 * Vitesse du jeu
 * 1: 'slow'
 */
let speed = 1;
/** Nombre de virus */
let virusNumber = 0;

// --------------------------------------------------
// Fonctions
// --------------------------------------------------

/** 
 * Transforme la variable 'speed' (int) en une chaîne de caractères
 */
function speedToString() {
    let speedString = null;

    switch(speed) {
        case 1:
            speedString = 'Slow';
            break;
        case 2:
            speedString = 'Medium';
            break;
        case 3:
            speedString = 'High';
            break;
    }

    return speedString;
}

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

    // Case score (x: 38 ; y: 52)
    context.fillRect(38, 52, 200, 98);
    context.strokeRect(38, 52, 200, 98);

    // Case future pilule (x: 562 ; y: 52)
    context.fillRect(562, 52, 200, 200);
    context.strokeRect(562, 52, 200, 200);

    // Case infos (x: 562 ; y: 290)
    context.fillRect(562, 290, 200, 258);
    context.strokeRect(562, 290, 200, 258);

    // ---------- Texte des cases ----------
    // Marge gauche: 10px
    // Marge haute: 5px + FONT_*_SIZE

    // Couleur
    context.fillStyle = 'black';

    // Case score (x: 38 ; y: 52)
    context.font = FONT_TITLE;
    context.fillText('SCORE', 38 + 10, 52 + FONT_TITLE_SIZE + 5);
    context.font = FONT_TEXT;
    context.fillText(score, 38 + 10, 52 + FONT_TITLE_SIZE + FONT_TEXT_SIZE + 10);

    // Case infos (x: 562 ; y: 290)
    // 1. Niveau
    context.font = FONT_TITLE;
    context.fillText('LEVEL', 562 + 10, 290 + FONT_TITLE_SIZE + 5);
    context.font = FONT_TEXT;
    context.fillText(level, 562 + 10, 290 + FONT_TITLE_SIZE + FONT_TEXT_SIZE + 10);
    // 2. Vitesse
    context.font = FONT_TITLE;
    context.fillText('SPEED', 562 + 10, 290 + 2*FONT_TITLE_SIZE + FONT_TEXT_SIZE + 15);
    context.font = FONT_TEXT;
    context.fillText(speedToString(), 562 + 10, 290 + 2*FONT_TITLE_SIZE + 2*FONT_TEXT_SIZE + 20);
    // 3. Vitesse
    context.font = FONT_TITLE;
    context.fillText('VIRUS', 562 + 10, 290 + 3*FONT_TITLE_SIZE + 2*FONT_TEXT_SIZE + 25);
    context.font = FONT_TEXT;
    context.fillText(virusNumber, 562 + 10, 290 + 3*FONT_TITLE_SIZE + 3*FONT_TEXT_SIZE + 30);
}