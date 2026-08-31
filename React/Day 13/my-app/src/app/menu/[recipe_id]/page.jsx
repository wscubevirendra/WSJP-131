'use client'

import { fetchRecipeById } from '@/api/recipeApi'
import React, { use, useEffect, useState } from 'react'

export default function page({ params }) {
    const [recipe, setRecipe] = useState({});
    const { recipe_id } = use(params);

    useEffect(
        () => {

            async function getRecipe() {
                const data = await fetchRecipeById(recipe_id);
                setRecipe(data)
            }

            getRecipe()

        },
        [recipe_id]
    )



    return (
        <div className="min-h-screen bg-[#111827] text-white py-10 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="grid lg:grid-cols-2 gap-10">

                    {/* Image */}
                    <div>
                        <img
                            src={recipe.image}
                            alt={recipe.name}
                            className="w-full h-[450px] object-cover rounded-2xl border-2 border-orange-500"
                        />
                    </div>

                    {/* Details */}
                    <div className="space-y-6">

                        <div>
                            <span className="px-3 py-1 bg-orange-500 rounded-full text-sm">
                                {recipe.cuisine}
                            </span>

                            <h1 className="text-4xl font-bold mt-4">
                                {recipe.name}
                            </h1>

                            <div className="flex flex-wrap gap-6 mt-5 text-gray-300">

                                <div>
                                    <p className="text-sm">Rating</p>
                                    <p className="text-orange-400 font-semibold">
                                        ⭐ {recipe.rating} ({recipe.reviewCount} Reviews)
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm">Difficulty</p>
                                    <p>{recipe.difficulty}</p>
                                </div>

                                <div>
                                    <p className="text-sm">Calories</p>
                                    <p>{recipe.caloriesPerServing} kcal</p>
                                </div>

                            </div>
                        </div>

                        {/* Info Cards */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                            <div className="border border-orange-500 rounded-xl p-4 text-center">
                                <p className="text-gray-400 text-sm">Prep Time</p>
                                <p className="font-semibold mt-2">
                                    {recipe.prepTimeMinutes} min
                                </p>
                            </div>

                            <div className="border border-orange-500 rounded-xl p-4 text-center">
                                <p className="text-gray-400 text-sm">Cook Time</p>
                                <p className="font-semibold mt-2">
                                    {recipe.cookTimeMinutes} min
                                </p>
                            </div>

                            <div className="border border-orange-500 rounded-xl p-4 text-center">
                                <p className="text-gray-400 text-sm">Servings</p>
                                <p className="font-semibold mt-2">
                                    {recipe.servings}
                                </p>
                            </div>


                        </div>

                        {/* Tags */}
                        <div>
                            <h2 className="text-xl font-semibold mb-3">
                                Tags
                            </h2>

                            <div className="flex flex-wrap gap-3">
                                {recipe.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-4 py-2 border border-orange-500 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                {/* Ingredients & Instructions */}
                <div className="grid lg:grid-cols-2 gap-8 mt-12">

                    {/* Ingredients */}
                    <div className="border border-orange-500 rounded-2xl p-6">

                        <h2 className="text-2xl font-bold mb-6">
                            Ingredients
                        </h2>

                        <ul className="space-y-4">
                            {recipe.ingredients.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-3"
                                >
                                    <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                    </div>

                    {/* Instructions */}
                    <div className="border border-orange-500 rounded-2xl p-6">

                        <h2 className="text-2xl font-bold mb-6">
                            Instructions
                        </h2>

                        <div className="space-y-5">

                            {recipe.instructions.map((step, index) => (
                                <div
                                    key={index}
                                    className="flex gap-4"
                                >
                                    <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center font-bold">
                                        {index + 1}
                                    </div>

                                    <p className="text-gray-300">
                                        {step}
                                    </p>
                                </div>
                            ))}

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
