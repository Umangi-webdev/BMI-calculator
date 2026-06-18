document.getElementById("bmiform").addEventListener("submit", function (e) {
  e.preventDefault();

  const gender = document.getElementById("gender").value;
  // console.log(gender);
  const age = parseInt(document.getElementById("age").value);
  const weight = parseInt(document.getElementById("weight").value);
  const heightFeet = parseInt(document.getElementById("feet").value);
  const heightInches = parseInt(document.getElementById("inches").value);

  if (gender && age && heightFeet && heightInches && weight) {
    const heightInMeters = (heightFeet * 12 + heightInches) * 0.0254;
    const bmi = weight / (heightInMeters * heightInMeters);
    const resultElement = document.getElementById("result");

    let category = "";

    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 29.9) {
      category = 'Normalweight';
    } else if (bmi >= 25 && bmi < 29.5) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }

    let resultMessage = 'Your Bmi: ' + bmi.toFixed(2) + '<br>';
    resultMessage += 'Category: ' + category;
    resultElement.innerHTML = resultMessage;
  }
});