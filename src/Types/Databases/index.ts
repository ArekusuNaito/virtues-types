import {ItemData} from '../Item'
import {Recipe} from '../Item/Recipe'
import {LocationNode} from  '../Location'

//Basically used as the ORM from what you get from the database
//In other words, these are the helper data structures to link the real database.

export interface ItemDatabase
{
    [itemName:string]:ItemData
}

export interface RecipeDatabase
{
    [recipeName:string]:Recipe
}

export interface WorldMap
{
    [locationName:string]:LocationNode
}