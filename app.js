var fBut = document.getElementById("EnterF");
var randNum = Math.floor(Math.random() * (9 - 1) + 1);
var form = document.getElementById("friendForm");
var ageButton = document.getElementById("EnterAge");

//submit button
var subB = document.createElement("input");
subB.setAttribute("type", "submit");
subB.setAttribute("name", "submitButton");
subB.setAttribute("value", "Submit");
subB.setAttribute("class", "btn form-btn");

//reset button
var reB = document.createElement("input");
reB.setAttribute("type", "button");
reB.setAttribute("name", "reset");
reB.setAttribute("value", "reset");
reB.setAttribute("class", "btn form-btn");

function addInputForm(num) {
    form.hidden = false;
    fBut.disabled = true;

    for (let index = 0; index < num; index++) {
        let lab = document.createElement("label");
        lab.innerHTML = "Friend Number " + (index + 1) + ": ";

        //Name field
        let nam = document.createElement("label");
        nam.innerHTML = "Name:\u00A0";
        let fName = document.createElement("input");
        fName.setAttribute("type", "text");
        fName.setAttribute("name", "fName" + index);
        fName.setAttribute("placeholder", "Enter Friend Name");
        fName.required = true;

        //Age field
        let inpf = document.createElement("label");
        inpf.innerHTML = "\u00A0\u00A0\u00A0Age:\u00A0";
        let inp = document.createElement("input");
        inp.setAttribute("type", "text");
        inp.setAttribute("name", "age" + index);
        inp.setAttribute("placeholder", "Enter Friend Age");
        inp.required = true;

        form.appendChild(lab);
        form.appendChild(document.createElement("br"));
        form.appendChild(nam);
        form.appendChild(fName);
        form.appendChild(inpf);
        form.appendChild(inp);
        form.appendChild(document.createElement("br"));
        form.appendChild(document.createElement("br"));
    }

    form.appendChild(subB);
    form.appendChild(reB);
}

function formSubmit(event) {
    event.preventDefault();
    showFunctions();
}

function showFunctions() {
    subB.disabled = true;

    let sum = document.createElement("button");
    sum.setAttribute("id", "smButton");
    sum.setAttribute("class", "btn form-btn");
    sum.textContent = "Sum age";
    document.getElementById("sum").appendChild(sum);
    document.getElementById("sum").appendChild(document.createElement("br"));
    document.getElementById("sum").appendChild(document.createElement("br"));
    sum.addEventListener("click", sumAge);

    let avg = document.createElement("button");
    avg.setAttribute("id", "agButton");
    avg.setAttribute("class", "btn form-btn");
    avg.textContent = "Average age";
    document.getElementById("avg").appendChild(avg);
    document.getElementById("avg").appendChild(document.createElement("br"));
    document.getElementById("avg").appendChild(document.createElement("br"));
    avg.addEventListener("click", avgAge);

    let min = document.createElement("button");
    min.setAttribute("id", "mnButton");
    min.setAttribute("class", "btn form-btn");
    min.textContent = "Min age";
    document.getElementById("minN").appendChild(min);
    document.getElementById("minN").appendChild(document.createElement("br"));
    document.getElementById("minN").appendChild(document.createElement("br"));
    min.addEventListener("click", minAge);

    let max = document.createElement("button");
    max.setAttribute("id", "mxButton");
    max.setAttribute("class", "btn form-btn");
    max.textContent = "Max age";
    document.getElementById("maxX").appendChild(max);
    document.getElementById("maxX").appendChild(document.createElement("br"));
    document.getElementById("maxX").appendChild(document.createElement("br"));
    max.addEventListener("click", maxAge);
}

function sumAge() {
    sum.disabled = true;

    let len = form.elements.length;
    let sUm = parseInt(0);
    for (let index = 1; index <= len - 2; index += 2) {
        sUm += parseInt(form.elements[index].value, 10);
    }

    let shwTxt = document.createElement("p");
    shwTxt.innerHTML = "จำนวนอายุรวมของเพื่อนทั้งหมด:\u00A0\u00A0" + sUm + "\u00A0ปี";
    document.getElementById("sum").appendChild(shwTxt);
    document.getElementById("sum").appendChild(document.createElement("br"));
}

function avgAge() {
    let len = form.elements.length;
    let sUm = parseInt(0);

    // Summation
    let count = 0;
    for (let index = 1; index <= len - 2; index += 2) {
        sUm += parseInt(form.elements[index].value, 10);
        count++;
    }

    // Average
    let aVg = sUm / count;

    let shwTxt = document.createElement("p");
    shwTxt.innerHTML = "จำนวนอายุเฉลี่ยของเพื่อนทั้งหมด:\u00A0\u00A0" + aVg + "\u00A0ปี";
    document.getElementById("avg").appendChild(shwTxt);
    document.getElementById("avg").appendChild(document.createElement("br"));
}

//Find min age
function minAge() {
    let mIn = 500;
    const minF = [];
    let minFI = 0;
    let len = form.elements.length;

    //loop find min age
    for (let index = 1; index <= len - 2; index += 2) {
        if ((mIn > parseInt(form.elements[index].value, 10))) {
            mIn = parseInt(form.elements[index].value, 10);
            
        }
    }

    for (let index = 1; index <= len - 2; index += 2) {
        if (mIn == parseInt(form.elements[index].value, 10)) {
            minF[minFI] = { Fname: form.elements[index - 1].value, Age: mIn };
            minFI++;
        }
    }

    let frName = "";
    for (let index = 0; index < minF.length; index++) {
        if (index == 0) {
            frName = minF[index].Fname;
        } else { frName += ",\u00A0" + minF[index].Fname; }

    }

    let shwTxt = document.createElement("p");
    shwTxt.innerHTML = "เพื่อนที่อายุน้อยที่สุดเพื่อนทั้งหมด:\u00A0\u00A0" + mIn + "\u00A0ปี\u00A0ได้แก่<br>" + frName;
    document.getElementById("minN").appendChild(shwTxt);
    document.getElementById("minN").appendChild(document.createElement("br"));
}

//Find max age
function maxAge() {
    let mAx = -500;
    let len = form.elements.length;
    const maxF = [];
    let maxFI = 0;

    //loop find max age
    for (let index = 1; index <= len - 2; index += 2) {
        if ((mAx < parseInt(form.elements[index].value, 10))) {
            mAx = parseInt(form.elements[index].value, 10);
        }
    }

    for (let index = 1; index <= len - 2; index += 2) {
        if (mAx == parseInt(form.elements[index].value, 10)) {
            maxF[maxFI] = { Fname: form.elements[index - 1].value, Age: mAx };
            maxFI++;
        }
    }

    let frName = "";
    for (let index = 0; index < maxF.length; index++) {
        if (index == 0) {
            frName = maxF[index].Fname;
        } else { frName += ",\u00A0" + maxF[index].Fname; }

    }

    let shwTxt = document.createElement("p");
    shwTxt.innerHTML = "เพื่อนที่อายุมากที่สุดเพื่อนทั้งหมด:\u00A0\u00A0" + mAx + "\u00A0ปี\u00A0ได้แก่<br>" + frName;
    document.getElementById("maxX").appendChild(shwTxt);
    document.getElementById("maxX").appendChild(document.createElement("br"));
}

function rePage() {
    window.location.reload()
}

document.getElementById("randNum").innerHTML = "The number of friends to enter is: " + randNum;
fBut.addEventListener("click", function () { addInputForm(randNum) });
subB.addEventListener("click", formSubmit);
reB.addEventListener("click", rePage);