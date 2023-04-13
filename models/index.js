const User = require('./User');
const steamID = require('./User');

User.hasMany(steamID, {
  foreignKey: 'steam_id',
  onDelete: 'CASCADE'
});

steamID.belongsTo(User, {
  foreignKey: 'steam_id'
});

module.exports = { User, steamID };
