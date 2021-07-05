//barre de défilement 

let bar = document.getElementById('bar');
window.onscroll = function() { scrollIndicator() } ;
function scrollIndicator() {
    // On mesure la distance parcourue en scrollant (en px) avec "window.scrollY"
let distanceDefilementEnPx = window.scrollY;


// On détermine la hauteur de notre Lorem Ipsum
let hauteurLoremIpsumEnPx = document.documentElement.scrollHeight - window.innerHeight;


// On détermine le pourcentage de Lorem Ipsum qu'on a parcouru en faisant un produit en croix
let pourcentageDeLoremIpsumParcouru = (distanceDefilementEnPx / hauteurLoremIpsumEnPx)*100;

bar.setAttribute("style", "width:" + pourcentageDeLoremIpsumParcouru + "%");
}
    



