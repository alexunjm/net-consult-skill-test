import {cleanConsole, createAll} from './data';
import {capitalize, cleanAndFormatCompaniesProperties} from './example-1';

const companies = createAll();

/**
 * Check if company name, user firstName or lastName has capital letter
 * @param {Arary<any>} companies Array of companies to check
 * @return {Boolean} false if any property has no Capital letter
 */
const checkCaseOfCompanies = (companies) => {
  companies = cleanAndFormatCompaniesProperties(companies);
  // for each company checks with capitalize function each property
  for (let i = 0; i < companies.length; i++) {
    const company = companies[i];
    // checks company name; if not equals return false
    if (company.name !== capitalize(company.name)) {
      return false;
    }
    for (let j = 0; j < company.users.length; j++) {
      const user = company.users[j];
      // checks user firstName and lastName; if not equals return false
      if (user.firstName !== capitalize(user.firstName)) {
        return false;
      } else if (user.lastName !== capitalize(user.lastName)) {
        return false;
      }
    }
  }
  return true;
};

cleanConsole(3, companies);
console.log('---- EXAMPLE 3 --- ', checkCaseOfCompanies(companies));

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Cree una función tomando la variable "companies" como parámetro y devolviendo
// un booleano que valida que todos los nombres de las empresas y los atributos
// "firstName" y "lastName" de "users" están en mayúsculas.
// Debes probar la operación de esta función importando la función creada
// en el "example-1.js".

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter and returning
// a boolean validating that all the names of the companies and the attributes "firstName"
// and "lastName" of "users" are capitalized. You must test the operation
// of this function by importing the function created for "example-1.js".

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et renvoyant
// un booléen validant que tous les noms des "company" et les attributs "firstName"
// et "lastName" des "users" sont en majuscules. Vous devez tester le fonctionnement
// de cette fonction en important la fonction créée pour "example-1.js".
