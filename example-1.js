import {createAll, cleanConsole} from './data';
const companies = createAll();

/**
 * Changes the first letter of string to uppercase
 * @param {string} str string to transform
 * @return {string} the result of string transformed.
 */
const capitalize = (str) => {
  return str.substr(0, 1).toUpperCase() + str.substr(1);
};

/**
 * Clean and format each company property of companies
 * @param {Array<any>} companies array of companies to clean and format
 * @return {Array<any>} the result of array cleaned and formated.
 */
const cleanAndFormatCompaniesProperties = (companies) => {
  /**
   * for each company, format user data and company name
   */
  companies.forEach((company) => {
    company.users = company.users.map((user) => {
      // set empty string to undefined user properties
      for (const key in user) {
        if (user.hasOwnProperty(key)) {
          const value = user[key];
          user[key] = value ? value : '';
        }
      }
      // capitalize firstName and lastName
      user.firstName = capitalize(user.firstName);
      user.lastName = capitalize(user.lastName);

      // return user data formated
      return user;
    }).sort((u1, u2) => {/* sort desc by firstName and lastName */
      // check firstName order
      if (u1.firstName < u2.firstName) {
        // return -1 when u1 go first than u2
        return -1;
      } else if (u1.firstName === u2.firstName) {
        // if firstName is the same, order by lastName too
        return u1.lastName < u2.lastName ? -1 : 1;
      } else {
        // return 1 when u2 go first than u1
        return 1;
      }
    });
    company.name = capitalize(company.name);
  });
  // sort by users length (decreasing order) and return
  return companies.sort((c1, c2) => c2.users.length - c1.users.length);
};

cleanConsole(1, companies);
console.log('---- EXAMPLE 1 --- ', cleanAndFormatCompaniesProperties(companies));

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando la variable "companies" como parámetro y reemplazando
// todos los valores "undefined" en "usuarios" por un string vacío.
// El nombre de cada "company" debe tener una letra mayúscula al principio, así como
// el apellido y el nombre de cada "user".
// Las "companies" deben ordenarse por su total de "user" (orden decreciente)
// y los "users" de cada "company" deben aparecer en orden alfabético.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the variable "companies" as a parameter and replacing
// all values "undefined" in "users" by an empty string.
// The name of each "company" must have a capital letter at the beginning as well as
// the last name and first name of each "user".
// The "companies" must be sorted by their number of "user" (decreasing order)
// and the "users" of each "company" must be listed in alphabetical order.

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et remplaçant
// toutes les valeurs "undefined" dans les "users" par un string vide.
// Le nom de chaque "company" doit avoir une majuscule au début ainsi que
// le nom et le prénom de chaque "user".
// Les "companies" doivent être triées par leur nombre de "user" (ordre décroissant)
// et les "users" de chaque "company" doivent être classés par ordre alphabétique.


export {capitalize, cleanAndFormatCompaniesProperties};
