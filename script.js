// JavaScript Programming Assignment

// Q1. Weekly Temperature Record

let temperature = [30, 32, 35, 31, 33, 36, 34];

let sum = 0;

for (let i = 0; i < temperature.length; i++) {
    sum = sum + temperature[i];
}

let average = sum / 7;

let count = 0;

for (let i = 0; i < temperature.length; i++) {
    if (temperature[i] > average) {
        count++;
    }
}

console.log("Q1. Weekly Temperature Record");
console.log("Temperatures:", temperature);
console.log("Average Temperature:", average);
console.log("Days Above Average:", count);


// Q2. Class Test Marks

let marks = [75, 45, 89, 60, 35, 92, 55, 70];

let reverse = [];

for (let i = marks.length - 1; i >= 0; i--) {
    reverse.push(marks[i]);
}

let highest = marks[0];
let lowest = marks[0];
let pass = 0;

for (let i = 0; i < marks.length; i++) {

    if (marks[i] > highest) {
        highest = marks[i];
    }

    if (marks[i] < lowest) {
        lowest = marks[i];
    }

    if (marks[i] >= 50) {
        pass++;
    }
}

console.log("Q2. Class Test Marks");
console.log("Original Marks:", marks);
console.log("Reverse Marks:", reverse);
console.log("Highest Mark:", highest);
console.log("Lowest Mark:", lowest);
console.log("Students Passed:", pass);


// Q3. Shop Sales Across Branches

let sales = [
    [12000, 15000, 11000, 14000],
    [10000, 18000, 16000, 13000],
    [17000, 14000, 19000, 16000]
];

let allTotal = 0;
let highestTotal = 0;
let branchNumber = 0;

console.log("Q3. Shop Sales Across Branches");

for (let i = 0; i < sales.length; i++) {

    let total = 0;

    for (let j = 0; j < sales[i].length; j++) {
        total = total + sales[i][j];
    }

    console.log("Branch", i + 1, "Sales:", sales[i]);
    console.log("Branch Total:", total);

    allTotal = allTotal + total;

    if (total > highestTotal) {
        highestTotal = total;
        branchNumber = i + 1;
    }
}

console.log("Total Sales:", allTotal);
console.log("Highest Sales Branch:", branchNumber);


// Q4. Reversing a Delivery Route

let stops = [101, 102, 103, 104, 105, 106];

let reverseStops = [];

for (let i = stops.length - 1; i >= 0; i--) {
    reverseStops.push(stops[i]);
}

console.log("Q4. Reversing a Delivery Route");
console.log("Original Route:", stops);
console.log("Reversed Route:", reverseStops);


// Q5. Checking a Product Code

let code = prompt("Enter Product Code:");

if (code === null) {
    code = "";
}

let originalCode = code.toUpperCase();

let reverseCode = "";

for (let i = originalCode.length - 1; i >= 0; i--) {
    reverseCode = reverseCode + originalCode[i];
}

console.log("Q5. Checking a Product Code");
console.log("Entered Code:", code);

if (originalCode === "") {
    console.log("Please enter a product code.");
}
else if (originalCode === reverseCode) {
    console.log("Product Code is Palindrome");
}
else {
    console.log("Product Code is Not Palindrome");
}


// Q6. Personalised Shopping Discount

function discount(price, percentage) {

    let discountAmount = price * percentage / 100;

    let finalPrice = price - discountAmount;

    return finalPrice;
}

let price = 2000;
let percentage = 20;

let result1 = discount(price, percentage);

console.log("Q6. Personalised Shopping Discount");
console.log("Original Price:", price);
console.log("Discount:", percentage + "%");
console.log("Final Price:", result1);


// Q7. Restaurant Bill Calculator

function restaurantBill(price, quantity) {

    let total = price * quantity;

    return total;
}

let itemPrice = 500;
let itemQuantity = 4;

let bill = restaurantBill(itemPrice, itemQuantity);

console.log("Q7. Restaurant Bill Calculator");
console.log("Item Price:", itemPrice);
console.log("Quantity:", itemQuantity);
console.log("Total Bill:", bill);


// Q8. Student Grade Checker

function gradeChecker(marks) {

    if (marks >= 85 && marks <= 100) {
        return "A";
    }

    else if (marks >= 70 && marks <= 84) {
        return "B";
    }

    else if (marks >= 50 && marks <= 69) {
        return "C";
    }

    else if (marks >= 0 && marks < 50) {
        return "Fail";
    }

    else {
        return "Invalid Marks";
    }
}

let studentMarks = 90;

let grade = gradeChecker(studentMarks);

console.log("Q8. Student Grade Checker");
console.log("Student Marks:", studentMarks);
console.log("Student Grade:", grade);


// Q9. Food Delivery Charge Calculator

function deliveryCharge(amount, distance) {

    let charge = 0;

    if (amount >= 2000 && distance <= 5) {
        charge = 0;
    }

    else {
        charge = 100;

        if (distance > 5) {
            charge = charge + (distance - 5) * 20;
        }
    }

    return charge;
}

let orderAmount = 1500;
let deliveryDistance = 8;

let delivery = deliveryCharge(orderAmount, deliveryDistance);

let finalBill = orderAmount + delivery;

console.log("Q9. Food Delivery Charge Calculator");
console.log("Order Amount:", orderAmount);
console.log("Delivery Distance:", deliveryDistance);
console.log("Delivery Charge:", delivery);
console.log("Final Bill:", finalBill);


// Q10. Weekly Sales Performance

function weeklyPerformance(sales) {

    let total = 0;
    let count = 0;

    for (let i = 0; i < sales.length; i++) {

        total = total + sales[i];

        if (sales[i] >= 10000) {
            count++;
        }
    }

    let average = total / 7;

    return {
        totalSales: total,
        averageSales: average,
        targetDays: count
    };
}

let weeklySales = [12000, 8000, 15000, 10000, 9000, 11000, 14000];

let result = weeklyPerformance(weeklySales);

console.log("Q10. Weekly Sales Performance");
console.log("Weekly Sales:", weeklySales);
console.log("Total Weekly Sales:", result.totalSales);
console.log("Average Daily Sales:", result.averageSales);
console.log("Days Reached Target:", result.targetDays);

if (result.averageSales >= 10000) {
    console.log("Weekly Target Achieved");
}
else {
    console.log("Weekly Target Not Achieved");
}