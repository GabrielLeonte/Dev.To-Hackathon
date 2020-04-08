import RandExp from "randexp";

// generate signup eligibility code
const generateCode = () => new RandExp(/^([A-Z])([1-9])([A-Z]){2}-([A-Z])([A-Z])([A-Z])([1-9])-([1-9])([1-9])([A-Z])([1-9])/).gen();

// generate a password with length of 6 digits
const generatePassword = () => new RandExp(/^[0-9]{6}/).gen();

export { generateCode, generatePassword };
