// ## Exo 1
// ### Créez un personnage avec un nom un et prenom et donnez lui une méthode 'sePresenter' qui fera un console.log "Bonjour je m'appelle " avec son nom puis son prénom.

let personnage = {
    nom : "de Lalaing",
    prenom : "Charles",
    âge : 22 + " ans",
    hobby : "Le code",
    animaux : "Guépard",
    ville : "Uccle",

    sePresenter(){
        console.log(`Bonjour, je m'apelle ${this.nom} ${this.prenom}.`);
    }
}

personnage.sePresenter();

// ## Exo 2
// ### Créer un objet avec un nom et une méthode
// ### La méthode de votre objet lance un prompt permetant de changer son age
// ### Une alert renvoi "[objet] a [age de l'objet] ans"

let personnage2 = {
    nom : "de Lalaing",
    prenom : "Charles",
    âge : 22 + " ans",
    hobby : "le code",
    animaux : "guépard",
    ville : "Uccle",

    sePresenter2(){
        let âge2 = prompt(`vous avez actuellement ${this.âge}, quel nouvel âge voulez vous mettre?`);
        personnage2.âge = âge2;
        delete âge2;
        alert(`Cool, ${this.prenom} a ${this.âge} ans`)
    }
}

personnage2.sePresenter2();
console.log(personnage2);

