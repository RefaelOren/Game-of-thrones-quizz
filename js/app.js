'use strict';

// Model
var gQuests = [
    {
        id: 1,
        opts: ['Kalisy had 3 of us', 'We are just a legend'],
        correctOptIdx: 0,
    },
    { id: 2, opts: ['He know it all', 'He know nothing'], correctOptIdx: 1 },
    {
        id: 3,
        opts: ['Winter is coming', 'Always pay his debt'],
        correctOptIdx: 0,
    },
];
var gCurrQuestIdx = 0;

function onInit() {
    renderQuest(gCurrQuestIdx);
}

function onCheckAnswer(elOpt) {
    var elText = elOpt.innerText;
    var corrIdx = gQuests[gCurrQuestIdx].correctOptIdx;
    var corrAnswer = gQuests[gCurrQuestIdx].opts[corrIdx];

    if (elText === corrAnswer) {
        gCurrQuestIdx++;

        var rightSound = new Audio('sounds/corect.m4a');
        rightSound.play();
    } else {
        var wrongSound = new Audio('sounds/wrong.m4a');
        wrongSound.play();
    }
    console.log(gCurrQuestIdx);
    if (gCurrQuestIdx === gQuests.length) {
        showVictory();
        return;
    }
    renderQuest(gCurrQuestIdx);
}

function showVictory() {
    var elImgCon = document.querySelector('.card-container');
    var strHTML = `<img src="./images/victory.jpg" alt="victory"/> `;
    elImgCon.innerHTML = strHTML;
    setTimeout(() => {
        var victorySound = new Audio('sounds/victorios.m4a');
        victorySound.play();
    }, 2000);

    var strBtnHTML = `<button onclick="onRestart()">Restark</button>`;
    var elConOpt = document.querySelector('.options-container');
    elConOpt.innerHTML = strBtnHTML;

    var elH3 = document.querySelector('h3');
    elH3.style.opacity = '0';
}

function onRestart() {
    location.reload();
}

function renderQuest(idx) {
    var strImgHTML = `
    <img src="./images/${idx + 1}.jpg" alt="card"/>`;
    var elImg = document.querySelector('.card-container');
    elImg.innerHTML = strImgHTML;

    var strOptHTML = `<div onclick="onCheckAnswer(this)" class="option option1">
                           ${gQuests[idx].opts[0]}
                      </div>
                      <div onclick="onCheckAnswer(this)" class="option option1">
                           ${gQuests[idx].opts[1]}
                      </div>`;
    var elOpts = document.querySelector('.options-container');
    elOpts.innerHTML = strOptHTML;
}
