// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

function showAcct(name, num, business) {
    console.log(`Account Name: ${name}`);
    console.log(`Account Number: ${num}`)
    console.log(`Business Name: ${business}`);
}

// Add some phone numbers to our map
const phoneNumbers = new Map([['home', '510-867-5309'],
                              ['mobile', '415-555-1212'],
                              ['business', '415-123-4567']]);

// ///////////////////////////////////////////////////////
// Create User Info Display:
function showAddr(addr) {
    console.log("Addresses: ");
    for (let i = 0; i < addr.length; i++) {
        console.log(addr[i]);
    }
}

function showPhoneNums(phoneBook) {
    console.log("Phone Numbers: ");
    for (let n of phoneBook) {
        console.log(n[0] + ": " + n[1]);
    }
}

// Add function to print account information


// Add function to print all addresses, including a header


// Add function to print phone types and numbers


// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions
let transactions = new Map();

// Add function to add transactions
function addTransaction(date, amount) {
    transactions.set(date, amount);
}

// Use the function to add transactions
transactions.set("May-2", -500);
transactions.set("May-13", +1200);
transactions.set("May-15", -100);
transactions.set("May-21", -359);
transactions.set("May-29", +2200);


// Add function to show balance status
function showBalanceStatus(balance) {
    if (balance < 0) {
        console.log("YOU ARE OVERDRAWN");
    } else if (balance > 0 && balance < 20) {
        console.log("Warning: You are close to zero balance");
    } else {
        console.log("Thank you for your business");
    }
}

// Add function to show transactions


// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info


// Function to add customer attributes


// Add attributes for this user


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week


// Add a function for weekly hours




