const ones = document.querySelector(".ones");
const tens = document.querySelector(".tens");

setInterval(counter, 1000);

function counter(){
    let onesValue = parseInt(ones.textContent,10);
    let tensValue = parseInt(tens.textContent,10);
    ones.innerHTML = onesValue+1;
    if(onesValue == 9) {
        ones.innerHTML = 0;
        tens.innerHTML = tensValue+1;
        if(tensValue == 5) {
        tens.innerHTML = 0;
    }
    }
    
}