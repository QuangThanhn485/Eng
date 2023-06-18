"use strict";

const textEx = document.querySelector("#root");
const display = document.querySelector("#resuln");
const btnHideOrShowControl = document.querySelector("#hiden");
const control = document.querySelector("#control");

const btn_1 = document.getElementById("bt_1");
const btn_2 = document.getElementById("bt_2");
const btn_3 = document.getElementById("bt_3");

let option = "ex_1";
let statusControl = false;

let resuln = {
    ex1: {
        _1: "near",
        _2: "are the",
        _3: "to put",
        _4: "so",
        _5: "cold as",
    },
    ex2: {
        _1: "tired",
        _2: "gives her",
        _3: "lot of",
        _4: "much does",
        _5: "so expensive",
    },
    ex3: {
        _1: "have enough",
        _2: "took",
        _3: "better",
        _4: "so many",
        _5: "don't you",
    },
};

getText_1();

async function getText_1() {
    btn_1.className = "btn btn-primary";
    btn_2.className = "btn btn-info";
    btn_3.className = "btn btn-info";

    display.innerHTML = ``;
    let _conten = `
    
        <p><strong>Example:</strong></br>0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sebastian had never been camping before.</p>

        <p><strong>This was</strong>&nbsp; ......................................................&nbsp; <strong>Sebastian had been camping.</strong></p>

        <p><strong>Answer</strong>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <em>0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; the first time</em></p>

        <p>&nbsp;</p>


        <p>1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The campsite was not far from the sea.</p>

        <p><strong>The campsite was quite <input type="text" id="ex_1.1"/> &nbsp;the sea.</strong></p>

        <p>&nbsp;</p>

        <p>2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sebastian asked the manager where the showers were.</p>

        <p><strong>Sebastian asked the manager, &#39;Where <input type="text" id="ex_1.2"/> showers?&#39;</strong></p>

        <p>&nbsp;</p>

        <p>3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sebastian succeeded in putting up the tent on his own.</p>

        <p><strong>Sebastian was able <input type="text" id="ex_1.3"/> up the tent on his own.</strong></p>

        <p>&nbsp;</p>

        <p>4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sebastian and his friends went swimming every day.</p>

        <p><strong>Every day Sebastian went swimming and <input type="text" id="ex_1.4"/> did his friends.</strong></p>

        <p>&nbsp;</p>

        <p>5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The sea was warmer than they had expected.</p>

        <p><strong>The sea was not as <input type="text" id="ex_1.5"/> they had expected.</strong></p>

    `;
    textEx.innerHTML = _conten;
    option = "ex_1";
}

async function getText_2() {
    btn_2.className = "btn btn-primary";
    btn_3.className = "btn btn-info";
    btn_1.className = "btn btn-info";
    display.innerHTML = ``;
    let _conten = `
        <p><strong>Example:</strong>&nbsp;&nbsp;&nbsp;&nbsp; My mother lives a long way from the supermarket.</p>

        <p><strong>There isn&#39;t </strong><u>&nbsp;&nbsp;<em>a supermarket near&nbsp; </em></u>&nbsp;<strong>my mother&#39;s house.</strong></p>

        <p>&nbsp;</p>

        <p>1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; When she has to walk to the supermarket she finds it tiring.</p>

        <p><strong>She gets <input type="text" id="ex_2.1"/> when she has to walk to the supermarket.</strong></p>

        <p>2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; She is often driven to the supermarket by her neighbour.</p>

        <p><strong>Her neighbour often <input type="text" id="ex_2.2"/> a lift to the supermarket.</strong></p>

        <p>3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; There are many types of coffee there.</p>

        <p><strong>You can buy a <input type="text" id="ex_2.3"/> types of coffee there.</strong></p>

        <p>4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; She asked an assistant how much the Colombian coffee cost.</p>

        <p><strong>She asked: &#39;How <input type="text" id="ex_2.4"/> the Colombian coffee cost?&#39;</strong></p>

        <p>5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The Colombian coffee cost less than the Kenyan coffee.</p>

        <p><strong>The Colombian coffee wasn&#39;t <input type="text" id="ex_2.5"/> as the Kenyan coffee.</strong></p>
    `;
    textEx.innerHTML = _conten;
    option = "ex_2";
    return;
}
async function getText_3() {
    btn_3.className = "btn btn-primary";
    btn_2.className = "btn btn-info";
    btn_1.className = "btn btn-info";
    display.innerHTML = ``;
    let _conten = `
        <p><strong>Example:</strong>&nbsp;&nbsp;&nbsp;&nbsp; <strong>0</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We had an exhibition of our art work in the school hall last night.</p>

        <p><strong>There .................................................... an exhibition of our art work in the school hall last night.</strong><strong>฀</strong></p>

        <p><em>Answer:</em> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; was</p>

        <p>&nbsp;</p>

        <p>1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Unfortunately we had too many pictures to put on the walls.</p>

        <p><strong>Unfortunately</strong><strong> </strong><strong>we</strong><strong> </strong><strong>didn&rsquo;t <input type="text" id="ex_3.1"/> space for</strong><strong> </strong><strong>all</strong><strong> </strong><strong>our</strong><strong> </strong><strong>pictures.</strong></p>

        <p>2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The photos in the exhibition were taken by the youngest pupils.</p>

        <p><strong>The</strong><strong> </strong><strong>youngest</strong><strong> </strong><strong>pupils <input type="text" id="ex_3.2"/></strong><strong> </strong><strong>the</strong><strong> </strong><strong>photos</strong><strong> </strong><strong>in</strong><strong> </strong><strong>the</strong><strong> </strong><strong>exhibition.</strong></p>

        <p>3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I don&rsquo;t think I put my best pictures in the exhibition.</p>

        <p><strong>I&rsquo;ve</strong><strong> </strong><strong>produced</strong><strong> </strong><strong><input type="text" id="ex_3.3"/></strong><strong> pictures</strong><strong> </strong><strong>than</strong><strong> </strong><strong>the</strong><strong> </strong><strong>ones</strong><strong> </strong><strong>I</strong><strong> </strong><strong>put</strong><strong> </strong><strong>in</strong><strong> </strong><strong>the</strong><strong> </strong><strong>exhibition.</strong></p>

        <p>&nbsp;</p>

        <p>4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; There were such a lot of people that I couldn&rsquo;t find my friends.</p>

        <p><strong>There</strong><strong> </strong><strong>were <input type="text" id="ex_3.4"/> people</strong><strong> </strong><strong>that</strong><strong> </strong><strong>I</strong><strong> </strong><strong>couldn&rsquo;t find</strong><strong> </strong><strong>my</strong><strong> </strong><strong>friends.</strong></p>

        <p>5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Our parents all said that we should have another exhibition soon.</p>

        <p><strong>Our</strong><strong> </strong><strong>parents</strong><strong> </strong><strong>all</strong><strong> </strong><strong>said</strong><strong> &lsquo;</strong><strong>Why <input type="text" id="ex_3.5"/> have</strong><strong> </strong><strong>another</strong><strong> </strong><strong>exhibition</strong><strong> </strong><strong>soon?&rsquo;</strong></p>

    `;
    textEx.innerHTML = _conten;
    option = "ex_3";
    return;
}
async function resulnce() {
    _resuln(option);
}
async function _resuln(_part) {
    const text_1 = document.getElementById("" + _part + ".1");
    const text_2 = document.getElementById("" + _part + ".2");
    const text_3 = document.getElementById("" + _part + ".3");
    const text_4 = document.getElementById("" + _part + ".4");
    const text_5 = document.getElementById("" + _part + ".5");

    let message = ``;

    switch (_part) {
        case "ex_1": {
            message += await displayResuln(resuln.ex1, text_1, text_2, text_3, text_4, text_5);
            break;
        }
        case "ex_2": {
            message += await displayResuln(resuln.ex2, text_1, text_2, text_3, text_4, text_5);
            break;
        }
        case "ex_3": {
            message += await displayResuln(resuln.ex3, text_1, text_2, text_3, text_4, text_5);
            break;
        }
        default: {
            message += `<li class="list-group-item"><strong>Chính xác</strong></li>`;
        }
    }
    display.innerHTML = `
    <ul class="list-group list-group-flush">
        ${message}
    </ul>`;
}

