import {cleanConsole, createAll} from './data';
const companies = createAll();

cleanConsole(7, companies);

/**
 * get the index of company by id in companies array
 * @param {Number} companyId id of company to get index
 * @return {Number} index of companies array
 */
const getIndexOfCompanyById = (companyId) => {
  for (let i = 0; i < companies.length; i++) {
    if (companies[i].id == companyId) {
      return i;
    }
  }
  return -1;
};

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Parte 1: Crear una función tomando como parámetro un "id" de "company" y
// devolviendo el nombre de esta "company".

/**
 * Get a name of company found on companies array
 * @param {Number} companyId id of company to get name
 * @return {String} Name of company found
 */
const getCompanyName = (companyId) => {
  const companyIndex = getIndexOfCompanyById(companyId);
  return companyIndex < 0 ? '' : companies[companyIndex].name;
};
console.log('---- EXAMPLE 7 part 1 --- ', getCompanyName(1));

// Parte 2: Crear una función tomando como parámetro un "id" de "company" y
// quitando la "company" de la lista.

/**
 * Remove a company from companies array
 * @param {Number} companyId id of company
 * @return {Object} deleted company
 */
const removeCompany = (companyId) => {
  const index = getIndexOfCompanyById(companyId);
  return companies.splice(index, 1);
};
console.log('---- EXAMPLE 7 part 2 --- ', removeCompany(1));

// Parte 3: Crear una función tomando como parámetro un "id" de "company" y
// permitiendo hacer un PATCH (como con una llamada HTTP) en todos los
// atributos de esta "company" excepto en el atributo "users".

/**
 * get url and body to make patch (this is a sim)
 * @param {Number} companyId id of company
 * @return {Object} object with url an body
 */
const patchCompany = (companyId) => {
  // PATCH to the resource id = 1
  // update that task is completed
  const index = getIndexOfCompanyById(companyId);
  const company = {...companies[index], updated: true};
  delete company.updated;
  delete company.users;

  const url = `https://alexanderjaramillo.com/company/${companyId}`;
  console.log({company});

  const body = JSON.stringify(company);
  /*
  fetch(url, {
    method: 'PATCH',
    body,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
      .then((response) => response.json())
      .then((json) => console.log(json));*/
  return {url, body};
};

console.log('---- EXAMPLE 7 part 3 --- ', patchCompany(2));

// Parte 4: Crear una función tomando como parámetro un "id" de "company" y un
// nuevo "user" cuyo el apelido es "Delgado", el nombre "Juan", de 35 años y
// dueño de un carro. El nuevo "user" debe agregarse a la lista de "users" de este
// "company" y tener un "id" generado automáticamente. La función también debe modificar
// el atributo "usersLength" de "company".

/**
 * Add new user to Company users property
 * @param {Number} companyId id of company
 * @param {{firstName: 'Juan', lastName: 'Delgado', age: 35, car: true}} user Optional user to add
 * @return {Object} object with url an body
 */
const addNewUser = (companyId, user = {firstName: 'Juan', lastName: 'Delgado', age: 35, car: true}) => {
  const index = getIndexOfCompanyById(companyId);
  companies[index].users.push({
    ...user,
    id: companies[index].users.reduce((max, user) => max < user.id ? user.id : max, 0) + 1,
  });
  companies[index].usersLength = companies[index].users.length;
  return companies[index];
};

console.log('---- EXAMPLE 7 part 4 --- ', addNewUser(3));
console.log('---- EXAMPLE 7 part 5 --- ', 'Put here your function');
console.log('---- EXAMPLE 7 part 6 --- ', 'Put here your function');
console.log('---- EXAMPLE 7 part 7 --- ', 'Put here your function');
console.log('---- EXAMPLE 7 part 8 --- ', 'Put here your function');
console.log('---- EXAMPLE 7 part 9 --- ', 'Put here your function');

// Parte 5: Crear una función tomando como parámetro un "id" de "company" y
// permitiendo hacer un PUT (como con una llamada HTTP) en esta "company" excepto
// en el atributo "users".

