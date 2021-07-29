const c00 = document.querySelector('div#c00')
const c01 = document.querySelector('div#c01')
const c02 = document.querySelector('div#c02')
const c10 = document.querySelector('div#c10')
const c11 = document.querySelector('div#c11')
const c12 = document.querySelector('div#c12')
const c20 = document.querySelector('div#c20')
const c21 = document.querySelector('div#c21')
const c22 = document.querySelector('div#c22')
const reset = document.querySelector('button#resetGame')
const message = document.querySelector('div.message')
const sound = document.querySelector('button#sound')

var audio = new Audio('zapsplat_technology_computer_mouse_click_apple_003_47279.mp3');
var audioWin = new Audio('cartoon_success_fanfair.mp3');
var audioOverall = new Audio('music_david_gwyn_jones_hope_not_hate_instrumental.mp3');

var soundInput = false;

sound.addEventListener("click", function (e) {
    soundInput = !soundInput;
    if (soundInput == true) {
        audioOverall.play();
    }
    else {
        audioOverall.pause();
    }
}
)

var input = false;

const object = {
    c00: "a",
    c01: "b",
    c02: "c",
    c10: "d",
    c11: "e",
    c12: "f",
    c20: "g",
    c21: "h",
    c22: "i"
}
// console.log(object.c00object)

reset.addEventListener("click", function (e) {
    counter = 9;
    object.c00 = "a"
    object.c01 = "b"
    object.c02 = "c"
    object.c10 = "d"
    object.c11 = "e"
    object.c12 = "f"
    object.c20 = "g"
    object.c21 = "h"
    object.c22 = "i"
    // for(obj in object){
    //     symbol(object[obj],obj);
    // }
    symbol(object.c00, c00);
    symbol(object.c01, c01);
    symbol(object.c02, c02);
    symbol(object.c10, c10);
    symbol(object.c11, c11);
    symbol(object.c12, c12);
    symbol(object.c20, c20);
    symbol(object.c21, c21);
    symbol(object.c22, c22);
    message.innerHTML = ''

})

let counter = 9;

c00.addEventListener("click", function (e) {
    // console.log("You clicked c00")
    if (isEmpty(object.c00) && !check()) {
        input = !input;
        object.c00 = input;
        audio.play();
        // console.log(object.c00)
        symbol(object.c00, c00)
        counter = counter - 1;
        check();
    }

})
c01.addEventListener("click", function (e) {
    // console.log("You clicked c01")
    if (isEmpty(object.c01) && !check()) {
        input = !input;
        object.c01 = input;
        audio.play();
        // console.log(object.c01)
        symbol(object.c01, c01)
        counter = counter - 1;
        check();
    }
})
c02.addEventListener("click", function (e) {
    // console.log("You clicked c02")
    if (isEmpty(object.c02) && !check()) {
        input = !input;
        object.c02 = input;
        audio.play();
        // console.log(object.c02)
        symbol(object.c02, c02);
        counter = counter - 1;
        check();
    }
})
c10.addEventListener("click", function (e) {
    if (isEmpty(object.c10) && !check()) {
        // console.log("You clicked c10")
        input = !input;
        object.c10 = input;
        audio.play();
        // console.log(object.c10)
        symbol(object.c10, c10)
        counter = counter - 1;
        check();
    }
})
c11.addEventListener("click", function (e) {
    // console.log("You clicked c11")
    if (isEmpty(object.c11) && !check()) {
        input = !input;
        object.c11 = input;
        audio.play();
        // console.log(object.c11)
        symbol(object.c11, c11)
        counter = counter - 1;
        check();
    }
})
c12.addEventListener("click", function (e) {
    // console.log("You clicked c12")
    if (isEmpty(object.c12) && !check()) {
        input = !input;
        object.c12 = input;
        audio.play();
        // console.log(object.c12)
        symbol(object.c12, c12)
        counter = counter - 1;
        check();
    }
})
c20.addEventListener("click", function (e) {
    // console.log("You clicked c20")
    if (isEmpty(object.c20) && !check()) {
        input = !input;
        object.c20 = input;
        audio.play();
        // console.log(object.c20)
        symbol(object.c20, c20)
        counter = counter - 1;
        check();
    }
})
c21.addEventListener("click", function (e) {
    // console.log("You clicked c21")
    if (isEmpty(object.c21) && !check()) {
        input = !input;
        object.c21 = input;
        audio.play();
        // console.log(object.c21)
        symbol(object.c21, c21)
        counter = counter - 1;
        check();
    }
})
c22.addEventListener("click", function (e) {
    // console.log("You clicked c22")
    if (isEmpty(object.c22) && !check()) {
        input = !input;
        object.c22 = input;
        audio.play();
        // console.log(object.c22)
        symbol(object.c22, c22)
        counter = counter - 1;
        check();
    }
})

