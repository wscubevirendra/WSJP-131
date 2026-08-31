import React from 'react'
import { fetchRecipe } from '@/api/recipeApi';
import RecipeCard from '@/components/RecipeCard';

export default async function page() {
    const recipes = await fetchRecipe();

    return (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {
                recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))
            }

        </div>
    )
}
