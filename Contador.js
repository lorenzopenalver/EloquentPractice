
for (let index = 1; index <= 200; index++) {
    let element = index;
    
    if ((index % 3) === 0){
        element = `Fizz`
    }
    else if((index % 5)===0){
        element = `Buzz`
    }
    if((index % 5)===0 && (index % 3) == 0){
        element = `FizzBuzz`
    }
    console.log(element);
}