// Parte 6: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user". La función debe quitar este "user" de la lista de "users"
// de "company" y cambiar el atributo "usersLength" de "company".

// Parte 7: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user" que permite hacer un PATCH (como con una llamada HTTP) en este
// "user".

// Parte 8: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user" que permite hacer un PUT (como con una llamada HTTP) en este
// "user".

// Parte 9: Crear una función tomando como parámetro dos "id" de "company" y
// un "id" de "user". La función debe permitir que el user sea transferido de la
// primera "company" a la segunda "company". El atributo "usersLength" de cada
// "company" debe actualizarse.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Part 1: Create a function taking as parameter an "id" of "company" and
// returning the name of this "company".

// Part 2: Create a function taking as parameter an "id" of "company" and
// removing the "company" from the list.

// Part 3: Create a function taking as a parameter an "id" of "company" and
// allowing to make a PATCH (as with an HTTP call) on all
// attributes of this "company" except on the "users" attribute.

// Part 4: Create a function taking as parameter an "id" of "company" and a
// new "user" whose name is "Delgado", the first name "Juan", aged 35 and
// a car. The new "user" must be added to the "users" list of this
// "company" and have an automatically generated "id". The function must also modify
// the "usersLength" attribute of "company".

// Part 5: Create a function taking as parameter an "id" of "company" and
// allowing to make a PUT (as with an HTTP call) on this "company" except
// on the "users" attribute.

// Part 6: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user". The function must remove this "user" from the list of "users"
// from "company" and change the attribute "usersLength" from "company".

// Part 7: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user" allowing to make a PATCH (as with an HTTP call) on this
// "user".

// Part 8: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user" allowing to make a PUT (as with an HTTP call) on this
// "user".

// Part 9: Create a function taking as parameter two "id" of "company" and
// an "id" of "user". The function must allow the user to be transferred as a parameter
// from the 1st "company" to the 2nd "company". The "usersLength" attribute of each
// "company" must be updated.

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Partie 1 : Créer une fonction prenant en paramètre un "id" de "company" et
// retournant le nom de cette "company".

// Partie 2 : Créer une fonction prenant en paramètre un "id" de "company" et
// supprimant la "company" de la liste.

// Partie 3 : Créer une fonction prenant en paramètre un "id" de "company" et
// permettant de faire un PATCH (comme avec un appel HTTP) sur tous les
// attributs de cette "company" sauf sur l'attribut "users".

// Partie 4 : Créer une fonction prenant en paramètre un "id" de "company" et un
// nouvel "user" dont le nom est "Delgado", le prénom "Juan", ayant 35 ans et
// une voiture. Le nouvel "user" doit être ajouté à la liste des "users" de cette
// "company" et avoir un "id" généré automatiquement. La fonction doit aussi modifier
// l'attribut "usersLength" de "company".

// Partie 5 : Créer une fonction prenant en paramètre un "id" de "company" et
// permettant de faire un PUT (comme avec un appel HTTP) sur cette "company" sauf
// sur l'attribut "users".

// Partie 6 : Créer une fonction prenant en paramètre un "id" de "company" et un
// "id" de "user". La fonction doit supprimer cet "user" de la liste des "users"
// de la "company" et modifier l'attribut "usersLength" de "company".

// Partie 7 : Créer une fonction prenant en paramètre un "id" de "company" et un
// "id" de "user" permettant de faire un PATCH (comme avec un appel HTTP) sur cet
// "user".

// Partie 8 : Créer une fonction prenant en paramètre un "id" de "company" et un
// "id" de "user" permettant de faire un PUT (comme avec un appel HTTP) sur cet
// "user".

// Partie 9 : Créer une fonction prenant en paramètre deux "id" de "company" et
// un "id" de "user". La fonction doit permettre de transférer l'user en paramètre
// de la 1re "company" à la 2e "company". L'attribut "usersLength" de chaque
// "company" doit être mis à jour.
