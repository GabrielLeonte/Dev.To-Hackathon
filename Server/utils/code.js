import Code from "../models/inviteCodes";
import { generateCode } from "./strings";

// generate a new code
const createCode = async () => {
  try {
    // generate a code by a pattern
    const code = generateCode();

    // sync the Code table
    await Code.sync();

    // create new record into the database
    const CodeData = await Code.create({ code: code });

    // return data about the new created code
    return CodeData;
  } catch (err) {
    // easy fix to prevent unique conflict
    if (err.errors[0].validatorKey == "not_unique") return createCode();
    else throw err;
  }
};

// check if the code is usable
const verifySignUpCode = async (code) => {
  try {
    // get code data from the database by code param
    const codeData = await Code.findOne({ where: { code: code } });

    // return true if the code doesn't exists in the database
    if (codeData === null) return true;

    // return true if the code has been used
    return codeData.dataValues.usable == 1 ? false : true;
  } catch (err) {
    throw err;
  }
};

const updateCode = async (code, id) => Code.update({ usable: 0, takenByID: id }, { where: { code: code } });

export { createCode, verifySignUpCode, updateCode };
