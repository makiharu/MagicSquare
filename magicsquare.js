let selectedNum;
let numberList = document.getElementById("numberList");
numberList.addEventListener("change", () => {
  selectedNum = event.target.value;
  let numberForm = document.getElementById("numberForm");
  if (selectedNum != "" && numberForm) {
    numberForm.remove();

    getJson(selectedNum);
  } else if (selectedNum == "" && numberForm) {
    numberForm.remove();
  } else if (selectedNum != "" && !numberForm) {
    getJson(selectedNum);
  }
});

function getJson(selectedNum) {
  const url = "magicSquare.json";
  let numberInfo;
  let numberArea = document.getElementById("numberArea");
  let numberTableHtml = `
      <form action="List.html" id="numberForm">
            <table id="numberTable">
      `;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      numberInfo = data[selectedNum];
      numberInfo.forEach((row, index) => {
        // console.log("index:" + index);
        // console.log(row["id"] + row["name"] + row["price"]);
        numberTableHtml += `
        <tr>
          <td style="width:40px;height:40px">${row["col1"]}</td>
          <td style="width:40px;height:40px">${row["col2"]}</td>
          <td style="width:40px;height:40px">${row["col3"]}</td>
          <td><div class="red" id="kingaku${index}"></div></td>
        </tr>
        `;
      });
      // numberTableHtml += `</table>
      // <div class="red" id="goukei"></div>
      // <button type="submit">送信する</button>
      // </form>
      // `;
      numberArea.innerHTML = numberTableHtml;
    });
}