function check() {

    if (object.c00 == object.c01) {
        if (object.c01 == object.c02) {
            // console.log("enter")
            if (object.c01 == true) {
                // console.log("p2 won");
                audioOverall.pause();
                audioWin.play();
                message.innerHTML = '( o ) won !!!'
            }
            else {
                // console.log("P1 won");
                message.innerHTML = '( x ) won !!!'
                audioWin.play();
            }
            return true;
        }

    }
    if (object.c10 == object.c11) {
        if (object.c11 == object.c12) {
            if (object.c11 == true) {
                // console.log("p2 won");
                audioOverall.pause();
                message.innerHTML = '( o ) won !!!'
                audioWin.play();
            }
            else {
                // console.log("P1 won");
                message.innerHTML = '( x ) won !!!'
                audioOverall.pause();
                audioWin.play();
            }
            return true;
        }
        // console.log("You won")
    }
    if (object.c20 == object.c21) {
        if (object.c21 == object.c22) {
            if (object.c21 == true) {
                // console.log("p2 won");
                message.innerHTML = '( o ) won !!!'
                audioOverall.pause();
                audioWin.play();
            }
            else {
                // console.log("P1 won");
                message.innerHTML = '( x ) won !!!'
                audioOverall.pause();
                audioWin.play();
            }
            return true;
        }
        // console.log("You won")
    }
    if (object.c00 == object.c11) {
        if (object.c11 == object.c22) {
            if (object.c11 == true) {
                // console.log("p2 won");
                message.innerHTML = '( o ) won !!!'
                audioOverall.pause();
                audioWin.play();
            }
            else {
                // console.log("P1 won");
                message.innerHTML = '( x ) won !!!'
                audioOverall.pause();
                audioWin.play();
            }
            return true;
        }
        // console.log("You won")
    }
    if (object.c02 == object.c11) {
        if (object.c11 == object.c20) {
            if (object.c11 == true) {
                // console.log("p2 won");
                message.innerHTML = '( o ) won !!!'
                audioOverall.pause();
                audioWin.play();
            }
            else {
                // console.log("P1 won");
                message.innerHTML = '( x ) won !!!'
                audioOverall.pause();
                audioWin.play();
            }
            return true;
        }
        // console.log("You won")
    }
    if (object.c00 == object.c10) {
        if (object.c10 == object.c20) {
            if (object.c10 == true) {
                // console.log("p2 won");
                message.innerHTML = '( o ) won !!!'
                audioOverall.pause();
                audioWin.play();
            }
            else {
                // console.log("P1 won");
                message.innerHTML = '( x ) won !!!'
                audioOverall.pause();
                audioWin.play();
            }
            return true;
        }
        // console.log("You won")
    }
    if (object.c01 == object.c11) {
        if (object.c11 == object.c21) {
            if (object.c11 == true) {
                // console.log("p2 won");
                message.innerHTML = '( o ) won !!!'
                audioOverall.pause();
                audioWin.play();
            }
            else {
                // console.log("P1 won");
                message.innerHTML = '( x ) won !!!'
                audioOverall.pause();
                audioWin.play();
            }
            return true;
        }
        // console.log("You won")
    }
    if (object.c02 == object.c12) {
        if (object.c12 == object.c22) {
            if (object.c12 == true) {
                // console.log("p2 won");
                message.innerHTML = '( o ) won !!!'
                audioOverall.pause();
                audioWin.play();
            }
            else {
                // console.log("P1 won");
                message.innerHTML = '( x ) won !!!'
                audioOverall.pause();
                audioWin.play();
            }
            return true;
        }
        // console.log("You won")
    }
    if (counter == 0) {
        message.innerHTML = 'Match Drawn!!!'
        return true;
    }
}

function symbol(obj, place) {
    if (obj == false) {
        place.innerHTML = '<i class="fas fa-times fa-3x fa-lg"></i>'
        // console.log("h")
    }
    else if (obj == true) {
        place.innerHTML = '<i class="far fa-circle fa-3x fa-lg"></i>'
        // console.log("b")
    }
    else {
        place.innerHTML = ''
    }
}

function isEmpty(obj) {
    if (obj == true || obj == false) {
        // console.log("not empty")
        return false;
    }
    else {
        // console.log("empty")
        return true;
    }
}
