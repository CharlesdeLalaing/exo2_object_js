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
        console.log(`Bonjour, je m'apelle ${this.nom + this.prenom}.`);
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
        let âge2 = prompt(`Quel nouvel âge voulez vous mettre?`);
        personnage2.âge = âge2;
        delete âge2;
        alert(`Cool, ${this.prenom} a ${this.âge} ans`)
    }

    // sePresenter2(){
    //     this.âge = prompt(`Quel nouvel âge voulez vous mettre?`); //ajoût de l'âge dans l'objet. pas juste le remplacer
    //     alert(`Cool, ${this.prenom} a ${this.âge} ans`)
    // }
}

personnage2.sePresenter2();
console.log(personnage2);


// let nice = {
//     nom = "Alain",
//     ageNom(){
//         this.age = prompt("changer age");
//         alert(this.nom + " a " + this.age + " ans");
//     }
// }

// nice.ageNom()


// let famille =  {
//     alix : {
//         age : 23,
//         taille : 178,
//         nom : "de Lalaing",
//         prenom : "Alix"
//     },
//     marina : {
//         age : 49,
//         taille : 178,
//         nom : "de Lalaing",
//         prenom : "Marina"
//     },
//     cedric : {
//         age : 54,
//         taille : 182,
//         nom : "de Lalaing",
//         prenom : "Cedric"
//     },
//     charles : {
//         age : 22,
//         taille : 193,
//         nom : "de Lalaing",
//         prenom : "Charles",
//         râle(){
//             console.log(`${famille.alix.prenom} fait trop la maline et ça saoule ${this.prenom}, je pense que ${famille.marina.prenom} va se facher et demander l'âge a ${famille.cedric.prenom} qui est de ${famille.cedric.age}.`)
//         }
//     }
// }


// famille.charles.râle();
// console.log(famille.alix , famille.charles)

