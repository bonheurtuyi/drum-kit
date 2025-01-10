numberOfDrumsButton = document.querySelectorAll(".drum");

for (let i = 0; i < numberOfDrumsButton.length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        const buttonInnerHTML = this.innerHTML;
        switch (buttonInnerHTML){
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
    });

}





