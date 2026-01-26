/*
Écrire une fonction "createUser" qui permet de créer un utilisateur.

La fonction doit accepter trois paramètres :
    - nom (string) : le nom de l'utilisateur
    - age (number) : l'âge de l'utilisateur
    - estConnecte (boolean) : indique si l'utilisateur est connecté

La fonction doit retourner un objet contenant ces trois propriétés :
    - nom (string)
    - age (number)
    - estConnecte (boolean)
*/

function createUser(nom, age, estConnecte) {

    const name = typeof nom === 'string' && nom.trim() !== ''
    const oldConversion = Number(age)
    const old = !isNaN (oldConversion) && oldConversion >=0
    typeof estConnecte === 'boolean'

    return{
        nom,
        age : old ? oldConversion : 0,
        estConnecte : name && old 
    }
}
const user = [createUser("John", 30, true),createUser("", 0, false),createUser("Alice", "25", "true")]

console.log(user[0])
console.log(user[1])
console.log(user[2])


module.exports = {
    createUser,
};

