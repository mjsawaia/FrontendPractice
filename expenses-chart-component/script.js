const monEl = document.querySelector("#mon");
const tueEl = document.querySelector("#tue");
const wedEl = document.querySelector("#wed");
const thuEl = document.querySelector("#thu");
const friEl = document.querySelector("#fri");
const satEl = document.querySelector("#sat");
const sunEl = document.querySelector("#sun");

const getData = async () => {
  const response = await fetch("./data.json");
  const data = await response.json();
  return data;
};

const getHighDay = () => {
  let highAmt = 0;
  let highDay = "";
  spendingData.forEach((element) => {
    if (element.amount > highAmt) {
      highAmt = element.amount;
      highDay = element.day;
    }
  });
  return highDay;
};

const renderGraph = () => {};

const spendingData = await getData();
const highDay = getHighDay();
