import Sequelize from "sequelize";

const Model = Sequelize.Model;
class User extends Model {}

User.init(
  {
    // attributes
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
    },
  },
  {
    sequelize,
    modelName: "user",
  }
);

export default User;
