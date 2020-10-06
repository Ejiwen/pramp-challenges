const hourHand = document.querySelector(".hourHand");
const muniteHand = document.querySelector(".muniteHand");
const secondHand = document.querySelector(".secondHand");

function getTime() {
  let date = new Date();
  let H = date.getHours();
  let M = date.getMinutes();
  let S = date.getSeconds();

  let hDeg = (H / 12) * 360;
  let mDeg = (M / 60) * 360;
  let sDeg = (S / 60) * 360;
  console.log(S);
  hourHand.style.transform = `translate(0%, -50%) rotate(${hDeg}deg)`;
  muniteHand.style.transform = `translate(0%, -50%) rotate(${mDeg}deg)`;
  secondHand.style.transform = `translate(0%, -50%) rotate(${sDeg}deg)`;
}

setInterval(getTime, 1000);
// getTime();
