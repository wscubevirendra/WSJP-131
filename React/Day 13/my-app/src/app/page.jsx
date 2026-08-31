import React from 'react'
import RecipeSection from '@/components/RecipeSection'
import { fetchRecipe } from '@/api/recipeApi';

export default async function page() {
  const recipes = await fetchRecipe();
  const populat_recipes = recipes.slice(0, 4);
  const trending_recipes = recipes.slice(0, 4);
  return (
    <main>
      <RecipeSection title=" Popular Recipes" overview=" Discover our most loved dishes prepared by expert chefs." data={populat_recipes} />
      <RecipeSection title=" Trending Recipes" overview=" Discover our most trending dishes prepared by expert chefs." data={trending_recipes} />
       <RecipeSection title=" Today Special Recipes" overview=" Discover our most trending dishes prepared by expert chefs." data={trending_recipes} />
    </main>
  )
}
