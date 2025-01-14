"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Cart, {
        foreignKey: "productId",
        as: "cart",
      });
      this.hasMany(models.Galleries, {
        foreignKey: "productId",
        as: "galleries",
      });
      this.hasMany(models.OrderDetail, {
        foreignKey: "productId",
        as: "orderDetail",
      });
      this.belongsTo(models.Store);
      this.belongsTo(models.Categories);
    }
  }
  Product.init(
    {
      storeId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      slug: DataTypes.STRING,
      description: DataTypes.STRING,
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          isDecimal: true,
          min: 0,
        },
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 0,
        },
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
