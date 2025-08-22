//Alert
function showWelcome() {
    alert("Welcome to JavaScript!");
}
function goodMorning() {
    alert("Good Morning!");
}
function goodAfternoon() {
    alert("Good Afternoon!");
}
function goodNight() {
    alert("Good Night!");
}
function specialMessage() {
    alert("Special Message for you.");
}

//User info
function getName() {
    let name= prompt("Enter your Name: ");
    if (name) {
        document.getElementById("displayName").innerText ="Hello " + name + "!";
    }
}
//Calculate Age
function calculateAge() {
    let input = prompt("Enter your Birthday: ");
    if (input) {
        let age;

        // If user types only a year
        if (/^\d{4}$/.test(input)) {
            age = new Date().getFullYear() - parseInt(input);

        } else {
            let birthDate = new Date(input);
            if (!isNaN(birthDate)) {
                let today = new Date();
                age = today.getFullYear() - birthDate.getFullYear();

                if (
                    today.getMonth() < birthDate.getMonth() || 
                    (today.getMonth() == birthDate.getMonth && 
                    today.getDate() < birthDate.getDate())
                ) {
                    age--;
                }
            }
        }
        if (age) {
            document.getElementById("ageResult").innerText = "You are " + age + " years old.";
        } else {
            document.getElementById("ageResult").innerText = "Invalid input. Use YYYY or MM/DD/YYYY";
        }
    }
}
//Get Profile
function getProfile() {
    let fname = prompt("First Name: ");
    let lname = prompt("Last Name: ");
    let hobby = prompt("Favorite Hobby: ");
    let food = prompt("Favorite Food: ");
    document.getElementById("profile").innerText = "Name: " + fname + "" + lname + " | Hobby: " + hobby + " | Food: " + food;
}

function askPermission() {
    let answer = confirm ("May I change the page-bg-color?");
    if (answer) {
        document.body.style.backgroundColor = "lightblue";
    } else {
        alert("Okay, keep original color.")
    }
}

// CHANGE / RESET TEXT
function changeText() {
    document.getElementById("text").innerText = "Text has been changed!";
}
function resetText() {
    document.getElementById("text").innerText = "This is my text.";
}

//MINI CALCULATOR
function simpleCalc() {
    let a = parseInt(prompt("Enter first number: "));
    let b = parseInt(prompt("Enter second number: "));
    if (!isNaN(a) && !isNaN(b)) {
        let result = a + b;
        document.getElementById("calcResult").innerText = a + "+" + "=" + result; 
    }
}