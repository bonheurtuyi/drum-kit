//Getting all the drums keys
numberOfDrumsButton = document.querySelectorAll(".drum");

//Looping through drum keys
for (let i = 0; i < numberOfDrumsButton.length; i++) {

    //Click event listener
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        const buttonInnerHTML = this.innerHTML;
        playDrum(buttonInnerHTML);

    });
}

//Keyboard press event listener
document.addEventListener("keydown", function (event) {
    const buttonPress = event.key;
    playDrum(buttonPress);
})

//Play drum sound function
function playDrum(button){
    switch (button){
        case "w":
            let snare = new Audio('../src/sounds/snare.mp3');
            snare.play()
            break;

        case "a":
            let crash = new Audio('../src/sounds/crash.mp3');
            crash.play();
            break;

        case "s":
            let kick = new Audio('../src/sounds/kick-bass.mp3');
            kick.play();
            break;

        case "d":
            let tom1 = new Audio('../src/sounds/tom-1.mp3');
            tom1.play();
            break;

        case "j":
            let tom2 = new Audio('../src/sounds/tom-2.mp3');
            tom2.play();
            break;

        case "k":
            let tom3 = new Audio('../src/sounds/tom-3.mp3');
            tom3.play();
            break;

        case "l":
            let tom4 = new Audio('../src/sounds/tom-4.mp3');
            tom4.play();
            break;

        default:
            console.log("invalid key");
            break;
    }
}




