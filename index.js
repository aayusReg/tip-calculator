let tip = null;
let billAmount = null;
let tipRate = null;

const promptValues = () => {
  billAmount = prompt("Enter bill amount: ");
  tipRate = prompt("Enter tip rate: ");
};

const calculateTip = (billAmount, tipRate) => {
  return Math.round(billAmount * (tipRate / 100));
};

const typeCheck = (billAmount, tipRate) => {
  if (
    isNaN(billAmount) ||
    isNaN(tipRate) ||
    billAmount === "" ||
    billAmount === " " ||
    tipRate === "" ||
    tipRate === " " ||
    billAmount < 0 ||
    tipRate < 0
  ) {
    console.log("Please Enter Valid Numbers!");
    return false;
  } else {
    return true;
  }
};
