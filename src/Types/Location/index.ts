import {ItemChance} from '../Loot';

export interface LocationNode
{
    name:string
    diceCount?:number
    forceCount?:number
    dropList:ItemChance[]
    neighbors:{[nodeName:string]:number}
}