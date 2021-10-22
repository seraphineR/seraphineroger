let variable = "Hello world!";
document.write(variable);

// Avec let et var on déclare une variable 
// Une  variable peut avoir sa valeur modifiée 
document.write("<br>");
variable = "coucou"; 
document.write(variable); 

const nombre = 3; 
// rRedonner une valeur à une constante st impossible et provoque une erreur
//nombre = 6; => Erreur; 
// Invalid assignement to const 'nombre'
document.write(nombre); 

let string = "chaine de caractère"
// La chaine de caractère est toujours entre guillemets
let integer = 123 // Un nombre n'a pas besoin de ""
let integer2 = 34.5 // Un nombre à virgule, mettre un .
let boolean = true // ou false
let array = ["coucou", 8, 64];
// Un tableau contient plusieurs valeurs entre []
// et séparés par des ,
let object = {
    couleur: "blanc",
    hauteur: 100, 
    largeur:350
}
// Un objet est une représentation d'un élément
// Un objet plossède des propriétés:
// Ce sont des variables qui lui sont propres

let a = 12;
let b = 20;
let c = a + b; 
document.write("<p>Le total de a + b = ")
document.write(c)
document.write("</p>");

let reponse = window.prompt ("comment vas-tu?");
document.write("<p> Ta réponse est: ");
document.write(reponse);
document.write("</p>");

//let reponse = window.prompt ("comment vas-tu?");
// document.write("<p> Ta réponse est: ");
// document.write(reponse);
// document.write("</p>");

// Exercie 
// Demander un prix TTC à l'util 
// puis son prénom dans un autre prompt
// Afficher sur la page Bonjour <prenom> <nom>

let nom = window.prompt("Quel est votre nom?");
let prenom = window.prompt("Quel est votre prénom?");
document.write("<p> Bonjour " + prenom + " " + nom + " " + "!</p>");
// document.write(prenom)
// document.write(" ");
// document.write(nom);
// document.write(" ");
// document.write("!</p>"); 


// Une boucle permet de répéter un même code x fois.
// Ici on va afficher les nombres de 1 à 10 sur la page. 
for (let index = 1; index < 11; index++) {
    document.write("<p>" + index + "</p>");
}

let john = "alex";
if (john == "jane") {
    doculent.write("Bonjour Jane");
}else if (jane == "Alex") {
    document.write("Bonjour Alex")
}
 else {
    document.write("Tu n'es pas john. Aurevoir !")
}

if (condition1 == true && condition2 == true ) {

} else {

}

p{color:blue; font-size:20px; color:green;}