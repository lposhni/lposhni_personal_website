
let x = 5;
let y = 7;

let z = x + y;
console.log(z);

let A; 
let B; 
let C; 

A = "Hello ";
B = "World!";

C = A + B;
console.log(C); 

// func to print sum of two numbers
function SumNPrint(x1, x2) {
    let x3 = x1 + x2;
    console.log(x3);
}

SumNPrint(x, y); 
SumNPrint(A, B); 

if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}


let L1; 
L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2; 
L2 =  ["Apple", "Banana", "Kiwi", "Orange"];


// first way to find the banana in the array
function findTheBanana(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "Banana") {
            alert(`Banana was found in the array at position ${i}`);
        }
    }
}

findTheBanana(L1); 
findTheBanana(L2);

// second way to find the banana in the array
function findTheBanana2(array, arrayName) {
    array.forEach(element => {
        if (element === "Banana") {
            alert(`We found a banana in the ${arrayName}`);
        }                           
    }); 
}


findTheBanana2(L1, "first array");
findTheBanana2(L2, "second array");



//  greeting message 
function greetingFunction() { 
    let d = new Date(); 
    let h = d.getHours(); 
    let message = ""; 

   
    if (h < 12) {
        message = "Good morning";
    } else if (h >= 12 && h < 18) {  
        message = "Good afternoon";
    } else if (h >= 18 && h < 20) {
        message = "Good evening";
    } else if ((h >= 20 && h < 24) || (h >= 0 && h < 5)) {
        message = "Good night";
    }

    let E = document.getElementById("greeting");
    if (E) {
        E.innerHTML = `${message}, My name is Lena Poshni`;
    }
    console.log(message);
}

// when home page loads.. 
window.onload = function() {
    greetingFunction();
    if (window.location.href.includes("index.html")) {
        greetingFunction();
    }
} 

