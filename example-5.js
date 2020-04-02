import {cleanConsole, createAll} from './data';
import {flatUsersFromCompaniesAndSortByAge} from './example-4';
const companies = createAll();

/**
 * Summarize users from companies
 * @param {Array<any>} companies Array of companies
 * @return {{size, average, hasCar, averageWithCar}} Users: size, age avg, how many has car
 * and age avg from users with car
 */
const summary = (companies) => {
  const users = flatUsersFromCompaniesAndSortByAge(companies);
  const summaryResult = users.reduce((result, user) => {
    result.sumAge += user.age;
    if (user.car == true) {
      result.sumAgeHasCar += user.age;
      result.hasCar += 1;
    }
    return result;
  }, {
    sumAge: 0,
    sumAgeHasCar: 0,
    hasCar: 0,
  });

  const size = users.length;
  const average = summaryResult.sumAge / size;
  const {hasCar} = summaryResult;
  const averageWithCar = summaryResult.sumAgeHasCar / hasCar;

  return {size, average, hasCar, averageWithCar};
};

cleanConsole(5, companies);
console.log('---- EXAMPLE 5 --- ', summary(companies));

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Use la función creada en el ejemplo 4 para crear una nueva función tomando
// como parámetro la variable "companies" y devuelve un nuevo objeto con los
// siguientes atributos:
//     'size' => total de "users"
//     'average' => edad promedio de "users"
//     'hasCar' => total de "users" propietarios de un carro
//     'averageWithCar' => edad promedio de los "users" con un carro

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Use the function created in example 4 to create a
// new function taking as parameter the "companies" variable and returning
// a new object with the following attributes:
//     'size' => number of "users"
//     'average' => average age of "users"
//     'hasCar' => number of "users" owning a car
//     'averageWithCar' => average age of users with a car

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Utiliser la fonction créée dans l'exemple 4 pour créer une
// nouvelle fonction prenant en paramètre la variable "companies" et renvoyant
// un nouvel objet avec les attributs suivants :
//     'size' => nombre de "users"
//     'average' => moyenne d'âge des "users"
//     'hasCar' => nombre de "users" possédant une voiture
//     'averageWithCar' => moyenne d'âge des "users" possédant une voiture
