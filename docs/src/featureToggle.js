// need to use commonjs export so that docs/packages/markdown can use
module.exports = {
  nav_products: true,
  enable_website_banner: true,
  enable_toc_banner: true,
  enable_docsnav_banner: true,
  // TODO: cleanup once migration is done
  enable_product_scope: true, // related to new structure change
  enable_redirects: false, // related to new structure change
  enable_mui_base_scope: true, // will be enabled after the migration
  enable_system_scope: false, // will be enabled after the migration
};
