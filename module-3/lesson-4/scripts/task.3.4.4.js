var favouriteRecipe={
    recipeTitle: 'Banana Oat Pancakes',
    servings:2,
    ingredients: ['200ml - Any type of milk', 'Any type of cooking oil','1 ripe banana','1/2 cup - Rolled oats', '1 Tsp - Ground cinnamon','1 Tsp - Vanilla extract'],
    directions: ['1. Add all ingredients to a blender and blend until smooth','2. Heat up small frying pan','3. Once the pan is hot, add 1/2 cup of the mixture to the pan', '4. Once small bubbles appear on the surface of the pancake, use a spatula to flip it', '5. Keep cooking the pancake until both sides are golden brown, then put the pancake to the side and repeat steps 3-5 until all of the mixture has been used', 'Serve with your preferred toppings'],
}
/*function ingredientsList(list){
    console.log(list.ingredients);
}
ingredientsList(favouriteRecipe);*/ //This lists the ingredients as an array, not indivual values.
var Ingredients=favouriteRecipe.ingredients; //This assigns the 'favouriteRecipe.ingredients' array values to the new variable Ingredients
for (var index=0; index<Ingredients.length; index++){
    console.log(Ingredients[index]);
} // This then loops through the array that is now located within Ingredients, console.logging each value one-by-one.