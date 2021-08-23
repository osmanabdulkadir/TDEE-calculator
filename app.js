let gender = document.getElementById("gender");
let age = document.getElementById("age");
let weigth = document.getElementById("weigth");
let heigth = document.getElementById("heigth");
let activity = document.getElementById("activty");
let output = document.getElementById("output");

const submit = document.getElementById("Calculate")

submit.addEventListener("click", calculateTDEE);

 function calculateTDEE() {

// Women BMR = 655 + (9.6 X weight in kg) + (1.8 x height in cm) – (4.7 x age in yrs)
 //Men BMR = 66 + (13.7 X weight in kg) + (5 x height in cm) – (6.8 x age in yrs)


 let bmr;
 let mulityplier;

 if(activity.value = "Sedentary") {
     mulityplier = 1.2;
 } else if(activity.value = "Lightly Active") {
     mulityplier = 1.375;
 } else if(activity.value = "Moderately Active") {
    mulityplier = 1.55;
} else if(activity.value = "Very Active") {
    mulityplier = 1.725;
} else {
    mulityplier = 1.9;
}

 if(gender == 'Male'){

     bmr =  66 + (13.7 * weigth.value) + (5 * heigth.value) - (6.8 * age.value) * mulityplier;
     output.innerText = `your TDEE is ${Math.round(bmr)} Calories`
 } else {
      bmr =  655 + (9.6 * weigth.value) + (51.8 * heigth.value) - (4.7 * age.value) * mulityplier;
         output.innerText = `your TDEE is ${Math.round(bmr)} Calories`
 }

}


