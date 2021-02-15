import * as crypto from 'crypto';

export function GenerateRandom16BitNumber()
{
    //Generate random 1 number from a range of [0,65535]. A total of 65536 numbers: 2^16
    // return crypto.randomBytes(new Uint16Array(1))[0];
    return crypto.randomBytes(16).readUInt16BE();
}

export function GenerateRandom32BitNumber()
{
    //Generate random 1 number from a range of [0,4B]. A total of  2^32 numbers
    return crypto.randomBytes(32).readUInt32BE();
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

/**Use a string for probability. E.g. "1/8192".
 *  The second parameter is to randomize between a number 2^16 or 2^32
 */
export function DidProbabilityHappen(probability:string,power:16|32=32)
{
    //Given a probability x, return if happened.
    const dropchance = parseFloat(eval(probability));
    const roll = power==16?GenerateRandom16BitNumber():GenerateRandom32BitNumber();
    const resultRange = Math.pow(2,power)*dropchance;
    // console.log('Results',probability,dropchance,`Roll: ${roll}`,resultRange,Math.pow(2,power));
    return roll<resultRange;
}

export default
{
    GenerateRandom16BitNumber,
    GenerateRandom32BitNumber,
    RandomBetween,
    RandomDecimalBetween,
    DidProbabilityHappen


}