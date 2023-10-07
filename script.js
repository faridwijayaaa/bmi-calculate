let weight = document.getElementById("weight");
let height = document.getElementById("height");
let calculateBtn = document.getElementById("btn-calculate");
let resultCalculate = document.getElementById("result");

let checkBMI = () => {
  let x = Number.parseFloat((height.value / 100) ** 2);
  let result = weight.value / x;
  let resultText = "";

  if (result < 18.5) {
    resultText = "Underweight";
  } else if (result > 18.5 && result < 24.9) {
    resultText = "Normal";
  } else if (result > 24.9 && result < 29.9) {
    resultText = "Overweight";
  } else if (result > 29.9) {
    resultText = "Obesity";
  }

  return {
    value: result.toFixed(1),
    status: resultText,
  };
};

calculateBtn.addEventListener("click", (event) => {
  event.preventDefault;

  resultCalculate.innerHTML = `
    <p>
        Your BMI is
        <strong>
            <span>${checkBMI().value}</span>
        </strong>
        which means You are
        <strong>
            ${checkBMI().status}
        </strong>
    </p>
  `;
});
