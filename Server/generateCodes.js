import { createCode } from "./utils/code";

const generate = async () => {
  const codes = [];

  for (let i = 0; i < 10; i++) {
    const data = await createCode();
    codes.push(data.dataValues.code);
  }

  console.log(codes);
};

generate();
