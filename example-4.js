import {cleanConsole, createAll} from './data';
const companies = createAll();

/**
 * Extract users property of each Company
 * and map each user with company name
 * to create new sorted array
 * with users ordered by age desc
 * @param {Array<any>} companies Array of companies to flat
 * @return {Array<any>} the result of array of Users sorted by age desc.
 */
const flatUsersFromCompaniesAndSortByAge = (companies) => {
  /**
   * reduce fn of array helps to create new array with users
   */
  const users = companies.reduce((result, company) => {
    // map users with company property from company name
    const usersFromCompany = company.users.map((user) => {
      user.company = company.name;
      return user;
    });
    // join prev company users array with users from current company
    return [...result, ...usersFromCompany];
  }, []);
  // sort by age desc
  return users.sort((u1, u2) => u2.age - u1.age);
};

cleanConsole(4, companies);
console.log('---- EXAMPLE 4 --- ', flatUsersFromCompaniesAndSortByAge(companies));

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando como parámetro la variable "companies" y agrupando
// todos los "users" de todas las "companies" en una sola tabla. Cada "user"
// debe tener un nuevo atributo "company" que tenga como valor el nombre de la
// dicha "company". Los "users" deben ordenarse de acuerdo con sus edad
// (de mayor a menor).

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking as parameter the "companies" variable and grouping
// all "users" of all "companies" in a single table. Each "user"
// must have a new attribute "company" having for value the name of the "company"
// to which it belongs. The "users" must be sorted according to their
// age (from oldest to youngest).

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et regroupant
// tous les "users" de toutes les "companies" dans un seul tableau. Chaque "user"
// doit avoir un nouvel attribut "company" ayant pour valeur le nom de la "company"
// à laquelle il appartient. Les "users" doivent être triés en fonction de leur
// âge (du plus vieux au plus jeune).
