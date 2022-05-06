function test() {
    var audio = new Audio("audioTest.mp3");
    if (flag) {
        audio = audio.play();
        flag = true;
    }
}

