numberOfDrumsButton = document.querySelectorAll(".drum");

for (let i = 0; i < numberOfDrumsButton.length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let audio = new Audio('../src/sounds/tom-1.mp3');
        audio.play();
    });

}


