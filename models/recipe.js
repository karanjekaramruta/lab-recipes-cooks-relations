const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: String,
  level: String,
  ingredients: [String],
  cuisine: String,
  dishType: String,
  image: {
    type: String,
    default: "https://images.media-allrecipes.com/images/75131.jpg",
  },
  duration: { type: Number, default: 0 },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "Cook" },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
