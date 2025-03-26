
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

// findTheBanana(L1); 
// findTheBanana(L2);

// second way to find the banana in the array
function findTheBanana2(array, arrayName) {
    array.forEach(element => {
        if (element === "Banana") {
            alert(`We found a banana in the ${arrayName}`);
        }                           
    }); 
}


// findTheBanana2(L1, "first array");
// findTheBanana2(L2, "second array");

function addYear() { 
    let d = new Date(); 
    let y = d.getFullYear(); 
    let E = document.getElementById("copyYear");
    E.innerHTML+=y;
}


//  greeting message 
function greetingFunction() { 
    let d = new Date(); 
    let h = d.getHours(); 
    let message = ""; 

   
    // check the time and set the message
    if (h < 12) {
        message = "Good morning";
    } else if (h >= 12 && h < 18) {  
        message = "Good afternoon";
    } else if (h >= 18 && h < 20) {
        message = "Good evening";
    } else if ((h >= 20 && h < 24) || (h > 0 && h < 5)) {
        message = "Good night";
    }

    // print the message to h2 tag with id "greeting"
    let E = document.getElementById("greeting");
    if (E) {
        E.innerHTML = `${message}, My name is Lena Poshni`;
    }
    console.log(message);
}


// show  list of facts 
function showList() { 
    document.getElementById("funList").style.display = "block";
    document.getElementById("showButton").style.display = "none";
    }


// read less and more feature 

$("#readLess").click(function() {
    // show full bio and hide short bio
    $("#fullBio").hide();
    $("#shortBio, #readMore").show(); 
    $("#readLess").hide(); 
});
$("#readMore").click(function() {
    // show short bio and hide full bio
    $("#shortBio").hide();
    $("#fullBio, #readLess").show();
    $("#readMore").hide();
});

// fixing form: 
function validateForm() {
    // if it's currently valid 
    let validR = true;
    // getting input to check validity and then displaying error message if NOT valid 
    // otherwise, error message is j empty 
    if (!document.getElementById("name").checkValidity()) {
        document.getElementById("nameError").innerHTML = document.getElementById("name").validationMessage;
        validR = false;
    } else {
        document.getElementById("nameError").innerHTML = "";
    }
    if (!document.getElementById("email").checkValidity()) {
        document.getElementById("emailError").innerHTML = document.getElementById("email").validationMessage;
        validR = false;
    } else {
        document.getElementById("emailError").innerHTML = "";
    }
    if (!document.getElementById("comment").checkValidity()) {
        document.getElementById("messageError").innerHTML = document.getElementById("comment").validationMessage;
        validR = false;
    } else {
        document.getElementById("messageError").innerHTML = "";
    }
    if (validR) {
        document.getElementById("contactForm").submit(); // submission 
    }
    else { 
        // error for overall form 
        document.getElementById("error").innerHtml = "Error when submitting"; 
    }
}





// when home page loads only run greeting funct 
    // if page = intdex.html 
    if (window.location.href.includes("index.html") || window.location.href === window.location.origin + "/") {
        greetingFunction();
        console.log("Here")
    }
    console.log(window.location.href)
    



// get advice 
function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            document.getElementById("adviceText").innerText = data.slip.advice;
        })
        .catch(error => {
            console.error("Error: ", error);
        });
}

let map;

window.initMap = async function () {
    const position = { lat: 40.4406, lng: -79.9959 };
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  
    const map = new Map(document.getElementById("map"), {
      center: position,
      zoom: 12,
    });
  
    new AdvancedMarkerElement({
      map,
      position: position,
      title: "Pittsburgh",
    });
  };


