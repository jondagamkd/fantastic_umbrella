const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    // product_name: DataTypes.STRING,
    // price: DataTypes.DECIMAL(10,2),
    // stock: DataTypes.INTEGER,
    // category_id: DataTypes.INTEGER

    // product_id: 3,
    // tag_id: 5,
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: DataTypes.INTEGER,
    tag_id: DataTypes.INTEGER
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
