const getData = async () => {
  const response = await fetch("./data.json");
  const data = await response.json();
  return data;
};

const getHighDay = () => {
  spendingData.forEach((element) => {
    if (element.amount > highAmt) {
      highAmt = element.amount;
      highDay = element.day;
    }
  });
};

const renderGraph = () => {
  spendingData.forEach((element) => {
    const domEl = document.querySelector(`#${element.day}`);
    const barFill = domEl.querySelector(".bar-fill");
    const barHover = domEl.querySelector(".bar-hover");
    if (element.day === highDay) {
      barFill.classList.add("high");
      barFill.style.height = "65%";
    } else {
      barFill.style.height = `${(element.amount / highAmt) * 65}%`;
    }
    barHover.textContent = `$${element.amount}`;
    barFill.onmouseover = () => {
      barHover.style.display = "block";
      barFill.style.filter = "brightness(125%)";
    };
    barFill.onmouseout = () => {
      barHover.style.display = "none";
      barFill.style.filter = "brightness(100%)";
    };
  });
};

let highAmt = 0;
let highDay = "";
const spendingData = await getData();
getHighDay();
renderGraph();
