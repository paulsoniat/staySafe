const Sequelize = require('sequelize');
const sequelize = require('./index')
module.exports = {
    User : sequelize.define('user', {
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: true
      }
    }),
    Vote : sequelize.define('vote', {
      value: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
    }),
    Candidate : sequelize.define('candidate', {
      fullName: {
        type: Sequelize.STRING
      }, 
      role: {
        type: Sequelize.STRING,
        allowNull: true,
      }
    })
}