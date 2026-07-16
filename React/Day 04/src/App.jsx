import RecipeCard from "./RecipeCard";

function App() {

  const recipeData = [
    {
      title: "Classic Margherita Pizza",
      thumbnail: "https://cdn.dummyjson.com/recipe-images/1.webp"
    },
    {
      title: "Chocolate Chip Cookies",
      thumbnail: "https://cdn.dummyjson.com/recipe-images/3.webp"
    },
    {
      title: "Chicken Alfredo Pasta",
      thumbnail: "https://cdn.dummyjson.com/recipe-images/4.webp"
    },
    {
      title: "Chicken Alfredo Pasta",
      thumbnail: "https://cdn.dummyjson.com/recipe-images/4.webp"
    },
    {
      title: "Chicken Alfredo Pasta",
      thumbnail: "https://cdn.dummyjson.com/recipe-images/4.webp"
    },
     {
      title: "Chicken Alfredo Pasta",
      thumbnail: "https://cdn.dummyjson.com/recipe-images/19.webp"
    }
  ]


  return (
    <div className="container-xl">
      <div className="row g-2  p-4">
        {
          recipeData.map((data, index) => {
            return <RecipeCard key={index} title={data.title} thumbnail={data.thumbnail} />
          })
        }
      </div>
    </div>
  )
}


export default App;