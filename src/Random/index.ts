export function GenerateRandom16BitNumber()
{
    //Generate random 1 number from a range of [0,65535]. A total of 65536 numbers: 2^16
    return crypto.getRandomValues(new Uint16Array(1))[0];
}

export function GenerateRandom32BitNumber()
{
    //Generate random 1 number from a range of [0,4B]. A total of  2^32 numbers
    return crypto.getRandomValues(new Uint32Array(1))[0];
}

export function RandomBetween(min:number, max:number) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    
}

export function RandomDecimalBetween(min:number, max:number) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    // return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    return Math.random() * (max - min + 1) + min; //The maximum is inclusive and the minimum is inclusive
}

export default
{
    GenerateRandom16BitNumber,
    GenerateRandom32BitNumber,
    RandomBetween,
    RandomDecimalBetween

}