// Task 1
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// Task 2
for (let i = 20; i >= 1; i--) {
    console.log(i);
}

// Task 3
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Task 4
for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// Task 5
let a = 1;
while (a <= 15) {
    console.log(a);
    a++;
}

// Task 6
let b = 15;
while (b >= 1) {
    console.log(b);
    b--;
}

// Task 7
let table = prompt("Enter a number:");
for (let i = 1; i <= 10; i++) {
    console.log(table + " x " + i + " = " + (table * i));
}

// Task 8
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log("Blast Off 🚀");

// Task 9
let num = prompt("Enter a number:");
for (let i = 1; i <= num; i++) {
    console.log(i);
}

// Task 10
let start = prompt("Enter start number:");
let end = prompt("Enter end number:");

for (let i = start; i <= end; i++) {
    console.log(i);
}