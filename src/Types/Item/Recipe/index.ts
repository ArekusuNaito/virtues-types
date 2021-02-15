export interface Recipe
{
    product:{name:string,quantity:number},
    ingredients:{name:string,need:number}[]
}

//Change name to IngredientRequirement
export interface IngredientMap
{
    [ingredientName:string]:{need:number,have:number}
}