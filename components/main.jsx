export default function Main()
{
    const ingredients = ["chicken","oregano","butter"]
    const ingredientslistitems = ingredients.map((ingredient) =>{
        return(
            <li key = {ingredient}>{ingredient}</li>
        )
    })

    function handlesubmit(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        ingredients.push(newIngredient)
        console.log(ingredients)
    }
    return(
        <main>
            <form onSubmit={handlesubmit} className="add-ingredients-form">

        <input type="text" placeholder="Eg. Oregano"  aria-label="Add ingredient" name="ingredient"/>
        <button>+ Add Ingredient</button>

        </form>
        <div className="ingredients-list">
        <ul>
            {ingredientslistitems}
        </ul>
            </div>
        </main>
        
    )
}