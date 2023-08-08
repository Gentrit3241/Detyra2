// LEFT DIV

const billInput = document.querySelector(".billInput");

const fiveTip = document.querySelector(".tip:nth-of-type(1)");
const tenTip = document.querySelector(".tip:nth-of-type(2)");
const fifteenTip = document.querySelector(".tip:nth-of-type(3)");
const twentyfiveTip = document.querySelector(".tip:nth-of-type(4)");
const fiftyTip = document.querySelector(".tip:nth-of-type(5)");
const customTip = document.querySelector(".customInput");

const peopleNum = document.querySelector(".peopleNum");

// RIGHT DIV

const tipAmount = document.querySelector(".tipAmount");

const totalAmount = document.querySelector(".totalAmount");


const resetButton = document.querySelector("button");

// STARTING VALUES = 0

billInput.value = null;

fiveTip.value = null;
tenTip.value = null;
fifteenTip.value = null;
twentyfiveTip.value = null;
fiftyTip.value = null;
customTip.value = null;

peopleNum.value = null;

// BILL

billInput.addEventListener("input", (event)=> {

    let numValue = peopleNum.value
    if (peopleNum.value == false) {
        numValue = 1;
    }

    totalAmount.innerHTML = "$" + (parseFloat(billInput.value).toFixed(2));
    tipAmount.innerHTML = "$0.00";

    billFunksioni = (vlera, numer) => {
        if (vlera.value !== null || "") {
            // Nese kemi dhene vlere te "Bill"-it dhe vlere te "Tip"-it dhe duam te nderrojme vleren e "Bill"-it
            let tip = numer;
            tip = billInput.value*(numer/100);

            tipAmount.innerHTML = "$" + tip.toFixed(2);
            totalAmount.innerHTML = "$" + (parseFloat(billInput.value) + tip).toFixed(2);

            if (peopleNum.value !== null) {
                // Nese kemi dhene vlere te "Bill"-it dhe(por jo domosdoshmerisht) vlere te "Tip"-it dhe vlere te numrit te personave dhe duam te ndryshojme vleren e "Bill"-it
                let numValue = peopleNum.value;
                if (numValue == false) {
                    numValue = 1;
                } 
                let value = billInput.value*(numer/100);

                tipAmount.innerHTML = "$" + (value/parseInt(numValue)).toFixed(2);
                totalAmount.innerHTML = "$" + ((parseFloat(billInput.value) + value)/parseInt(numValue)).toFixed(2);

            }
        }
    }

    billFunksioni(customTip, customTip.value);
    billFunksioni(fiveTip, 5);
    billFunksioni(tenTip, 10);
    billFunksioni(fifteenTip, 15);
    billFunksioni(twentyfiveTip, 25);
    billFunksioni(fiftyTip, 50);


    if (billInput.value == false) {
        // Nese pasi kemi dhene vlere te "Bill"-it dhe pastaj e shlyejme kete vlere (qe te mos shfaqet ne "totalAmount" ---> "$NaN")
        totalAmount.innerHTML = "$0.00"
    }

})

// TIPS

const tipFunksioni = (percent, percentValue) => {
    percent.addEventListener("click", (event)=> {

    // CSS-KODI (outline) i vendosur ne tipin e klikuar
        fiveTip.style.outline = "none";
        tenTip.style.outline = "none";
        fifteenTip.style.outline = "none";
        twentyfiveTip.style.outline = "none";
        fiftyTip.style.outline = "none";
        customTip.style.outline = "none";

        event.target.style.outline = "8px #98AFC1 solid";


        fiveTip.style.textDecoration = "none";
        tenTip.style.textDecoration = "none";
        fifteenTip.style.textDecoration = "none";
        twentyfiveTip.style.textDecoration = "none";
        fiftyTip.style.textDecoration = "none";

        event.target.style.textDecoration = "underline";
    // CSS-KODI (outline) i vendosur ne tipin e klikuar


        fiveTip.value = null;
        tenTip.value = null;
        fifteenTip.value = null;
        twentyfiveTip.value = null;
        fiftyTip.value = null;
        customTip.value = null;
        // nese preket nje tip, tipet tjera marrin vleren "null"


    percent.value = billInput.value*(percentValue/100);
    tipAmount.innerHTML = "$" + percent.value.toFixed(2);
    totalAmount.innerHTML = "$" + (parseFloat(billInput.value) + percent.value).toFixed(2);

    if (peopleNum.value !== null) {
        // Nese kemi dhene vlere te "Bill"-it dhe(por jo domosdoshmerisht) vlere te "Tip"-it dhe vlere te numrit te personave dhe duam te ndryshojme vleren kryesore te "Bill"-it
        let numValue = peopleNum.value;
        if (numValue == false) {
            numValue = 1;
        } 
        let value = billInput.value*(percentValue/100);

        tipAmount.innerHTML = "$" + (value/parseInt(numValue)).toFixed(2);
        totalAmount.innerHTML = "$" + ((parseFloat(billInput.value) + value)/parseInt(numValue)).toFixed(2);

    }
    if (billInput.value == false) {
        // Nese pasi kemi dhene vlere te "Tip"-it pa dhene vlere te "Bill"-it
        totalAmount.innerHTML = "$0.00"
    }
})
}


