let form = document.querySelector("form");
let result = document.getElementById("result");

form.addEventListener("submit", (e)=> {
    e.preventDefault(); //will stop the reload after submission;

    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    if( weight <=0 || height<=0) {
        result.innerText=" Enter a Realistic Value Please";
        return;
    }

    let heightMeter = height / 100;
    let bmi = weight / (heightMeter * heightMeter);
    let bmiStatus ="";
    if(bmi < 18){
        bmiStatus = " UnderWeight";
    }

    else if( bmi >= 18 && bmi <25){
        bmiStatus = "Normal Weight";
    }

    else if( bmi >= 25 && bmi <30){
        bmiStatus = "OverWeight";
    }

    else{
        bmiStatus = "Obese"
    }

    result.innerText = `আপনার BMI: ${bmi.toFixed(2)} (${bmiStatus})`;
})