module.exports = (sequelize, DataTypes) => {
  const TABLE_STRUCTURE = {
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true 
    },
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    employeeId: { 
      type: DataTypes.INTEGER, 
      foreignKey: true 
    },
    // A declaração da Foreign Key é opcional no model
  };

  const TABLE_OPTIONS = {
    timestamps: false,
    tableName: 'addresses',
    underscored: true,
  };

  const Address = sequelize.define('Address', TABLE_STRUCTURE, TABLE_OPTIONS);

  Address.associate = (models) => {
    Address.belongsTo(models.Employee,
      { foreignKey: 'employeeId', as: 'employees' });
  };

  return Address;
};
