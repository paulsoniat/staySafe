const sequelize = require('./index');
require('./associations');
const models = require('./models');

module.exports = {
    findAllCandidates: function findAllCandidates(req, res) {
      models.Candidate.findAll().then((cadidates) => {
        const candidateData = [];
        candidates.forEach((candidate) => {
          candidateData.push("something");
        });
        res.send(candidateData);
      });
    },
    createUser: function createUser(req, res) {
      models.User.findOrCreate({
        where: {
          firstName: `${req.body.firstName}`,
          lastName: `${req.body.lastName}`
      }
      })
      .then(console.log("createdd"))
    },
    findAllUsers: async function findAllUsers(req, res) {
      const allUsers = await models.User.findAll()
          let userNames = allUsers.map((user) => {
            return {
              firstName: user.firstName,
              lastName: user.lastName
            }
          })
        return userNames
    }
}