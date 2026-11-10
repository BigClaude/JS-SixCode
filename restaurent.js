


const readline = require("readline");

const readLin = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Display restaurant menu
console.log("===== WELCOME to Bisimallah restaurent =====");
console.log("1. Pizza          - 5000 RWF");
console.log("2. Burger         - 3000 RWF");
console.log("3. Chicken        - 4500 RWF");
console.log("4. Chips          - 1500 RWF");
console.log("5. Juice          - 1000 RWF");
console.log("=======================================");

// Ask customer to enter choice
readLine.question("Enter your choice (1-5): ", function(choice) {

    if (choice == "1") {
        console.log("You selected Pizza - 5000 RWF");
    }
    else if (choice === "2") {
        console.log("You selected Burger - 3000 RWF");
    }
    else if (choice === "3") {
        console.log("You selected Chicken - 4500 RWF");
    }
    else if (choice === "4") {
        console.log("You selected Chips - 1500 RWF");
    }
    else if (choice === "5") {
        console.log("You selected Juice - 1000 RWF");
    }
    else {
        console.log("Invalid choice! Please select between 1 and 5.");
    }

    readLine.close();
});

