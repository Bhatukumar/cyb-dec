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

    if(!myPlain.ok){
        throw new Error(`Request Failed with status: ${myPlain.status}`)
    }

    let answer = await myPlain.text();
    return answer;
}

function runFunk1() {
    var ciphertext = document.getElementById('ciphertext').value;
    if (ciphertext != "") {
        // send cipher and get output
        getAns(ciphertext).then( data => {
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
    }if (element2 != "") {
        document.getElementById('ciphertext').value = "";
    } else if(element1 != "" || element2 != "") {
        alert("Can you not play wise!\nNo Value to clear!");
    }
    return false;
}