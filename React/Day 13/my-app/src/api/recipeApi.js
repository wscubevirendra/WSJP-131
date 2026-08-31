async function fetchRecipe() {
    try {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();
        return data.recipes;
    } catch (error) {
        return []
    }
}

async function fetchRecipeById(id) {
    try {
        const response = await fetch(`https://dummyjson.com/recipes/${id}`);
        const data = await response.json();
        return data
    } catch (error) {
        return []
    }
}


export {fetchRecipe,fetchRecipeById}