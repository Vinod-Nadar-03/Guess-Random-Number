const max = prompt("ENTER THE MAX NUMBER");

const random = Math.floor(Math.random() * max) +1; 

let guess = prompt("Guess the correct number");

while(true){
    if(guess == "quit"){
        console.log("User quit!!");
        break;
    }

    if(guess == random){
        console.log("You are right. Congrats! Random Number was", random);
        break;
    }else if(guess < random){
        guess = prompt("Hint : Your guess was too small. Please try again");
    }else {
        guess = prompt("Hint : Your guess was too large. Please try again");
    }
    // else {
    //     guess = prompt("You are wrong. Please try again");
    // }
}