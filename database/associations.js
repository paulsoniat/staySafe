const db = require('./index');
const models = require('./models');

models.User.hasMany(models.Vote);

models.Vote.belongsTo(models.Candidate);
models.Candidate.hasMany(models.Vote);

db.sync()