// Area of Trapezoid JS Asgn

// Event listener
document.getElementById("calc-btn").addEventListener("click", Calculations);

// Event function
function Calculations() {
    // Input
    let lengthA = +document.getElementById("lengthA").value;
    let lengthB = +document.getElementById("lengthB").value;
    let height = +document.getElementById("height").value;

    // Process
    // Area = ((a+b)/2)*h
    let area = (((lengthA + lengthB) / 2) * height);

    // Output
    document.getElementById("area-tra").innerHTML = area;
}