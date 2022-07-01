'use strict'

async function getAns(ciphertext) {
    const question = {
        type: "question",
        text: ciphertext
    }

    let myPlain = await fetch('/answer.me', {
        method: 'POST',
        body: JSON.stringify(question),
        headers: {
            "content-Type": "application/json"
        }
    })

    if (!myPlain.ok) {
        throw new Error(`Request Failed with status: ${myPlain.status}`)
    }

    let answer = await myPlain.text();
    return answer;
}

function runFunk1() {
    var ciphertext = document.getElementById('ciphertext').value;
    if (ciphertext != "") {
        // send cipher and get output
        getAns(ciphertext).then(data => {
            document.getElementById('plaintext').value = data;
        });
    } else {
        alert("Can't fool me, can You?");
    }
    return false;
}

function runFunk2() {
    const element1 = document.getElementById('plaintext').value;
    const element2 = document.getElementById('ciphertext').value;
    if (element1 != "") {
        document.getElementById('plaintext').value = "";
    } if (element2 != "") {
        document.getElementById('ciphertext').value = "";
    } else if (element1 != "" || element2 != "") {
        alert("Can you not play wise!\nNo Value to clear!");
    }
    return false;
}


// dropdown list function

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    if (!event.target.matches('.dropbtn1')) {
        var dropdowns = document.getElementsByClassName("dropdown-content1");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show1')) {
                openDropdown.classList.remove('show1');
            }
        }
    }

    // INPUT
    if(event.target.matches('.hex')){
        document.getElementById('dropp').innerText = 'Hex';
    }
    if(event.target.matches('.bs64')){
        document.getElementById('dropp').innerText = 'Base64';
    }
    if(event.target.matches('.r13')){
        document.getElementById('dropp').innerText = 'ROT13';
    }
    if(event.target.matches('.bin')){
        document.getElementById('dropp').innerText = 'Binary';
    }
    if(event.target.matches('.dec')){
        document.getElementById('dropp').innerText = 'Decimal';
    }
    if(event.target.matches('.lcase')){
        document.getElementById('dropp').innerText = 'Lower Case';
    }
    if(event.target.matches('.ucase')){
        document.getElementById('dropp').innerText = 'Upper Case';
    }
    if(event.target.matches('.morse')){
        document.getElementById('dropp').innerText = 'Morse Code';
    }

    // OUTPUT
    if(event.target.matches('.hex1')){
        document.getElementById('dropp1').innerText = 'Hex';
    }
    if(event.target.matches('.bs641')){
        document.getElementById('dropp1').innerText = 'Base64';
    }
    if(event.target.matches('.r131')){
        document.getElementById('dropp1').innerText = 'ROT13';
    }
    if(event.target.matches('.bin1')){
        document.getElementById('dropp1').innerText = 'Binary';
    }
    if(event.target.matches('.dec1')){
        document.getElementById('dropp1').innerText = 'Decimal';
    }
    if(event.target.matches('.lcase1')){
        document.getElementById('dropp1').innerText = 'Lower Case';
    }
    if(event.target.matches('.ucase1')){
        document.getElementById('dropp1').innerText = 'Upper Case';
    }
    if(event.target.matches('.morse1')){
        document.getElementById('dropp1').innerText = 'Morse Code';
    }
}

function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show1");
}
