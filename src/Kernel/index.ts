export function DeepObjectCopy(object:any)
{
    return JSON.parse(JSON.stringify(object));
}

export function KeysAsArray(object:any)
{
    return Object.entries(object).map(([keyName,_])=>keyName);
}


/** Takes an array of strings and reduces them to one with spaces between */
export function CSSClassReducer(properties:string[])
{
    return properties.reduce((previousProperty,current)=>previousProperty+=current+" ","");
}

export default
{
    DeepObjectCopy,
    KeysAsArray,
    CSSClassReducer,
}