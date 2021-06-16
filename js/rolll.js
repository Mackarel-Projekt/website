const textArray = ["you", "me", "everyone"],
    typingDelay = 200,
    erasingDelay = 100,
    newTextDelay = 2000,
    typedText = document.querySelector(".typet");
let textArrayIndex = 0,
    characterIndex = 0;

let type = () => {
    if (characterIndex < textArray[textArrayIndex].length) {
        typedText.textContent += textArray[textArrayIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

let erase = () => {
    if (characterIndex > 0) {
        typedText.textContent = textArray[textArrayIndex].substring(0, characterIndex - 1);
        characterIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) {
            textArrayIndex = 0;
        }
        setTimeout(type, typingDelay);
    }
}
setTimeout(type, newTextDelay + 250);