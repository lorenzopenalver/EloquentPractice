let numero = 20
    for (let index = 0; index <= numero; index++) {
        let element = index;
        
        if ((index % 2) == 0){
            element = ` #`.repeat(numero)
        }
        else{
            element = `# `.repeat(numero)
        }
        console.log(element);
    }
    

