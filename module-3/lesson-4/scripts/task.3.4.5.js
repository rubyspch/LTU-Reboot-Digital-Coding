var favouriteRecipe={
    letsCook: function (food){
        console.log("I'm hungry! Let's cook..." + food);
    },
    recipeTitle: 'Banana Oat Pancakes',
    servings:2,
    ingredients: ['200ml - Any type of milk', 'Any type of cooking oil','1 ripe banana','1/2 cup - Rolled oats', '1 Tsp - Ground cinnamon','1 Tsp - Vanilla extract'],
    directions: ['1. Add all ingredients to a blender and blend until smooth','2. Heat up small frying pan','3. Once the pan is hot, add 1/2 cup of the mixture to the pan', '4. Once small bubbles appear on the surface of the pancake, use a spatula to flip it', '5. Keep cooking the pancake until both sides are golden brown, then put the pancake to the side and repeat steps 3-5 until all of the mixture has been used', 'Serve with your preferred toppings'],
}

favouriteRecipe.letsCook(favouriteRecipe.recipeTitle); // Add the function within the object and call on it like this.

// Alternative way of accessing the recipe title for the sentence:

function letsCook(food){
    console.log("I'm hungry! Let's cook..." + food);
}
letsCook(favouriteRecipe.recipeTitle);