var currentTab = 0; //Current tab
showTab(currentTab);

function showTab(n) {
    var x = document.getElementsByClassName("apply-tab");
    x[n].style.display = "block";
    
    if (n==0) {
        document.getElementById("prev-btn").style.backgroundColor = "black";
    }

    if (n == (x.length - 1)) {
        document.getElementById("next-btn").innerHTML= "Submit";
    } else {
        document.getElementById("next-btn").innerHTML= "Next";
    }

    fixStepIndicator(n)
}

function nextPrev(n) {
    var x = document.getElementsByClassName("apply-tab");

    if (n == 1 && !validateForm()) return false;
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;

    if (currentTab >= x.length) {
        document.getElementById("next-btn").innerHTML= "Submit";
    } 

    showTab(currentTab);    
}

function validateForm() {
    var x, y, i, valid = true;
    x = document.getElementsByClassName("apply-tab");
    y = x[currentTab].getElementsByTagName("input");

    for (i = 0; i < y.length; i++) {
        if (y[i].value == "") {
            y[i].className += "invalid";
            valid = false;
        }
    }

    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += "finish"
    }
    return valid;
}

function fixStepIndicator(n) {
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace("active", "");
    }

    x[n].className += "active";
}