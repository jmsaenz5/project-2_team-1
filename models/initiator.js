module.exports = function(sequelize, DataTypes) {
  const Initiator = sequelize.define("Initiator", {
    // Giving the Initiator model a name of type STRING
    name: DataTypes.STRING
  });

  Initiator.associate = function(models) {
    // Associating Initiator with PRs
    // When an Author is deleted, also delete any associated Posts
    Initiator.hasMany(models.purchaseRequest, {});
  };

  return Author;
};
