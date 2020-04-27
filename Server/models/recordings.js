import { sequelize, Sequelize } from "../databaseGlobalObject";

const Model = Sequelize.Model;
class Recordings extends Model {}

Recordings.init(
  {
    // attributes
    CallSid: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    CallStatus: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Caller: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    CallerCity: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    CallerState: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    CallerZip: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    RecordingDuration: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    RecordingUrl: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Status: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    takenBy: {
      type: Sequelize.STRING,
    },
    takenByTime: {
      type: Sequelize.STRING,
    },
    expiresAt: {
      type: Sequelize.STRING,
    },
  },
  {
    sequelize,
    modelName: "recordings",
  }
);

export default Recordings;
