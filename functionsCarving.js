

const createWoodBlock = () => {
    
     return {
        type: "wood block",
        length: 10,
        material: "pine",
        purpose: "flute"
        
    }
   
}

const woodPineBlock = createWoodBlock()

// "The 10-inch, pine woodblock was carved into a wooden flute"
const createBeautifulCarving = (woodObject) => {

    let stringResult = `The ${woodObject.length}-inch, ${woodObject.material} ${woodObject.type} was carved into
    a ${woodObject.purpose}.`
    return stringResult
}


const carvingString = createBeautifulCarving(woodPineBlock);

console.log(carvingString);