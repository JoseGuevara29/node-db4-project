function getRecipeByID(recipe_id) {
  return Promise.resolve(`return id of ${recipe_id}`);
}
module.exports = {
  getRecipeByID,
};
