exports.up = async function (knex) {
  await knex.schema
    .createTable("recipes", (table) => {
      table.increments("recipe_id");
      table.string("recipe_name", 200).notNullable().unique();
    })
    .createTable("ingredients", (table) => {
      table.increments("ingredients_id");
      table.string("ingredients_name", 200).notNullable().unique();
      table.string("ingredients_unit", 50);
    })
    .createTable("steps", (table) => {
      table.increments("step_id");
      table.string("step_text", 200).notNullable();
      table.integer("stemp_number").notNullable();
      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .refrences("recipe_id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    })
    .createTable("step_ingredients", (table) => {
      table.increments("step_id");
      table.string("step_text", 200).notNullable();
      table.integer("stemp_number").notNullable();
      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .refrences("recipe_id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    });
};

exports.down = async function (knex) {
  await knex.schema
    .dropTable("step_ingredients")
    .dropTable("steps")
    .dropTable("ingredients")
    .dropTable("recipes");
};
