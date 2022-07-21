function fruitOrVegetable(input){

    const type = input[0];


    switch(type){

        case "bana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "limon":
        case "grapes": console.log("fruit"); break;
        case "tomato":
        case "cucumber":
        case "peper":
        case "carrot": console.log("vegetable"); break;
        default: console.log("Error!"); break;


    }

}

fruitOrVegetable(["cucumber"])