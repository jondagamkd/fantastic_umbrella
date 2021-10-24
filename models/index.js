// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Post.belongsTo(Author);

// Author.hasMany(Post);

// module.exports = { Post, Author };



// Products belongsTo Category
Product.belongsTo(Category);

// Categories have many Products
Category.hasMany(Product);

// Products belongToMany Tags (through ProductTag)
// ProductTag.belongsToMany(Tag)
Product.belongsToMany(Tag, { through: ProductTag });

// Tags belongToMany Products (through ProductTag)
// Tag.belongsToMany(ProductTag)
Tag.belongsToMany(Product, { through: ProductTag });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
