// Tu disposes d'un tableau nommé `eleves` dont chaque élément est un objet ayant la structure suivante :
// {
//   nom: string,      // Le nom de l'élève
//   notes: number[]   // Un tableau de notes (nombres) obtenues par l'élève
// }
//
// Écris une fonction `showStudentBulletin(eleves)` qui, pour chaque élève du tableau, retourne un bulletin scolaire contenant :
// - Son nom
// - Sa moyenne (calculée à partir de ses notes, arrondie à deux décimales)
// - Un commentaire basé sur la moyenne obtenue :
//     - Moyenne >= 16 : "Excellent"
//     - Moyenne >= 14 : "Très Bien"
//     - Moyenne >= 12 : "Bien"
//     - Moyenne >= 10 : "Passable"
//     - Moyenne < 10  : "À revoir"
// Dans le cas où l'élève n'a pas de notes, la moyenne doit être considérée comme 0 et le commentaire "À revoir".

const eleves = [
{ nom: "Alice", notes: [18, 16, 17] },
{ nom: "Isa", notes: [0, 0, 0] },
{ nom: "Jack", notes: [-2, 2, 0] },
{ nom: "Claire", notes: [16, 16, 16] }, 
{ nom: "David", notes: [14, 14, 14] }, 
{ nom: "Eva", notes: [12, 12, 12] }, 
{ nom: "Fred", notes: [10, 10, 10] }, 
{ nom: "Gina", notes: [8, 9, 10] } ]

function showStudentBulletin(eleves) {

	let bulletins=[]

	for(let i = 0; i< eleves.length; i++){
		let eleve = eleves[i]
		let somme = 0
		let average = 0

		if(eleve.notes.length > 0){
			for (let j = 0; j < eleve.notes.length; j++){
				somme += eleve.notes[j]
			}
			average = somme / eleve.notes.length 
		}
		let moyenne = average.toFixed(2)
		if(moyenne >= 16){
			commentaire="Excellent"
		}else if(moyenne >= 14){
			commentaire="Très Bien"
		}else if(moyenne >= 12){
			commentaire="Bien"
		}else if(moyenne >= 10){
			commentaire="Passable"
		}else{
			commentaire = 'A revoir'
		}

		let bulletin ={
			nom: eleve.nom,
			moyenne: moyenne,
			commentaire: commentaire
		}
		bulletins.push(bulletin)
	}
	
 return bulletins
}
console.log(showStudentBulletin(eleves))
module.exports = {
	showStudentBulletin,
};