tipFunksioni(fiveTip, 5);
tipFunksioni(tenTip, 10);
tipFunksioni(fifteenTip, 15);
tipFunksioni(twentyfiveTip, 25);
tipFunksioni(fiftyTip, 50);

customTip.addEventListener("input", (event) => {

    // CSS-KODI (outline) i vendosur ne tipin e klikuar
        fiveTip.style.outline = "none";
        tenTip.style.outline = "none";
        fifteenTip.style.outline = "none";
        twentyfiveTip.style.outline = "none";
        fiftyTip.style.outline = "none";

        customTip.style.outline = "8px #98AFC1 solid";


        fiveTip.style.textDecoration = "none";
        tenTip.style.textDecoration = "none";
        fifteenTip.style.textDecoration = "none";
        twentyfiveTip.style.textDecoration = "none";
        fiftyTip.style.textDecoration = "none";
    // CSS-KODI (outline) i vendosur ne tipin e klikuar



    // customTip permban event te veqant pasiqe duhet te jete i tipit "input", per dallim nga tipet tjera qe jane "click"
    fiveTip.value = null;
    tenTip.value = null;
    fifteenTip.value = null;
    // nese preket nje tip, tipet tjera marrin vleren "null"
    twentyfiveTip.value = null;
    fiftyTip.value = null;

    tip = billInput.value*(customTip.value/100);
    tipAmount.innerHTML = "$" + tip.toFixed(2);
    totalAmount.innerHTML = "$" + (parseFloat(billInput.value) + tip).toFixed(2);
 
    if (peopleNum.value !== null) {
        // Nese kemi dhene vlere te "Bill"-it dhe pastaj vlere te numrit te personave dhe duam te japim vlere te "Tip"-it, apo nese kemi dhene vlere te "Bill"-it dhe vlere te "Tip"-it dhe pastaj vlere te numrit te personave                                           dhe duam te ndryshojme vleren e "Tip"-it
        let numValue = peopleNum.value;
        if (numValue == false) {
            numValue = 1;
        } 
        let value = billInput.value*(customTip.value/100);

        tipAmount.innerHTML = "$" + (value/parseInt(numValue)).toFixed(2);
        totalAmount.innerHTML = "$" + ((parseFloat(billInput.value) + value)/parseInt(numValue)).toFixed(2);

    }

    if (billInput.value == false) {
        // Nese pasi kemi dhene vlere te "customTip"-it pa dhene vlere te "Bill"-it
        totalAmount.innerHTML = "$0.00"
    }
})

// NUMBER OF PEOPLE

ifFunksioni = (tip, vlere) => {
    if (tip.value !== null /* || undefined ??*/ || "") {
            let value = tip.value;
            value = billInput.value*(vlere/100);

            tipAmount.innerHTML = "$" + (value/parseInt(numValue)).toFixed(2);
            totalAmount.innerHTML = "$" + ((parseFloat(billInput.value) + value)/parseInt(numValue)).toFixed(2);
    }
}

peopleNum.addEventListener("input", ()=> {
    numValue = peopleNum.value;
    if (numValue == false) {
        numValue = 1;
    } 

    ifFunksioni(customTip, customTip.value);
    ifFunksioni(fiveTip, 5);
    ifFunksioni(tenTip, 10);
    ifFunksioni(fifteenTip, 15);
    ifFunksioni(twentyfiveTip, 25);
    ifFunksioni(fiftyTip, 50);

    if (billInput.value == false) {
        // Nese pasi kemi dhene vlere te numrit te personave pa dhene vlere te "Bill"-it
        totalAmount.innerHTML = "$0.00"
    }

 })

 
 // RESET BUTTON

resetButton.addEventListener("click", ()=> {
    tipAmount.innerHTML = "$0.00";
    totalAmount.innerHTML = "$0.00"
    
    billInput.value = null;

    fiveTip.value = null;
    tenTip.value = null;
    fifteenTip.value = null;
    twentyfiveTip.value = null;
    fiftyTip.value = null;
    customTip.value = null;

    peopleNum.value = null;


    // CSS-KODI (outline) i vendosur ne tipin e klikuar
        fiveTip.style.outline = "none";
        tenTip.style.outline = "none";
        fifteenTip.style.outline = "none";
        twentyfiveTip.style.outline = "none";
        fiftyTip.style.outline = "none";
        customTip.style.outline = "none";

        fiveTip.style.textDecoration = "none";
        tenTip.style.textDecoration = "none";
        fifteenTip.style.textDecoration = "none";
        twentyfiveTip.style.textDecoration = "none";
        fiftyTip.style.textDecoration = "none";
    // CSS-KODI (outline) i vendosur ne tipin e klikuar
})




