async function displayResuln(item, text_1, text_2, text_3, text_4, text_5) {
    let count = 0;
    let succeeded = 5;
    let message = ``;
    Object.keys(item).map((key) => {
        count++;
        if (count == 1) {
            if (item[key].normalize() != text_1.value.normalize().trim()) {
                message += `<li class="list-group-item">sai câu 1 đáp án là '${item[key]}'</li>`;
                succeeded--;
            }
        }
        if (count == 2) {
            if (item[key].normalize() != text_2.value.normalize().trim()) {
                message += `<li class="list-group-item">sai câu 2 đáp án là '${item[key]}'</li>`;
                succeeded--;
            }
        }
        if (count == 3) {
            if (item[key].normalize() != text_3.value.normalize().trim()) {
                message += `<li class="list-group-item">sai câu 3 đáp án là '${item[key]}'</li>`;
                succeeded--;
            }
        }
        if (count == 4) {
            if (item[key].normalize() != text_4.value.normalize().trim()) {
                message += `<li class="list-group-item">sai câu 4 đáp án là '${item[key]}'</li>`;
                succeeded--;
            }
        }
        if (count == 5) {
            if (item[key].normalize() != text_5.value.normalize().trim()) {
                message += `<li class="list-group-item">sai câu 5 đáp án là '${item[key]}'</li>`;
                succeeded--;
            }
        }
        if (message === `` && count == 5) {
            message += `<li class="list-group-item"><strong>Chính xác</strong></li>`;
        }
    });
    message += `<li class="list-group-item"><strong>đúng ${succeeded}/5 </strong></li>`
    return message;
}

let lastRandom = 0;
async function randomOption() {
    let currentRandomNumber = 1;

    do{
       currentRandomNumber = Math.floor(Math.random() * 3) + 1;
       console.log("gg");
    }while(lastRandom === currentRandomNumber);

    lastRandom = currentRandomNumber

    if (currentRandomNumber === 1) {
        getText_1()
    }
    if (currentRandomNumber === 2) {
        getText_2()
    }
    if (currentRandomNumber === 3) {
        getText_3()
    }
}
function hidenOrshowControl() {
    statusControl = !statusControl;
    if (statusControl) {
        hidenInfo();
    } else showInfo();
}

function hidenInfo() {
    btnHideOrShowControl.innerHTML = ">>>";
    control.style.display = "none";
    displayResuln.className = "g-col-12";
}
function showInfo() {
    btnHideOrShowControl.innerHTML = "<<<";
    control.style.display = "";
    displayResuln.className = "g-col-10";
}

this.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        resulnce();
    }
});
