'use strict'

let counter = 0;
let counter1 = 0;

async function getAns(ciphertext) {
    const x = document.getElementById('dropp').innerText;
    const y = document.getElementById('dropp1').innerText;
    const question = {
        type: "question",
        text: ciphertext,
        from: x,
        to: y
    }

    var myPlain = await fetch('/answer.me', {
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
            // console.log(data);
            document.getElementById('plaintext').value = data;
        });
    } else if (counter % 5 == 0) {
        alert("Can't fool me, can You?");
    }
    counter++;
    return false;
}

function runFunk2() {
    const element1 = document.getElementById('plaintext').value;
    const element2 = document.getElementById('ciphertext').value;
    if (element1 != "") {
        document.getElementById('plaintext').value = "";
    }
    if (element2 != "") {
        document.getElementById('ciphertext').value = "";
    }
    if ((element1 == "" || element2 == "") && (counter1 % 5 == 0)) {
        alert("Can you not play wise!\nNo Value to clear!");
    }
    counter1++;
    return false;
}

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
    {
        if (event.target.matches('.hex')) {
            document.getElementById('dropp').innerText = 'Hex';
        }
        if (event.target.matches('.bs64')) {
            document.getElementById('dropp').innerText = 'Base64';
        }
        if (event.target.matches('.bs32')) {
            document.getElementById('dropp').innerText = 'Base32';
        }
        if (event.target.matches('.bs85')) {
            document.getElementById('dropp').innerText = 'Base85';
        }
        if (event.target.matches('.r13')) {
            document.getElementById('dropp').innerText = 'ROT13';
        }
        if (event.target.matches('.plain')) {
            document.getElementById('dropp').innerText = 'Plaintext';
        }
    }

    // OUTPUT
    {
        if (event.target.matches('.hex1')) {
            document.getElementById('dropp1').innerText = 'Hex';
        }
        if (event.target.matches('.bs641')) {
            document.getElementById('dropp1').innerText = 'Base64';
        }
        if (event.target.matches('.bs321')) {
            document.getElementById('dropp1').innerText = 'Base32';
        }
        if (event.target.matches('.bs851')) {
            document.getElementById('dropp1').innerText = 'Base85';
        }
        if (event.target.matches('.r131')) {
            document.getElementById('dropp1').innerText = 'ROT13';
        }
        if (event.target.matches('.plain')) {
            document.getElementById('dropp1').innerText = 'Plaintext';
        }
    }

}

function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show1");
}