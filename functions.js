function startCountdown(seconds, displayElement, button) {
    let remainingTime = seconds-1;
    displayElement.style.color = "red"
    button.disabled = true

    const interval = setInterval(function() {
        displayElement.textContent = `${remainingTime} seconds`;

        if (remainingTime <= 0) {
            clearInterval(interval);
            displayElement.style.color = "black"
            displayElement.textContent = "Summoner Up!";
            button.disabled = false
        }

        remainingTime--;
    }, 1000);
}

function startTimerTopSum1() {
    var element = document.getElementById("TopTimer1")
    var button = document.getElementById("startTop1")
    startCountdown(timers[0][0],element, button)
}
function startTimerTopSum2() {
    var element = document.getElementById("TopTimer2")
    var button = document.getElementById("startTop2")
    startCountdown(timers[0][1],element, button)
}
function startTimerJglSum1() {
    var element = document.getElementById("JglTimer1")
    var button = document.getElementById("startJgl1")
    startCountdown(timers[1][0],element, button)
}
function startTimerJglSum2() {
    var element = document.getElementById("JglTimer2")
    var button = document.getElementById("startJgl2")
    startCountdown(timers[1][1],element, button)
}
function startTimerMidSum1() {
    var element = document.getElementById("MidTimer1")
    var button = document.getElementById("startMid1")
    startCountdown(timers[2][0],element, button)
}
function startTimerMidSum2() {
    var element = document.getElementById("MidTimer2")
    var button = document.getElementById("startMid2")
    startCountdown(timers[2][1],element, button)
}
function startTimerAdcSum1() {
    var element = document.getElementById("AdcTimer1")
    var button = document.getElementById("startAdc1")
    startCountdown(timers[3][0],element, button)
}
function startTimerAdcSum2() {
    var element = document.getElementById("AdcTimer2")
    var button = document.getElementById("startAdc2")
    startCountdown(timers[3][1],element, button)
}
function startTimerSupSum1() {
    var element = document.getElementById("SupTimer1")
    var button = document.getElementById("startSup1")
    startCountdown(timers[4][0],element, button)
}
function startTimerSupSum2() {
    var element = document.getElementById("SupTimer2")
    var button = document.getElementById("startSup2")
    startCountdown(timers[4][1],element, button)
}


//Configure Lanes / Modal Window
function configSums(lane) {
    document.getElementById("configModal").style.display = "block"
    currentChangeLane = lane
    document.getElementById("selectSum1").value = sums[lane][0]
    document.getElementById("selectSum2").value = sums[lane][1]
    document.getElementById("cosmicInsightFlag").value = flags[lane][0]
    document.getElementById("lucidityBootsFlag").value = flags[lane][1]

    if (flags[lane][0]) {document.getElementById("cosmicInsightFlag").checked = true} else {document.getElementById("cosmicInsightFlag").checked = false}
    if (flags[lane][1]) {document.getElementById("lucidityBootsFlag").checked = true} else {document.getElementById("lucidityBootsFlag").checked = false}

}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// When the user clicks on <span> (x), close the modal
function closeModalOnX() {
    modal.style.display = "none";
    currentChangeLane = null
}

function applySummonerChanges() {
    modal.style.display = "none"

    //Do Stuff
    sums[currentChangeLane] = [document.getElementById("selectSum1").value, document.getElementById("selectSum2").value]
    flags[currentChangeLane] = [document.getElementById("cosmicInsightFlag").checked, document.getElementById("lucidityBootsFlag").checked]
    assignTimers(currentChangeLane)

    assignPictures()

    flagFlags()

    currentChangeLane = null
}

function flagFlags() {
    switch (currentChangeLane) {
        case 0:
            document.getElementById("showCosmicTop").checked = document.getElementById("cosmicInsightFlag").checked
            document.getElementById("showLucidityTop").checked = document.getElementById("lucidityBootsFlag").checked
        break;
        case 1:
            document.getElementById("showCosmicJgl").checked = document.getElementById("cosmicInsightFlag").checked
            document.getElementById("showLucidityJgl").checked = document.getElementById("lucidityBootsFlag").checked
        break;
        case 2:
            document.getElementById("showCosmicMid").checked = document.getElementById("cosmicInsightFlag").checked
            document.getElementById("showLucidityMid").checked = document.getElementById("lucidityBootsFlag").checked
        break;
        case 3:
            document.getElementById("showCosmicAdc").checked = document.getElementById("cosmicInsightFlag").checked
            document.getElementById("showLucidityAdc").checked = document.getElementById("lucidityBootsFlag").checked
        break;
        case 4:
            document.getElementById("showCosmicSup").checked = document.getElementById("cosmicInsightFlag").checked
            document.getElementById("showLuciditySup").checked = document.getElementById("lucidityBootsFlag").checked
        break;
    }
}

