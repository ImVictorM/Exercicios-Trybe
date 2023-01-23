module.exports = (sequelize, DataTypes) => {
  const TABLE_STRUCTURE = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  };

  const TABLE_OPTIONS = {
    timestamps: false,
    tableName: 'employees',
    underscored: true,
  };

  const Employee = sequelize.define('Employee', TABLE_STRUCTURE, TABLE_OPTIONS);
  
  Employee.associate = (models) => {
    Employee.hasMany(models.Address, {
      foreignKey: 'employeeId',
      as: 'addresses',
    });
  };

  return Employee;
}