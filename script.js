outcome = ""

document.addEventListener("DOMContentLoaded", () => {
  const clearBtn = document.getElementById("clear");
  const output = document.getElementById("output");

    clearBtn.addEventListener("click", () => {
        output.value = "";
  });

  document.getElementById("sign").addEventListener("click", () => {
        output.value += "-";
  });

    document.getElementById("percent").addEventListener("click", () => {
        output.value += "%";
  });

    document.getElementById("divide").addEventListener("click", () => {
        output.value += "÷";
  });

    document.getElementById("seven").addEventListener("click", () => {
        output.value += "7";
  });

    document.getElementById("eight").addEventListener("click", () => {
        output.value += "8";
  });

    document.getElementById("nine").addEventListener("click", () => {
        output.value += "9";
  });

    document.getElementById("multiply").addEventListener("click", () => {
        output.value += "×";
  });

    document.getElementById("four").addEventListener("click", () => {
        output.value += "4";
  });

    document.getElementById("five").addEventListener("click", () => {
        output.value += "5";
  });

    document.getElementById("six").addEventListener("click", () => {
        output.value += "6";
  });

    document.getElementById("minus").addEventListener("click", () => {
        output.value += "-";
  });

    document.getElementById("one").addEventListener("click", () => {
        output.value += "1";
  });

    document.getElementById("two").addEventListener("click", () => {
        output.value += "2";
  });

    document.getElementById("three").addEventListener("click", () => {
        output.value += "3";
  });

    document.getElementById("plus").addEventListener("click", () => {
        output.value += "+";
  });

      document.getElementById("erase").addEventListener("click", () => {
        output.value = output.value.slice(0, -1);
  });

    document.getElementById("zero").addEventListener("click", () => {
        output.value += "0";
  });

    document.getElementById("decimal").addEventListener("click", () => {
        output.value += ".";
  });

    document.getElementById("equal").addEventListener("click", () => {
        output.value += "";
        outcome = output.value
        outcome = outcome.replace("%", "/100*")
        outcome = outcome.replace("×", "*")
        outcome = outcome.replace("÷", "/")
        output.value = eval(outcome)
        console.log(outcome)
        outcome=output.value
  });
});
console.log("Script loaded!");

