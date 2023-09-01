let numero = 8
    for (let index = 0; index < numero * 2; index++) {
        let element = index;
        
        if ((index % 2) == 0){
            element = ` #`.repeat(numero)
        }
        else{
            element = `# `.repeat(numero)
        }
        console.log(element);
    }
    

