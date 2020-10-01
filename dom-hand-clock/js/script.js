
const fnTest = () => {
setTimeout((() => {
    let secBar = document.querySelector(".hand.secs");
    secBar.classList.remove('secs');
    secBar.classList.add('secs2');
}),1000);
}

fnTest();

