let number;
let numberList = document.getElementById("numberList");
numberList.addEventListener("change", (e) => {
  number = e.target.value;
  console.log(number);
  let numberForm = document.getElementById("numberForm");
  if (number != "" && numberForm) {
    numberForm.remove();
    getJson(number);
  } else if (number == "" && numberForm) {
    numberForm.remove();
  } else if (number != "" && !numberForm) {
    getJson(number);
  }
});
