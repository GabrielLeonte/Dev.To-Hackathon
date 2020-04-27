import { sequelize, Sequelize } from "../databaseGlobalObject";

const Model = Sequelize.Model;
class Codes extends Model {}

Codes.init(
  {
    // attributes
    code: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    usable: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
    },
    takenByID: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "inviteCodes",
  }
);

export default Codes;
