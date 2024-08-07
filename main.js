var timers
var sums
var flags

var timerHandles
var currentChangeLane

/*Table 
Sums - Numbers
0 - Barrier - 180
1 - Exhaust - 240
2 - Flash - 300
3 - Ghost - 240
4 - Heal - 240
5 - Ignite - 180
6 - Smite - 90
7 - Teleport - 360
8 - unleashed Teleport - 240
9 - cleanse - 240

cosmicInsight - 18 - 0.847
ludicidyBoots - 12 - 0.893
both - 30 - 0.769

Lanes - Numbers
0 - Top
1 - Jgl
2 - Mid
3 - Bot
4 - Sup

*/

//Gui vars
var form
var span
var modal


function setup() {
    loadGuiVars()

    timers = []
    sums = []
    flags = []

    timerHandles = []

    timers[0] = [240,360]
    timers[1] = [300,10]
    timers[2] = [300,180]
    timers[3] = [300,240]
    timers[4] = [300,240]

    flags[0] = [false, false]
    flags[1] = [false, false]
    flags[2] = [false, false]
    flags[3] = [false, false]
    flags[4] = [false, false]

    sums[0] = ["Ghost", "Teleport"]
    sums[1] = ["Flash", "Smite"]
    sums[2] = ["Flash", "Ignite"]
    sums[3] = ["Flash", "Heal"]
    sums[4] = ["Flash", "Exhaust"]

    for (var i=0;i<5;i++) {
        assignTimers(i)
    }

    timerHandles[0] = [document.getElementById("startTop1"), document.getElementById("startTop2")]
    timerHandles[1] = [document.getElementById("startJgl1"), document.getElementById("startJgl2")]
    timerHandles[2] = [document.getElementById("startMid1"), document.getElementById("startMid2")]
    timerHandles[3] = [document.getElementById("startAdc1"), document.getElementById("startAdc2")]
    timerHandles[4] = [document.getElementById("startSup1"), document.getElementById("startSup2")]

    assignPictures()

}

function draw() {
    
}

function assignPictures() {
    var imagPath = "img/summoners/"
    for (var i=0; i<5; i++) {
        for (var j=0; j<2; j++) {
            switch (sums[i][j]) {
                case "Barrier":
                    timerHandles[i][j].src = imagPath + "Barrier.png"
                break;
                case "Exhaust":
                    timerHandles[i][j].src = imagPath + "Exhaust.png"
                break;
                case "Flash":
                    timerHandles[i][j].src = imagPath + "Flash.png"
                break;
                case "Ghost":
                    timerHandles[i][j].src = imagPath + "Ghost.png"
                break;
                case "Heal":
                    timerHandles[i][j].src = imagPath + "Heal.png"
                break;
                case "Ignite":
                    timerHandles[i][j].src = imagPath + "Ignite.png"
                break;
                case "Smite":
                    timerHandles[i][j].src = imagPath + "Smite.png"
                break;
                case "Teleport":
                    timerHandles[i][j].src = imagPath + "Teleport.png"
                break;
                case "unleashedTeleport":
                    timerHandles[i][j].src = imagPath + "Teleport.png"
                break;
                case "cleanse":
                    timerHandles[i][j].src = imagPath + "Cleanse.png"
                break;

            } 
        }
    }
}

function assignTimers(lane) {
    var mult = 100
    for (var i=0;i<2;i++) {
        switch (sums[lane][i]) {
            case "Barrier":
                timers[lane][i] = 180
            break;
            case "Exhaust":
                timers[lane][i] = 240
            break;
            case "Flash":
                timers[lane][i] = 300
            break;
            case "Ghost":
                timers[lane][i] = 240
            break;
            case "Heal":
                timers[lane][i] = 240
            break;
            case "Ignite":
                timers[lane][i] = 180
            break;
            case "Smite":
                timers[lane][i] = 90
            break;
            case "Teleport":
                timers[lane][i] = 360
            break;
            case "unleashedTeleport":
                timers[lane][i] = 240
            break;
            case "cleanse":
                timers[lane][i] = 240
            break;
        }
    }
    if (flags[lane][0]) {mult +=18}
    if (flags[lane][1]) {mult += 12}
    for (var i=0;i<2;i++) {
        timers[lane][i] *= 100 / mult
        timers[lane][i] = Math.floor(timers[lane][i])
    }
}

function loadGuiVars() {
    modal = document.getElementById('configModal');
    span = document.getElementsByClassName('close')[0];
    form = document.getElementById('configForm');
}