let inputField = document.querySelector("#inputField");
let lowerCase = document.querySelector("#lowerCase");
let upperCase = document.querySelector("#upperCase");
let camelCase = document.querySelector("#camelCase");
let pascalCase = document.querySelector("#pascalCase");
let snakeCase = document.querySelector("#snakeCase");
let kebabCase = document.querySelector("#kebabCase");
let trimCase = document.querySelector("#trim");

function toCamelCase(string) {
  const lowerCaseString = string.toLowerCase();
  const wordsArray = lowerCaseString.split(" ");
  const camelCaseString = wordsArray
    .map((cur, i) => {
      if (i === 0) {
        return cur;
      } else {
        return cur.charAt(0).toUpperCase() + cur.slice(1);
      }
    })
    .join("");
  return camelCaseString;
}

function toPascalCase(string) {
  const lowerCaseString = string.toLowerCase();
  const wordsArray = lowerCaseString.split(" ");
  const pascalCaseString = wordsArray
    .map((cur) => cur.charAt(0).toUpperCase() + cur.slice(1))
    .join("");
  return pascalCaseString;
}

function toSnakeCase(string) {
  const wordsArray = string.split(" ");
  const snakeCaseString = wordsArray.join("_");
  return snakeCaseString;
}

function toKebabCase(string) {
  const wordsArray = string.split(" ");
  const kebabCaseString = wordsArray.join("-");
  return kebabCaseString;
}

function toTrimCase(string) {
  const wordsArray = string.split(" ");
  const trimCaseString = wordsArray.join("");
  return trimCaseString;
}

function updateCases() {
  lowerCase.textContent = inputField.value.toLowerCase();
  upperCase.textContent = inputField.value.toUpperCase();
  camelCase.textContent = toCamelCase(inputField.value);
  pascalCase.textContent = toPascalCase(inputField.value);
  snakeCase.textContent = toSnakeCase(inputField.value);
  kebabCase.textContent = toKebabCase(inputField.value);
  trimCase.textContent = toTrimCase(inputField.value);
}

document.addEventListener("DOMContentLoaded", updateCases);
inputField.addEventListener("input", updateCases);
