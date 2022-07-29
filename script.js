let p = 0;
let n = 0;
let d = 0;
let q = 0;
let total = 0.00;
document.getElementById("submit").addEventListener("click", (event)=>{
    event.preventDefault();
    const numberOfCoin = document.getElementById("number").value;
    const typeOfCoin = document.getElementById("type").value;
    let container = document.getElementById("container");
    for(i = 0; i < numberOfCoin; i++){
        const newDiv = document.createElement("div");
        newDiv.innerText = `${typeOfCoin}`;
        newDiv.classList.add(`${typeOfCoin}`);
        if(typeOfCoin === "penny"){
            p ++;
            total = total + 0.01 ;
            document.getElementById("totalPennies").innerHTML = `${p} pennies`;
        }else if (typeOfCoin === "nickle"){
            n ++;
            total = total + 0.05 ;
            document.getElementById("totalNickles").innerHTML = `${n} nickles`;
        }else if (typeOfCoin === "dime"){
            d ++;
            total = total + 0.10;
            document.getElementById("totalDimes").innerHTML = `${d} dimes`;
        }else {
            q ++;
            total = total + 0.25;
            document.getElementById("totalQuarters").innerHTML = `${q} quarters`;
        }
        container.appendChild(newDiv);
    }
    adjustedTotal = total.toFixed(2);
    document.getElementById("monetaryValue").innerHTML = `$${adjustedTotal}`;
});

document.getElementById("container").addEventListener("click", (event) =>{
    if(event.target.classList.value === "penny"){
        p --;
        total = total - 0.01;
        document.getElementById("totalPennies").innerHTML = `${p} pennies`;
    } else if (event.target.classList.value === "nickle"){
        n --;
        total = total - 0.05;
        document.getElementById("totalNickles").innerHTML = `${n} nickles`;
    } else if (event.target.classList.value === "dime"){
        d --;
        total = total - 0.10;
        document.getElementById("totalDimes").innerHTML = `${d} dimes`;
    }else {
        q --;
        total = total - 0.25;
        document.getElementById("totalQuarters").innerHTML = `${q} quarters`;
    }
    adjustedTotal = total.toFixed(2);
    const container = document.querySelector("#container");
    container.removeChild(event.target);
    document.getElementById("monetaryValue").innerHTML = `$${adjustedTotal}`;
})