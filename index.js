const tipBtn = document.getElementById("btn-container");
const showTip = document.getElementById("tip-amount");
const showTotal = document.getElementById("total-amount");
const totalInt = document.getElementById("total-int");
const ppl = document.getElementById("people");
const fields = document.querySelectorAll("input");
const resetBtn = document.getElementById("reset");
const main = document.querySelector("main");
const showEror = document.getElementById("error");
const custTip = document.getElementById("custom-tip");
let tipAmount = 0;
let totalTip = 0;
let totalAmount = 0;
let prevBtn = null;

resetBtn.classList.add("noHover");

function changeTotal() {
    
    if (pplAmt == "") {
        return
    } else {
        totalAmount = parseFloat(totalInt.value);
        calTipAmount = tipAmount * totalAmount;
        
        if (tipAmount === 0 || tipAmount == NaN) {
            tipAmount = 0;
            showTip.textContent = "$" + (tipAmount).toFixed(2);
            showTotal.textContent = "$" + (totalAmount).toFixed(2);
        }
        else {
            showTip.textContent = "$" + ((calTipAmount)/pplAmt).toFixed(2);
            showTotal.textContent = "$" + ((totalAmount + calTipAmount)/pplAmt).toFixed(2);
        }
    }

}

tipBtn.addEventListener("click", e => {
    // alert(e.target.nodeName);
    
    
    if(e.target.nodeName === "BUTTON"){
        tipAmount = (parseInt(e.target.textContent))/100;
        e.target.classList.add("selected");

        if(prevBtn !== null) {
            prevBtn.classList.remove("selected");
        }
        prevBtn = e.target;

    } else if (e.target.nodeName === "INPUT"){
        prevBtn.classList.remove("selected");
        prevBtn = null;
        e.target.addEventListener("blur", e => {
            tipAmount = (parseInt(e.target.value))/100;
            
        });
    }
    changeTotal();
});

custTip.addEventListener("blur", e => {
    if(e.target.value != "") {
        tipAmount = (parseInt(e.target.value))/100;
        changeTotal();
    }
})

// function checkEmpt(elementName) {
//     elementName.addEventListener("blur", e => {
//         if(elementName.value <= 0 ) {
//             showEror.style.display = "inline";
//             elementName.style.outline = "2.5px solid var(--orangered)";
//         } else {
//             changeTotal();
//             showEror.style.display = "none";
//             elementName.style.outline = "2.5px solid var(--Strongcyan)";
    
//             // display reset button
//             resetBtn.style.opacity = "1";
//             resetBtn.classList.remove("noHover");
//             resetBtn.addEventListener("click", e => {
//                 window.location.reload();
//             })
//         }
//     })
// }

// checkEmpt(ppl);
// checkEmpt(totalInt);

ppl.addEventListener("blur", e => {
    pplAmt = parseFloat(ppl.value);
    //alert((pplAmt))

    if(pplAmt > 0 ) {

        showEror.style.display = "none";
        ppl.style.outline = "none";
        //alert(totalInt.value)

        if(totalInt.value == "") {
           return
        } else {
            changeTotal();
            // display reset button
            resetBtn.style.opacity = "1";
            resetBtn.classList.remove("noHover");
            resetBtn.addEventListener("click", e => {
                window.location.reload();
            })
        }
        
    } else {
        showEror.style.display = "inline";
        ppl.style.outline = "2.5px solid var(--orangered)";
        
        if(pplAmt === 0) {
            showEror.textContent = "Can't be zero";
        } else {
            showEror.textContent = "Can't be empty";
        }
    }
})

ppl.addEventListener("focus", e => {
    ppl.style.outline = "2.5px solid var(--Strongcyan)";
})


