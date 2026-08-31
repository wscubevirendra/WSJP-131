import RecipeCard from "./RecipeCard";

export default function RecipeSection({ title, overview, data }) {

    return (
        <section className="max-w-7xl mx-auto px-6 py-6">

            <div className="mb-12">
                <h2 className="text-4xl font-bold text-gray-800">
                    {title}
                </h2>

                <p className="text-gray-500 mt-3">
                    {overview}
                </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {
                    data.map((recipe, index) => (
                        <RecipeCard recipe={recipe}/>
                    ))
                }

            </div>

        </section>
    );
}