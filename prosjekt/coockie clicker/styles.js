console.log("Programmet starter..");

let score = 0;
let clickValue = 1;
const scoreElement = document.getElementById('score');
const clickValueElement = document.getElementById('click-value');
const upgradeButton = document.getElementById('upgrade');
const cookieButton = document.getElementById('cookie');


function updateScore() {
    scoreElement.textContent = `Score: ${score}`;
}


function updateClickValue() {
    clickValueElement.textContent = `Click Value: ${clickValue}`;
}

cookieButton.addEventListener('click', () => {
    score += clickValue;
    updateScore();
});

upgradeButton.addEventListener('click', oppgrader); 

function oppgrader() {
    console.log("oppgradering");
    if (score >= 50) {
        score -= 50;
        clickValue += 1;
        updateScore();
        updateClickValue();
    }
    //checkUpgradeAvailability();
}

//function checkUpgradeAvailability() {
//    upgradeButton.disabled = score < 50;
//}

updateScore();
updateClickValue();
//checkUpgradeAvailability();

